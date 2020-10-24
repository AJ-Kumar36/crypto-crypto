<template>
  <div>
    <Introduction />
    <Table />
    <Encryption
      plainText="Happy"
      vigenereKey="SAD"
    />
    <Practice />
    <Conclusion />
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
    Table,
    Encryption,
    Practice,
    Conclusion,
  }
}
</script>

<style scoped>
</style>
