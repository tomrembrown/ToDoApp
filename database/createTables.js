'use strict'

const path = require('path')

require('dotenv').config({ path: path.join(__dirname, '/.env') })

const { Client } = require('pg')
const fs = require('fs')

const sqlScript = fs
  .readFileSync(path.join(__dirname, '/createTables.sql'))
  .toString()

const client = new Client()

client.connect()
client
  .query(sqlScript)
  .then((r) => console.log('Tables successfully created!'))
  .catch((e) => console.error(e.stack))
  .then(() => client.end())
