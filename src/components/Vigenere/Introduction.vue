<template>
  <div>
    <img src="/Vigenere.jpg">
    <h1>Vigenère Cipher</h1>
    <p>
      The <b>Vigenère cipher</b> is a method of encrypting alphabetic text by using a series of interwoven Caesar ciphers, based on the letters of a keyword. First described by Giovan Battista Bellaso in 1553, the cipher is easy to understand and implement, but it resisted all attempts to break it until 1863, three centuries later. This earned it the description <b>le chiffre indéchiffrable</b> (French for 'the indecipherable cipher').
    </p>
    <p>
      In Vigenère cipher, you are given an encryption key that tells you how to shift the message.
      <Alphabet />
    </p>
  </div>
</template>

<script>
import Alphabet from './Alphabet.vue';

export default {
  name: 'VigenereIntro',
  components: {
    Alphabet,
  }
}
</script>

<style scoped>
div {
  padding: 1rem 2rem;
  text-align: left;
}

img {
  float: right;
  margin: 0 2rem;
  width: 10rem;
}
</style>
