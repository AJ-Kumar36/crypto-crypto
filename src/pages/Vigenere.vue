<template>
  <div>
    <Introduction />
    <Table />
    <div class="tables">
      <Encryption
        plainText="Crypto"
        vigenereKey="Mod"
        :guessPlainText="true"
        :guessEncryptedText="false"
      />
      <Encryption
        plainText="MindSET"
        vigenereKey="TBP"
        :guessPlainText="false"
        :guessEncryptedText="true"
      />
    </div>
    <Conclusion />
  </div>
</template>

<script>
import Introduction from '../components/Vigenere/Introduction.vue';
import Table from '../components/Vigenere/Table.vue';
import Encryption from '../components/Vigenere/Encryption.vue';
import Conclusion from '../components/Vigenere/Conclusion.vue';

export default {
  name: 'Vigenere',
  components: {
    Introduction,
    Table,
    Encryption,
    Conclusion,
  }
}
</script>

<style scoped>
.tables {
  display: flex;
  justify-content: center;
}

.tables > *:not(:first-child){
  margin-left: .5rem;
}
</style>
