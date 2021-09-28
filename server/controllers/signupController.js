'use strict'
/*
 * This handles the REST API endpoint: post /signup. This signs up
 * users. It receives a json object containing email and password.
 * It creates this user in the login table and then returns the id.
 */

const bcrypt = require('bcrypt')
const saltRounds = 10
const asyncMiddleware = require('../utils/asyncMiddleware')
const signup = require('../model/signup')
const poolConnect = require('../model/poolConnect')
const {
  validateEmail,
  validatePassword,
} = require('../validation/commonValidation')
const checkEmailTaken = require('../model/checkEmailTaken')

const signupController = asyncMiddleware(async (req, res) => {
  const { email, password } = req.body

  let errorArray = []
  if (!validateEmail(email)) errorArray.push('invalid email')
  if (!validatePassword(password)) errorArray.push('invalid password')

  if (errorArray.length > 0) {
    const errorString = errorArray.join()
    return res.json(errorString)
  }

  const client = await poolConnect()

  try {
    const emailTaken = await checkEmailTaken(client, email)

    if (emailTaken) errorArray.push('email taken')

    if (errorArray.length > 0) {
      const errorString = errorArray.join()
      return res.json(errorString)
    }

    const signup_date = new Date()
    const password_hash = await bcrypt.hash(password, saltRounds)

    const data = await signup(client, email, password_hash, signup_date)
    return res.json(data)
  } catch (error) {
    console.error(`Error in  signupController: ${error.message}`)
    throw new Error(`Error in  signupController: ${error.message}`)
  } finally {
    client.release()
  }
})

module.exports = signupController
