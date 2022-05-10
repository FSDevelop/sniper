const fs = require('fs')

let filename = process.argv[2]

var file = fs.readFileSync(__dirname + `/../../../${filename}.sp`, {
    encoding: 'utf-8'
})

module.exports = file.split('\n')
