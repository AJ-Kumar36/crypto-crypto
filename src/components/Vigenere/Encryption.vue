<template>
  <div>
    <span>Alphabet encryption scheme goes here</span>
    <CircleLetter letter="A" />
  </div>
</template>

<script>
import CircleLetter from '../Common/CircleLetter.vue';

/**
 * TODO: Display the vigenere cipher layout
 * TODO: Allow users to guess the encrypted text based on the key and the plain text
 * TODO: Allow users to guess the plain text based on the key and the encrypted text
 * TODO: Allow users to customize the plain text and the key
 */

export default {
  name: 'VigenereEncryption',
  components: {
    CircleLetter,
  },
  props: {
    plainText: { type: String, required: true },
    key: { type: String, required: true },
    guessPlainText: { type: Boolean, default: false },
    guessEncryptedText: { type: Boolean, default: false },
    guessKey: { type: Boolean, default: false },
  },
}
</script>

<style scoped>
</style>
