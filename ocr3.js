const Tesseract = require('tesseract.js')
const path = require('path')

Tesseract
  .recognize('./img/img.png', { lang: path.resolve(__dirname, './tesseract/langs/3.02/por') })
  .then(function (result) {
    console.log(result.text)
  })
  .finally(e => {
    console.log('finally/n')
    process.exit()
  })