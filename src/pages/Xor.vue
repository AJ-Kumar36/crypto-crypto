<template>
  <div>
    <XorTable v-show="$store.getters.canAccess(3, 0)" />
    <Encryption
      v-show="$store.getters.canAccess(3, 1)"
      plainText="Crypto"
      encKey="TBP"
    />  
    <Conclusion 
      v-show="$store.getters.canAccess(3, 2)"
    />
  </div>
</template>

<script>
import XorTable from '../components/Binary/XorTable.vue';
import Conclusion from '../components/Binary/Conclusion.vue';
import Encryption from '../components/Binary/Encryption.vue';

export default {
  name: 'XOR',
  components: {
    XorTable,
    Encryption,
    Conclusion
  },
}
</script>

<style scoped>
</style>
