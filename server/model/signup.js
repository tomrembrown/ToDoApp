'use strict'

const signup = async function (client, email, password_hash, signup_date) {
  try {
    const response = await client.query(
      'INSERT INTO login (email, password_hash, signup_date) ' +
        'VALUES ($1, $2, $3) ' +
        'RETURNING id;',
      [email, password_hash, signup_date]
    )
    const id = parseInt(response.rows[0].id)

    const data = {
      id: id,
    }
    return data
  } catch (error) {
    console.error(`Error in signup: ${error.message}`)
    throw new Error(`Error in signup: ${error.message}`)
  }
}

module.exports = signup
