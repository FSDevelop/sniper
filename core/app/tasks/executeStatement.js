module.exports = (keyword, sentence, app) => {
    let statement = sentence.split(`${keyword} `)[1]
    switch (keyword) {
        case 'log':
            if (statement.includes('"')) {
                console.log(statement)
            } else {
                console.log(app.memory[statement])
            }
            break
        case 'var':
            let kv = statement.split(' = ')
            app.memory[kv[0]] = kv[1]
            break
        case 'const':
            console.log('const')
            break
        case 'if ':
            console.log('if')
            break
        case 'switch ':
            console.log('switch')
            break
        case 'for ':
            console.log('for')
            break
        case 'while ':
            console.log('while')
            break
        case 'do ':
            console.log('do')
            break
        default:
    }
}