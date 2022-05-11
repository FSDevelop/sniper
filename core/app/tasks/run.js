const { keywords } = require('../../../dictionary/d')
const executeStatement = require('./executeStatement')

module.exports = (sentence, app) => {
    try {
        let lineNotEmpty = sentence != '' && !/^( |\t)+$/.test(sentence)

        if (lineNotEmpty) {
            for (let keyword of keywords) {
                if (sentence.includes(`${keyword} `)) {
                    executeStatement(keyword, sentence, app)
                }
            }
        }
    } catch (e) {
        app.running = false
    }
}
