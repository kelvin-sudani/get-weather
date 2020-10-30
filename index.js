const axios = require('axios')

require('dotenv').config()
const KEY = process.env.KEY
const locationFromArgs = process.argv.slice(2)

const apiCall = async (item) => {
  let url = ''
  const checkIfInteger = parseInt(item) //input arg can be zipcode as well

  if (checkIfInteger) {
    url = `https://api.openweathermap.org/data/2.5/weather?zip=${item}&appid=${KEY}`
  } else {
    url = `https://api.openweathermap.org/data/2.5/weather?q=${item}&appid=${KEY}`
  }
  try {
    const response = await axios.get(url)
    const data = response.data
    console.log(`---> Weather Data for "${item}" : `)
    console.log(data)
  } catch (error) {
    const errorResponse = `---> Error with location : "${item}"====> ${error.response.data.cod} ${error.response.data.message}`
    console.log(errorResponse)
  }
}

//check for empty arg list
locationFromArgs.length > 0
  ? locationFromArgs.forEach(apiCall)
  : console.log(
      'Please add some arguments ... example: node index.js Boston Dallas London'
    )
