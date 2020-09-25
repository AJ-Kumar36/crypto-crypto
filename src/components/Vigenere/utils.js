function getVigenereSquare() {
  var y = [];
  var x = Array.from("abcdefghijklmnopqrstuvwxyz");
  for(i = 0; i < 26; ++i){
    y.push(x.slice(0))
    x.push(x.shift())
  }
  return y;
}

function encrypt(key, plainText) {
  //Input handling - the rest of the function breaks if we have 
  //uppercase letters
  //If we really need uppercase letter support, I can add that in later
  key = key.toLowerCase()
  plainText = plainText.toLowerCase()

  //Extract key length
  var length = key.length
  var encryptText = ""


  for(i = 0; i < plainText.length; ++i){

    //Check for spaces or special characters (don't "encrypt" these)
    if((plainText[i].charCodeAt() > 122) || (plainText[i].charCodeAt() < 97)){
      encryptText = encryptText.concat(plainText[i]);
      continue
    }

    //Calculate new character based on plaintext + key
    var encryptChar = (plainText[i].charCodeAt()) + (key[i%length].charCodeAt()) - 97

    //If we're outside the bounds of lowercase letters, subtract 26
    //to convert our now special character back to a lowercase letter
    if(encryptChar > 122){
      encryptChar -= 26
    }

    //Concatenate encrypted letter to encrypted string
    encryptText = encryptText.concat(String.fromCharCode(encryptChar))
  }
  return encryptText;
}

function decrypt(key, cipherText) {
  return '';
}

console.log(getVigenereSquare());
let key = 'crypto'
let plaintext = 'TBP Crypto Taskforce';
let ciphertext = encrypt(key, plaintext);
console.log(plaintext, "\n", ciphertext, "\n");
console.log(decrypt(key, ciphertext));

// PLAINTEXT
// BCDBCDBCD
// P  I  E
// Q  J  F
//  L  N  X
//  N  P  Z
//   A  T  T
//   D  W  W
// QNDJPWFZW