'use strict'

const checkEmailTaken = async function (client, email) {
  try {
    const response = await client.query(
      'SELECT id FROM login WHERE email=$1;',
      [email]
    )
    return !(response.rowCount === 0)
  } catch (error) {
    console.error(`Error in checkEmailTaken: ${error.message}`)
    throw new Error(`Error in checkEmailTaken: ${error.message}`)
  }
}

module.exports = checkEmailTaken
