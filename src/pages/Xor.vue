<template>
  <div>
    <XorTable />
    <Encryption
      plainText="Crypto"
      encKey="TBP"
    />  
    <Conclusion />
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
