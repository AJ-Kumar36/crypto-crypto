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
      plainTextInputs: ["Decrypting", "Engineer", "Mindset"],
      plainTextKeys: ["MSG", "Math", "TBP"],
      encryptedInputs: ["Alexander", "School", "Binary"],
      encryptingKeys: ["Julie", "Remote"]
    }
  },
  methods: {

  }
}
</script>

<style scoped>

</style>