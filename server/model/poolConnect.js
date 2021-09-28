'use strict'

const { Pool } = require('pg')

const poolConnect = async function () {
  const pool = new Pool()

  // the pool will emit an error on behalf of any idle clients
  // it contains if a backend error or network partition happens
  pool.on('error', (err) => {
    console.error('Unexpected error on idle client', err)
    process.exit(-1)
  })

  const client = await pool.connect()

  return client
}

module.exports = poolConnect
