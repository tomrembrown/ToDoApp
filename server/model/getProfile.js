'use strict'

const getProfile = async function (client, id) {
  try {
    const getProfileQuery =
      'SELECT   id, handle, tagline, description, image_filename, aboutme, location ' +
      'FROM profiles ' +
      'WHERE id=$1;'
    const response = await client.query(getProfileQuery, [id])
    let data
    if (response.rowCount === 0) data = []
    else {
      data = response.rows[0]
    }
    return data
  } catch (error) {
    console.error(`Error in getProfile: ${error.message}`)
    throw new Error(`Error in getProfile: ${error.message}`)
  }
}

module.exports = getProfile
