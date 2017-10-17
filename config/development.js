const { resolve } = require('path')
const r = path => resolve(__dirname, path)

module.exports = {
  route: {
    path: r('../src/controller')
  }
}