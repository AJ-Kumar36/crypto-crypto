<template>
  <div class="questions">
    <p>Convert the following numbers from decimal to binary.</p>
    <div 
      v-for="(decimal, index) in decimalInputs"
      :key="`decToBin-${index}`"
      class="decimal-converter" 
    >
      <span class="decimal-questions">{{ decimalInputs[index] }}</span>
      <InputBox 
        :answer="convertToBinary(index).join('')"
        :numberOnly="true"
        :bottomBorderOnly="true"
        :maxLength="5"
      />
    </div>
    <p>Convert the following numbers from binary to decimal.</p>
    <div 
      v-for="(binary, index) in binaryInputs"
      :key="`binToDec-${index}`"
      class="binary-converter" 
    >
      <span class="binary-questions"> {{ `${binaryInputs[index]}` }} </span>
      <InputBox 
        :answer="convertToDecimal(index)"
        :numberOnly="true"
        :maxLength="2"
      />
    </div>
  </div>
</template>

<script>

import InputBox from "../Common/InputBox.vue"
import {getBinaryNumber, getDecimalNumber} from "./utils"

export default {
  name: "BinaryDecimalConvert",
  components: {
    InputBox
  },
  data() {
    return {
      decimalInputs: [5, 27, 30, 15, 16],
      binaryInputs: ["10111", "11111", "01101", "01000", "00111"],
    }
  },
  methods: {
    convertToBinary(index){
      console.log(123, index, this.decimalInputs, getBinaryNumber(this.decimalInputs[index]))
      return getBinaryNumber(this.decimalInputs[index])
    },
    convertToDecimal(index){
      return getDecimalNumber(this.binaryInputs[index].split('')).toString()
    }
  }
}
</script>

<style scoped>
.decimal-converter {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}

.decimal-questions {
  margin-right: 0.5rem;
  display: inline-block;
  min-width: 1.5rem;
  text-align: right;
}

.questions {
  font-size: 1.5rem
}

.binary-converter {
  display: flex;
  flex-direction: row;
  margin-bottom: 1.5rem;
  align-items: center;
  justify-content: center;
}

.binary-questions {
  margin-right: 0.5rem;
  display: inline-block;
  min-width: 1.5rem;
  text-align: right;
}
</style>