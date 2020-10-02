<template>
  <div>
    <span>Alphabet list goes here</span>
    <CircleLetter letter="A" />
  </div>
</template>

<script>
import CircleLetter from '../Common/CircleLetter.vue';

export default {
  name: 'VigenereAlphabet',
  components: {
    CircleLetter,
  },
}
</script>

<style scoped>
</style>
