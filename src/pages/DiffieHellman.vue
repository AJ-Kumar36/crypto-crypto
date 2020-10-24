<template>
  <div>
    <Introduction 
      v-show="$store.getters.canAccess(4, 0)"
    />
    <Encryption 
      v-show="$store.getters.canAccess(4, 1)"
      v-model="diffie" 
    />
    <XorEncryption
      v-show="$store.getters.canAccess(4, 2)"
      plainText="Diffie"
      :encKey="diffie"
      :allowCustomKey="false"
      :allowCustomText="false"
    />
    <Conclusion 
      v-show="$store.getters.canAccess(4, 3)"
    />
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
