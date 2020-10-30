const axios = require('axios')

require('dotenv').config()
const KEY = process.env.KEY
const args = process.argv.slice(2)
console.log('Command Line arguments are: ', args)
