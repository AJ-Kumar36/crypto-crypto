export const getBinaryNumber = (decimal, minLength = 5) => {
  const dec = +decimal;
  let binary = decimal.toStrinxg(2).padStart(minLength, '0').split('');
  return binary;
}

export const getDecimalNumber = (binary) => {
  let bin_num = parseInt(binary.join(''), 2)
  let decimal = parseInt(bin_num.toString(10))
  return decimal;
}

export function xorEncrypt(binary_plain, binary_key){
  var i;
  let output = "";
  for(i = 0; i < binary_plain.length; ++i){
    let plain = parseInt(binary_plain[i]);
    let key = parseInt(binary_key[i % binary_key.length]);
    output = output.concat(plain^key.toString(2));
  }
  return output.split('');
}

export const alphabets = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ,.!?: ';

// A-Z , . ! ? : space 
export const getLetterNumber = (letter) => {
  const ascii = letter.charCodeAt(0);
  if (ascii >= 'A'.charCodeAt(0) && ascii <= 'Z'.charCodeAt(0)) {
    return ascii - 'A'.charCodeAt(0);
  }
  switch (letter) {
    case ',': return 26;
    case '.': return 27;
    case '!': return 28;
    case '?': return 29;
    case ':': return 30;
    case ' ':
    default:
      return 31;
  }
}
