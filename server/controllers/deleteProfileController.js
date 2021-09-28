'use strict'
/*
 * This handles the route delete - profile/:id
 * It receives as the express parameter the id of the profile - and
 * then deletes this profile in all database tables - the return message
 * to the client is just a success message if it worked
 */

const asyncMiddleware = require('../utils/asyncMiddleware')
const deleteProfile = require('../model/deleteProfile')
const poolConnect = require('../model/poolConnect')
const { validateId } = require('../validation/commonValidation')

const deleteProfileController = asyncMiddleware(async (req, res) => {
  const { id } = req.params

  if (!validateId(id)) return res.json('invalid id')

  const client = await poolConnect()

  try {
    await deleteProfile(client, id)
    res.json('success')
  } catch (error) {
    console.error(`Error in  deleteProfileController: ${error.message}`)
    throw new Error(`Error in  deleteProfileController: ${error.message}`)
  } finally {
    client.release()
  }
})

module.exports = deleteProfileController
