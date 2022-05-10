const { run, sentences } = require('./tasks')
  
module.exports = class App {
    memory = {}
    running = true
    i = 0

    constructor() {
        console.info('INFO: Sniper started running your code')
    }

    isRuntime() {
        return this.running
    }

    runNextSentence() {
        if (sentences.length > 0 && this.i < sentences.length) {
            run(sentences[this.i++], this)
        } else {
            this.running = false
        }
    }
}
