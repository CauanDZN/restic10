const pi = require('./novafuncao.js')
console.log(pi)

const message = "O parâmetro é: "

function showParam(param) {
  const message = "O argumento é: "
  return message + param
}

console.log(showParam(5))

module.exports = { message, showParam }