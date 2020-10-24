<template>
  <div>
    <Introduction v-show="$store.getters.canAccess(2, 0)" />
    <DecimalToBinary v-show="$store.getters.canAccess(2, 1)" :decimal="6" />
    <DecimalToBinary
      v-show="$store.getters.canAccess(2, 1)"
      :decimal="13"
      :guess="true"
    />
    <BinaryToDecimal v-show="$store.getters.canAccess(2, 2)" binary="00101" />
    <BinaryToDecimal
     v-show="$store.getters.canAccess(2, 2)"
      binary="00101"
      :guess="true"
    />
    <TryToConvert v-show="$store.getters.canAccess(2, 3)" />
    <Conclusion v-show="$store.getters.canAccess(2, 4)" />
  </div>
</template>

<script>
import Introduction from '../components/Binary/Introduction.vue';
import DecimalToBinary from '../components/Binary/DecimalToBinary.vue';
import BinaryToDecimal from '../components/Binary/BinaryToDecimal.vue';
import XorTable from '../components/Binary/XorTable.vue';
import TryToConvert from '../components/Binary/TryToConvert.vue'
import Conclusion from '../components/Binary/Conclusion.vue';
import Encryption from '../components/Binary/Encryption.vue';

export default {
  name: 'Binary',
  components: {
    Introduction,
    DecimalToBinary,
    BinaryToDecimal,
    TryToConvert,
    Conclusion,
  },
}
</script>

<style scoped>
</style>
