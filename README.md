# get-weather

Get weather info of different locations passed as an array

# Assumptions:

Passed list can be a mixture of city name and zipcodes
example:
`npm start Boston Dallas London 283hek2wdh8 10005`

For any invalid item an error will be thrown with 404 code and error msg. Rest of the locations should show the weather data as expected.

# How to use:

1. clone the repo
2. go to the directory where repo is cloned
3. add .env file with `KEY` after signing up from [openweathermap.org](https://openweathermap.org/current)
4. run `npm i`
5. run `npm start Boston Dallas London 283hek2wdh8 10005`
6. Check the terminal for response
