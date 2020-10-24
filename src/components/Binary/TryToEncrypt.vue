<template>
  <div class="questions">
    <p> Try to encrypt a few messages yourself, using the provided keys! </p>
    <div class="encryption-questions" />
    <p> Now, let's see if you can decrypt a few of these messages, given the  encryption keys.</p>
    <div class="decryption-questions" />
    <p> Do you think you could have decrypted the messages above if you didn't know what the key was?</p>
  </div>
</template>

<script>

import InputBox from "../Common/InputBox.vue"

export default {
  name: "XorTryToEncrypt",
  components: {
    InputBox
  },
  data() {
    return {
      decimalInputs: ["6", "23", "30", "15", "16"],
      binaryInputs: ["10111", "11111", "01101", "01000", "00111"],
      plainTextInputs: ["Decrypting", "Engineer", "Mindset"],
      plainTextKeys: [""]
    }
  },
  methods: {

  }
}
</script>

<style scoped>

</style>