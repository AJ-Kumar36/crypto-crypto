<template>
  <div>
    <Introduction v-show="$store.getters.canAccess(1, 0)" />
    <Encryption
      v-show="$store.getters.canAccess(1, 1)"
      plainText="Happy"
      vigenereKey="SAD"
    />
    <Practice v-show="$store.getters.canAccess(1, 2)" />
    <Conclusion v-show="$store.getters.canAccess(1, 3)" />
  </div>
</template>

<script>
import Introduction from '../components/Vigenere/Introduction.vue';
import Table from '../components/Vigenere/Table.vue';
import Encryption from '../components/Vigenere/Encryption.vue';
import Practice from '../components/Vigenere/Practice.vue';
import Conclusion from '../components/Vigenere/Conclusion.vue';

export default {
  name: 'Vigenere',
  components: {
    Introduction,
    Encryption,
    Practice,
    Conclusion,
  }
}
</script>

<style scoped>
</style>
