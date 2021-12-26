// A quick word for my approach:
// After analyzing the source code, we see that we have 3 encrypted "messages"
// One is the email, one the password, and one the number for the giftcard.
// I have never worked with cryptoJS before, so ill need to google most things together
// also please note that this is everything but clean code,
// i hacked this together on my ipad in 5 minutes.
// Back to the approach:
// for Ease of access i have copied the code into here:
/* (function() {
    window.login = () => {
      const formEmail = document.getElementById('email').value
      const formPassword = document.getElementById('password').value
      const password = formEmail + '-' + formPassword
      if (CryptoJS.enc.Hex.stringify(CryptoJS.enc.Utf8.parse(formEmail)) === '73616e746140686f746d61696c2e636f6d' && CryptoJS.enc.Hex.stringify(CryptoJS.enc.Utf8.parse(formPassword)) === '6963686c696562656b696e646572') {
        try {
          const decryptedString = JSON.parse(CryptoJS.AES.decrypt('U2FsdGVkX18Bv3ogjv9E0E4fEqPOqltlowBB0Mc0gdM=', password).toString(CryptoJS.enc.Utf8))
          alert('GLÜCKWUNSCH!! Du hast die erste Aufgabe geschafft und damit die ersten 4 Ziffern des Gutscheincodes gehackt: ' + decryptedString + ' (Schreibe dir den Code auf und warte auf das nächsten Part. Verpasse keine Videos und folge mir auf TikTok https://www.tiktok.com/@jonathanschndr)')
        } catch {
          alert('Leider falsch')
        }
      } else {
        alert('Leider falsch')
      }
    }
  })();
 */

// first, lets import cryptojs
const CryptoJS = require('crypto-js')

// Now we take our encrypted values from the sourcecode
// Encrypted as Hex
const email = '73616e746140686f746d61696c2e636f6d'

// Encrypted as Hex
const password = '6963686c696562656b696e646572'


// We parse the Email to our word array
let enc_email = CryptoJS.enc.Hex.parse(email)
let enc_password = CryptoJS.enc.Hex.parse(password)

// Now we can convert the Word array to actual strings.
// We know that the Encoder is UTF8 since the input string first gets parsed to utf8
// -> and then converted to a hex string.
enc_email = enc_email.toString(CryptoJS.enc.Utf8)
enc_password = enc_password.toString(CryptoJS.enc.Utf8)

// we log the decrypted values to standart output
console.log(enc_email, enc_password);


// quick note: "ichliebekinder" doesnt sound... weird... at all.

// to be complete, we can now decrypt the final code.

const giftcode = 'U2FsdGVkX18Bv3ogjv9E0E4fEqPOqltlowBB0Mc0gdM='
const gift_pw = `${enc_email}-${enc_password}`

const decryptedString = JSON.parse(CryptoJS.AES.decrypt('U2FsdGVkX18Bv3ogjv9E0E4fEqPOqltlowBB0Mc0gdM=', gift_pw).toString(CryptoJS.enc.Utf8))

console.log(decryptedString)

// Feel free to copy and paste this code, but you will have to live with the
// feeling that you didn't really solve it yourself >:)
