'use strict'

const deleteProfile = async function (client, id) {
  try {
    await client.query('BEGIN TRANSACTION;')
    await client.query('DELETE FROM profiles WHERE id=$1;', [id])
    await client.query('DELETE FROM login WHERE id=$1;', [id])
    await client.query('COMMIT TRANSACTION;')
  } catch (error) {
    console.error(`Error in deleteProfile: ${error.message}`)
    throw new Error(`Error in deleteProfile: ${error.message}`)
  }
}

module.exports = deleteProfile
