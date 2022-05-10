const { App } = require('./core')

let app = new App()

do {
    app.runNextSentence()
} while (app.isRuntime())
