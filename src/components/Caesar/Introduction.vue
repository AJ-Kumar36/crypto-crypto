<template>
  <div>
    <img src="/Julius_Caesar.jpeg">
    <h1>Caesar Cipher</h1>
    <p>
      In cryptography, a Caesar cipher is one of the simplest and most widely known encryption techniques. It is a type of substitution cipher in which each letter in the plaintext is replaced by a letter some fixed number of positions down the alphabet. For example, with a left shift of 3, D would be replaced by A, E would become B, and so on. The method is named after Julius Caesar, who used it in his private correspondence.
    </p>
    <LetterShift from="A" to="E" :showShift="true" />
    <LetterShift from="E" to="A" :showShift="true" />
    <LetterShift from="A" to="Z" :showShift="true" />
    <LetterShift from="A" to="E" :showShift="true" :shiftLeft="true" />
    <LetterShift from="E" to="A" :showShift="true" :shiftLeft="true" />
    <LetterShift from="A" to="Z" :showShift="true" :shiftLeft="true" />
  </div>
</template>

<script>
import LetterShift from '../Common/LetterShift.vue';

export default {
  name: 'CaesarIntro',
  components: {
    LetterShift,
  }
}
</script>

<style scoped>
div {
  padding: 1rem 2rem;
  text-align: left;
}

img {
  float: left;
  margin: 0 4rem 0 2rem;
  transform: rotate(-15deg);
}
</style>
