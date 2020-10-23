<template>
  <div class="container">
    <div
      v-for="(decimal, index) in plaintextToDecimals"
      :key="index"
      lass="letter-panel">
    
      <div class="from-text">
        <span>{{ sanitizedInputs[index] }}</span>
        <v-stage :config="konvaConfig">
          <v-layer>
            <v-arrow
              :points="[8, 6, 32, 6]"
              fill="#2c3e50"
              stroke="#2c3e50"
              :stroke-width="4"
            />
          </v-layer>
        </v-stage>
        <span>{{ getLetterNumber(sanitizedInputs[index]) }}</span>
      </div>

      <span class="binary-numbers">{{ decimalToBinary[index] }}</span>
      <div>
        <span>⊕</span>
        <span class="binary-numbers">{{ keyToBinary[index] }}</span>
      </div>
      <div class="line" />
      <InputBox
        :answer="encryptedBinary[index]"
        alphabet="01"
        :maxLength="5"
        :bottomBorderOnly="true"
      />

      <div class="to-text">
        <span>{{ getLetterNumber('K') }}</span>
        <v-stage :config="konvaConfig">
          <v-layer>
            <v-arrow
              :points="[8, 6, 32, 6]"
              fill="#2c3e50"
              stroke="#2c3e50"
              :stroke-width="4"
            />
          </v-layer>
        </v-stage>
        <span>K</span>
      </div>
    </div>
  </div>
</template>

<script>
import InputBox from "../Common/InputBox"
import { getBinaryNumber, getDecimalNumber, xorEncrypt, getLetterNumber, alphabets } from "./utils"

const aAscii = 'A'.charCodeAt(0);
const zAscii = 'Z'.charCodeAt(0);

export default {
  name: "XOREncryption",
  components: {
    InputBox
  },
  props: {
    plainText: { type: String, required: true },
    encKey: { type: String, required: true },
  },
  data() {
    return {
      repetitiveKey: [],
      konvaConfig: {
        width: 40,
        height: 11
      },
    }
  },
  computed: {
    sanitizedInputs() {
      let text = (this.plainText || '').toUpperCase();
      let sanitizedText = '';

      for (let char of text) {
        const charCode = char.charCodeAt(0);
        if (charCode >= aAscii && charCode <= zAscii) {
          sanitizedText += char;
        }
      }
      return sanitizedText.split('');
    },
    plaintextToDecimals() {
      let decimals = []
      for (let char of this.plainTextInputs) {
        decimals.push(this.getLetterNumber(char))
      }
      return decimals
    },
    decimalsToText() {
      let text = []
      for (let letter of this.encTextDecimals) {
        text.push(fromCharCode(letter + aAscii))
      }
      return text
    },
    decimalsToBinary(){
      let binary = []
      for (let decimal of this.plainTextDecimals){
        binary.push(getBinaryNumber(decimal))
      }
      return binary
    },
    binaryToDecimals() {
      let decimal = []
      for (let binary of this.encTextBinary){
        decimal.push(getDecimalNumber(binary.split('')))
      }
      return decimal
    },
    encryptedBinary() {
      let encrypted = []
      let key = this.encKey.split('')
      for (let letter of this.plainTextBinary){
        encrypted.push(xorEncrypt(letter, key).join(''))
      }
      return encrypted
    },
    encryptedText() {
      
    },
    keyToBinary() {
      let encArray = encKey.split('');
      var i
      for(i = 0;)
      return 0
    }
  },
  methods: {
    getLetterNumber(letter) {
      return getLetterNumber(letter);
    }
  }
}
</script>

<style scoped>
.container {
  padding: 0 8rem;
}

.letter-panel {
  width: 12rem;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  font-size: 1.5rem;
}

.from-text, .to-text {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}

.from-text {
  margin-bottom: .5rem;
}

.to-text {
  margin-top: .5rem;
}

.binary-numbers {
  letter-spacing: 1rem;
  padding-left: 1rem;
  text-align: left;
}

.line {
  background-color: #333;
  height: 1px;
  width: 100%;
}
</style>
