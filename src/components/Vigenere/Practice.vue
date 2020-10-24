<template>
  <div class="container">
    <h1>Practice</h1>
    <div class="practices">
      <div
        v-for="(practice, index) in practices"
        :key="index"
        class="practice"
      >
        <Encryption
          :plainText="practice[0]"
          :vigenereKey="practice[1]"
          :guessPlainText="practice[2]"
          :guessEncryptedText="!practice[2]"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Encryption from './Encryption';

export default {
  name: 'VigenerePractice',
  components: {
    Encryption,
  },
  data() {
    return {
      practices: [
        // plaintext, key, guessOriginal
        ['APPLE', 'BEE', false],
        ['ALEXANDER', 'JANE', true],
        ['WASHINGTON', 'DC', false],
        ['BANANA', 'SUPER', true],
      ],
    };
  },
}
</script>

<style scoped>
.practices {
  display: flex;
  margin: 0 2rem;
  flex-wrap: wrap;
  justify-content: center;
}

.practice {
  margin: 1rem;
}
</style>
