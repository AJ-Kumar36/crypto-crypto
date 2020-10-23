const getBinaryNumber = (decimal, minLength = 5) => {
  const dec = +decimal;
  let binary = decimal.toString(2).padStart(minLength, '0').split('');
  return binary;
}

function xor(binary_plain, binary_key){
  var i;
  let output = "";
  for(i = 0; i < binary_plain.length; ++i){
    let plain = parseInt(binary_plain[i]);
    let key = parseInt(binary_key[i%binary_key.length]);
    console.log(plain^key.toString(2))
    output = output.concat(plain^key.toString(2));
  }
  console.log(output)
  return output.split('');
}

let decimalTest = 14;
let keyTest = "010";
let binaryTest = getBinaryNumber(decimalTest)
console.log(binaryTest)
console.log(binaryTest.join(''))
console.log(xor(binaryTest.join(''), keyTest))
