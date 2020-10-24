<template>
  <div class="questions">
    <p><b><h1>Try to encrypt a few messages yourself, using the provided keys!</h1></b></p>
    <div class="plaintext-container">
      <div 
        v-for="(text, index) in plainTextInputs"
        :key="`encrypt-${index}`"
        class="encryption-questions" 
      >
        <span class="encryption-question">{{ `Message: ${plainTextInputs[index]} | Key: ${plainTextKeys[index]}` }}</span>
        <InputBox 
          :answer="plainTextAnswers[index]"
          width="16rem"
        />
      </div>
    </div>
    <p><b><h1>Now, let's see if you can decrypt a few of these messages, given the  encryption keys.</h1></b></p>
    <div class="decryption-container">
      <div 
        v-for="(text, index) in encryptedInputs"
        :key="`decrypt-${index}`"
        class="decryption-questions" 
      >
        <span class="decryption-question">{{ `Message: ${encryptedInputs[index]} | Key: ${encryptingKeys[index]}` }}</span>
        <InputBox 
          :answer="decryptAnswers[index]"
          width="16rem"
        />
      </div>
    </div>
    <p><b>Do you think you could have decrypted the messages above if you didn't know what the key was?</b></p>
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
      plainTextInputs: ["DECRYPTING", "ENGINEER", "MINDSET", "INVPBEXW"],
      plainTextKeys: ["MSG", "MATH", "TBP", "MATH"],
      plainTextAnswers: ["PWE?KJ-,LK", "INVPBEXW", "-JCQTLA", "ENGINEER"],
      encryptedInputs: ["J-P-EEXPZ", "IKCCKK", "CMPDV,"],
      encryptingKeys: ["JULIE", "ZOOM", "DEC"],
      decryptAnswers: ["ALEXANDER", "REMOTE", "BINARY"]
    }
  },
  methods: {

  }
}
</script>

<style scoped>
.questions {
  font-size: 1.5rem;
}

.plaintext-container {
  justify-content: flex-start;
  align-items: center;
}

.encryption-questions {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 2rem;
}

.encryption-question {
  margin-right: 1.5rem;
}

.decryption-container {
  justify-content: flex-start;
  align-items: center;
}

.decryption-questions {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 2rem;
}

.decryption-question {
  margin-right: 1.5rem;
}
</style>