// used to define the initial conditions of the tests
const {Given} = require('cucumber')

Given('a user opens {string}', (url) => {
    console.log(url)
})