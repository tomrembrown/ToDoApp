'use strict'

const getLoginData = async function (client, email) {
  try {
    const data = await client.query(
      'SELECT id, password_hash FROM login WHERE email=$1;',
      [email]
    )
    return data
  } catch (error) {
    console.error(`Error in getLoginData: ${error.message}`)
    throw new Error(`Error in getLoginData: ${error.message}`)
  }
}

module.exports = getLoginData
