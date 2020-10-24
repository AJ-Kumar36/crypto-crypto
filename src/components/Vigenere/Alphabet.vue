<template>
  <div class="container">
    <div
      v-for="(item, index) in letterArr"
      :key="item"
      class="letter-container"
    >
      <CircleLetter :letter="item" />
      {{ index }}
    </div>
  </div>
</template>

<script>
import CircleLetter from '../Common/CircleLetter.vue';

export default {
  name: 'VigenereAlphabet',
  components: {
    CircleLetter,
  },
  computed: {
    letterArr() {
      let letters = [];
      for (let i = 0; i < 26; i++) {
        letters.push(String.fromCharCode(i + 65));
      }
      return letters;
    },
  }
}
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

.letter-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0.25rem;
}
</style>