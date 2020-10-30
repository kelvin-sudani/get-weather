const axios = require('axios')

require('dotenv').config()
const KEY = process.env.KEY
const locationFromArgs = process.argv.slice(2)

const apiCall = async (item) => {
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${item}&appid=${KEY}`
  try {
    const response = await axios.get(url)
    const data = response.data
    console.log(`---> Weather Data for "${item}" : `)
    console.log(data)
  } catch (error) {
    console.log(error)
  }
}

apiCall('Boston')
