const fs = require('fs')

const promise = new Promise((resolve, reject) => {
    console.log('Lendo arquivo...')
    const data = fs.readFileSync('file.txt', 'utf8')
    resolve(data)
}).then((value) => {
    console.log('Arquivo lido com sucesso!')
    console.log(value)
}).catch((err) => {
    console.log(err)
})