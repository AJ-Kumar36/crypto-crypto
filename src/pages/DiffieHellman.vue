<template>
  <div>
    <Introduction />
    <Encryption 
      v-model="diffie" 
    />
    <XorEncryption
      plainText="Diffie"
      :encKey="diffie"
      :allowCustomKey="false"
      :allowCustomText="false"
    />
    <Conclusion />
  </div>
</template>


<script>
import Introduction from '../components/Diffie-Hellman/Introduction.vue'
import Encryption from '../components/Diffie-Hellman/Encryption.vue'
import XorEncryption from '../components/Binary/Encryption.vue'
import Conclusion from '../components/Diffie-Hellman/Conclusion.vue'

export default {
  name: "DiffieHellman",
  components: {
    Introduction,
    Encryption,
    XorEncryption,
    Conclusion
  },
  data() {
    return {
      diffie: null,
    }
  }
}
</script>

<style scoped>

</style>