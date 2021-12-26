// This is just a playground file to try out cryptojs
const CryptoJS = require('crypto-js')


const password = CryptoJS.enc.Hex.stringify(CryptoJS.enc.Utf8.parse("supersecret"))

console.log(password)

const enc_password = CryptoJS.enc.Hex.parse(password)

console.log(enc_password.toString(CryptoJS.enc.Utf8), typeof enc_password)