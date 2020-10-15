<template>
  <div>
    <h1>Conclusion</h1>
    <p>
      Comparing to the Caesar cipher, the Vigenère cipher is more secure because not every character of the word to be encrypted is shifted by the same amount. The only way to solve the encryption is by knowing the keyword. Even if there was some easy way to solve the encryption, you wouldn't know if the deciphered word was the original word or the keyword because each character in the encrypted word is made out of characters from the two separate words.
    </p>
  </div>
</template>

<script>
export default {
  name: 'VigenereConclusion'
}
</script>

<style scoped>
</style>
