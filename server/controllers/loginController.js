'use strict'
/*
 * This handles the REST API endpoint: post /login. This signs users in
 * users. It receives a json object containing email and password then
 * checks if that mathces what is in the database. If it does it
 * returns the contents of the profiles table: id, handle,
 */

const bcrypt = require('bcrypt')
const asyncMiddleware = require('../utils/asyncMiddleware')
const getLoginData = require('../model/getLoginData')
const getProfile = require('../model/getProfile')
const poolConnect = require('../model/poolConnect')
const {
  validateEmail,
  validatePassword,
} = require('../validation/commonValidation')

const loginController = asyncMiddleware(async (req, res) => {
  const { email, password } = req.body

  if (!validateEmail(email) || !validatePassword(password)) {
    return res.json('Invalid user credentials')
  }

  const client = await poolConnect()

  try {
    const loginData = await getLoginData(client, email)

    if (loginData.rowCount === 0) {
      return res.json('Invalid user credentials')
    } else {
      const { id, password_hash } = loginData.rows[0]
      const match = await bcrypt.compare(password, password_hash)
      if (match) {
        const data = await getProfile(client, id)
        return res.json(data)
      } else {
        return res.json('Invalid user credentials')
      }
    }
  } catch (error) {
    console.error(`Error in  loginController: ${error.message}`)
    throw new Error(`Error in  loginController: ${error.message}`)
  } finally {
    client.release()
  }
})

module.exports = loginController
