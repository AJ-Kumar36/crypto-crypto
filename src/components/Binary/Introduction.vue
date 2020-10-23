<template>
  <div>
    <h1>XOR Cipher</h1>
    <p><Power :superscript="0">2</Power>=1</p>
    <p><Power :superscript="1">2</Power>=2</p>
    <p><Power :superscript="2">2</Power>=2×2=4</p>
    <p><Power :superscript="3">2</Power>=2×2×2=<InputBox answer="8" :numberOnly="true" /></p>
    <p><Power :superscript="4">2</Power>=2×2×2×2=<InputBox answer="16" :numberOnly="true" /></p>
    <p><Power :superscript="5">2</Power>=2×2×2×2×2=<InputBox answer="32" :numberOnly="true" /></p>
  </div>
</template>

<script>
import InputBox from '../Common/InputBox.vue';
import Power from '../Common/Power.vue';

export default {
  name: 'BinaryIntro',
  components: {
    InputBox,
    Power,
  },
}
</script>

<style scoped>
p {
  height: 2rem;
}
</style>
