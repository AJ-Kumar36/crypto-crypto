<template>
  <div class="overall-container">
    <div class="inputs">
      <el-input
        v-if="allowCustomizedPlaintext"
        v-model="customPlain"
        class="input"
        placeholder="Plaintext"
        @input="updateCustomizedInput"
      />
      <el-input
        v-if="allowCustomizedKey"
        v-model="customKey"
        class="input"
        placeholder="Key Text"
        @input="updateCustomizedKeyInput"
      />
    </div>
    <div class="container">
      <div
        v-for="(decimal, index) in plaintextToDecimals"
        :key="index"
        class="letter-panel"
      >
        <div class="from-text">
          <span>({{ sanitizedInputs[index] }}</span>
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
          <span>{{ getLetterNumber(sanitizedInputs[index]) }}) ⊕ {{ sanitizedKey[index % sanitizedKey.length] }}</span>
        </div>

        <span class="binary-numbers">{{ decimalsToBinary[index].join('') }}</span>
        <div>
          <span>⊕</span>
          <span class="binary-numbers">{{ repeatKeyToBinary[index] }}</span>
        </div>
        <div class="line" />
        <InputBox
          :answer="`${encTextBinary[index]}`"
          alphabet="01"
          :maxLength="5"
          :bottomBorderOnly="true"
          @input-correct="() => setCorrect(index)"
          @input-incorrect="() => setIncorrect(index)"
        />

        <div class="to-text">
          <InputBox
            :answer="`${binaryToDecimals[index]}`"
            :numberOnly="true"
            :maxLength="2"
            :disabled="!correctInput[index]"
            @input="input => updateDecimalInputs(index, input)"
          />
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
          <span>{{ alphabetOutputs[index] }}</span>
        </div>
      </div>
    </div>
    <span class="output">Output: {{ alphabetOutputs.join(' ') }}</span>
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
    allowCustomizedPlaintext: { type: Boolean, default: true },
    allowCustomizedKey: { type: Boolean, default: true },
  },
  data() {
    return {
      decimalInputs: [],
      alphabetOutputs: [],
      correctInput: [],
      customPlain: '', 
      customKey: '',
      konvaConfig: {
        width: 40,
        height: 11
      },
      alphabets,
    }
  },
  computed: {
    sanitizedInputs() {
      let text = ''
      if (this.customPlain.length > 0) {
        text = (this.customPlain || '').toUpperCase(); 
      } else {
        text = (this.plainText || '').toUpperCase();
      }
      let sanitizedText = '';
      for (let char of text) {
        if (alphabets.includes(char)){
          sanitizedText += char
        }
      }
      return sanitizedText.split('');
    },
    sanitizedKey() {
      let key = ''
      if (this.customKey.length > 0) {
        key = (this.customKey || '').toUpperCase(); 
      } else {
        key = (this.encKey || '').toUpperCase();
      }
      let sanitizedKey = '';
      for (let char of key) {
        const charCode = char.charCodeAt(0);
        if (charCode >= aAscii && charCode <= zAscii) {
          sanitizedKey += char;
        }
      }
      return sanitizedKey.split('');
    },
    plaintextToDecimals() {
      let decimals = []
      for (let char of this.sanitizedInputs) {
        decimals.push(this.getLetterNumber(char).toString())
      }
      return decimals
    },
    decimalsToBinary(){
      let binary = []
      for (let decimal of this.plaintextToDecimals){
        binary.push(getBinaryNumber(parseInt(decimal)))
      }
      return binary
    },
    encTextBinary() {
      let key = this.repeatKeyToBinary
      let plaintext = []
      for (let letter of this.decimalsToBinary){
        plaintext.push(letter.join(''))
      }
      return xorEncrypt(plaintext, key)
    },
    binaryToDecimals() {
      let decimal = []
      for (let binary of this.encTextBinary) {
        decimal.push(getDecimalNumber(binary.split('')))
      }
      return decimal
    },
    decimalsToText() {
      let text = []
      for (let letter of this.binaryToDecimals) {
        text.push(fromCharCode(letter + aAscii))
      }
      return text
    },
    encryptedText() {
      return this.encryptedBinary.map(b => alphabets[b]).join();
    },
    repeatKeyToBinary() {
      let binaryKey = []
      let encArray = this.sanitizedKey;
      for (let i = 0; i < this.sanitizedInputs.length; ++i){
        let char = encArray[i % encArray.length]
        let decimal = getLetterNumber(char)
        let binary = getBinaryNumber(decimal).join('')
        binaryKey.push(binary)
      }
      return binaryKey
    },
  },
  watch: {
    sanitizedInputs() {
      this.alphabetOutputs = [];
      for (let i = 0; i < this.sanitizedInputs.length; i++) {
        this.alphabetOutputs.push('Ø');
      }
    }
  },
  mounted() {
    for (let i = 0; i < this.plainText.length; i++) {
      this.alphabetOutputs.push('Ø');
    }
  },
  methods: {
    getLetterNumber(letter) {
      return getLetterNumber(letter);
    },
    setCorrect(index) {
      if (this.correctInput[index] === true) return;
      this.correctInput[index] = true;
      this.correctInput = [...this.correctInput];
    },
    setIncorrect(index) {
      if (this.correctInput[index] === false) return;
      this.correctInput[index] = false;
      this.correctInput = [...this.correctInput];
    },
    updateDecimalInputs(index, input) {
      this.decimalInputs[index] = input;
      let letter = 'Ø';
      if (![null, undefined, ''].includes(input)) {
        letter = alphabets[+input];
      };
      this.alphabetOutputs[index] = letter;
      this.alphabetOutputs = [...this.alphabetOutputs];
    },
    updateCustomizedInput(customText) {
      let customUpper = customText.toUpperCase();
      customUpper = customUpper.split('').filter(char => alphabets.includes(char)).join('');
      this.customPlain = customUpper
    },
    updateCustomizedKeyInput(customKey) {
      customKey = customKey.toUpperCase();
      customKey = customKey.split('').filter(char => alphabets.includes(char)).join('');
      this.customKey = customKey;
    }
  }
}
</script>

<style scoped>
.overall-container {
  display: flex;
  flex-direction: column;
}

.container {
  padding: 1.2rem 2rem;
  display: inline-flex;
  overflow-x: scroll;
  max-width: 100vw;
}

.letter-panel {
  min-width: 12rem;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  font-size: 1.5rem;
  margin: 0 2rem;
}

.letter-panel:last-child {
  padding-right: 4rem;
}

.input {
  width: 20rem;
  margin: .5rem;
}

.from-text, .to-text {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}

.from-text {
  margin-bottom: 1rem;
}

.to-text {
  margin-top: 1rem;
}

.binary-numbers {
  letter-spacing: 1rem;
  padding-left: 1rem;
  margin-right: .25rem;
  text-align: left;
}

.line {
  background-color: #333;
  height: 1px;
  width: 100%;
}

.to-text span {
  display: inline-block;
  min-width: 1.5rem;
}

.output {
  font-size: 1.5rem;
  font-weight: bold;
  margin: .5rem 0;
}
</style>
