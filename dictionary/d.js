const fs = require("fs");

let d = fs.readFileSync(__dirname + '/d.json', {
    encoding: 'utf-8'
})

d = JSON.parse(d)

module.exports = {
    ...d
}
