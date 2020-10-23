<template>
  <div>
    <Introduction />
    <DecimalToBinary :decimal="6" />
    <DecimalToBinary
      :decimal="13"
      :guess="true"
    />
    <BinaryToDecimal binary="00101" />
    <BinaryToDecimal
      binary="00101"
      :guess="true"
    />
    <Conclusion />
  </div>
</template>

<script>
import Introduction from '../components/Binary/Introduction.vue';
import DecimalToBinary from '../components/Binary/DecimalToBinary.vue';
import BinaryToDecimal from '../components/Binary/BinaryToDecimal.vue';
import XorTable from '../components/Binary/XorTable.vue';
import Conclusion from '../components/Binary/Conclusion.vue';
import Encryption from '../components/Binary/Encryption.vue';

export default {
  name: 'Binary',
  components: {
    Introduction,
    DecimalToBinary,
    BinaryToDecimal,
    Conclusion,
  },
}
</script>

<style scoped>
</style>
