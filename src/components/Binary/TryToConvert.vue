<template>
  <div class="questions">
    <p>Convert the following numbers from decimal to binary.</p>
    <div class="decimal-converter" />
    <p>Convert the following numbers from binary to decimal.</p>
    <div class="binary-converter" />
  </div>
</template>

<script>

import InputBox from "../Common/InputBox.vue"

export default {
  name: "BinaryDecimalConvert",
  components: {
    InputBox
  },
  data() {
    return {
      decimalInputs: ["6", "23", "30", "15", "16"],
      binaryInputs: ["10111", "11111", "01101", "01000", "00111"],
    }
  },
  methods: {

  }
}
</script>

<style scoped>

</style>