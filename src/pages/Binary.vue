<template>
  <div>
    <Introduction />
    <DecimalToBinary :decimal="6" />
    <DecimalToBinary :decimal="13" :guess="true" />
    <Encryption
      plainText="Crypto"
      binaryKey="TBP"
    />
    <Conclusion />
  </div>
</template>

<script>
import Introduction from '../components/Binary/Introduction.vue';
import DecimalToBinary from '../components/Binary/DecimalToBinary.vue';
import Conclusion from '../components/Binary/Conclusion.vue';
import Encryption from '../components/Binary/Encryption.vue';

export default {
  name: 'Binary',
  components: {
    Introduction,
    DecimalToBinary,
    Encryption,
    Conclusion,
  },
}
</script>

<style scoped>
</style>
