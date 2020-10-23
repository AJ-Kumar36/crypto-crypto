<template>
  <div class="container">
    <div class="frame">
      <el-form
        v-if="guessPlainText"
        class="letter-blocks"
      >
        <el-form-item
          v-for="(letter, index) in sanitizedText"
          :key="index"
        >
          <el-input
            :ref="`plainTextInput${index}`"
            v-model="plainTextInputs[index]"
            :class="['letter-block', !isPlainTextGuessCorrect || 'green']"
            status="warning"
            @input="() => updatePlainTextInput(index)"
          />
        </el-form-item>
      </el-form>
      <div
        v-else
        class="letter-blocks"
      >
        <div
          v-for="(letter, index) in sanitizedText"
          :key="index"
          class="letter-block"
        >
          <span>{{ letter }}</span>
        </div>
      </div>

      <div class="row">
        <div
          v-for="(letter, index) in repetitiveKey"
          :key="index"
          class="middle-cell"
        >
          <span>+</span>
          <CircleLetter :letter="letter" />
          <span>=</span>
        </div>
      </div>
      <el-form
        v-if="guessEncryptedText"
        class="letter-blocks"
      >
        <el-form-item
          v-for="(letter, index) in sanitizedEnc"
          :key="index"
        >
          <el-input
            :ref="`encTextOutputs${index}`"
            v-model="encTextOutputs[index]"
            :class="['letter-block', !isEncTextGuessCorrect || 'green']"
            status="warning"
            @input="() => updateEncTextOutput(index)"
          />
        </el-form-item>
      </el-form>
      <div
        v-else
        class="letter-blocks"
      >
        <div
          v-for="(letter, index) in sanitizedEnc"
          :key="index"
          class="letter-block"
        >
          <span>{{ letter }}</span>
        </div>
      </div>
    </div>
    <div class="inputs">
      <el-input
        v-if="customizedPlainText"
        v-model="customPlain"
        class="input"
        placeholder="Plaintext"
        @input="() => customPlain = updateCustomizedInput(customPlain)"
      />
      <el-input
        v-if="customizedKeyText"
        v-model="keytext"
        class="input"
        placeholder="Key Text"
        @input="() => keytext = updateCustomizedInput(keytext)"
      />
    </div>
  </div>
</template>

<script>
import CircleLetter from '../Common/CircleLetter.vue';
import {encrypt} from './utils';

/**
 * TODO: Display the vigenere cipher layout // TODO: @atish3
 * This is the conversion part
 * >>> Check out https://konvajs.org/docs/vue/index.html
 * TODO: Allow users to guess the encrypted text based on the key and the plain text
 * TODO: Allow users to guess the plain text based on the key and the encrypted text
 * TODO: Allow users to customize the plain text and the key
 * https://element.eleme.io/#/en-US/component/input
 */

const aAscii = 'A'.charCodeAt(0);
const zAscii = 'Z'.charCodeAt(0);

export default {
  name: 'VigenereEncryption',
  components: {
    CircleLetter,
  },
  props: {
    plainText: { type: String, required: true },
    vigenereKey: { type: String, required: true },
    guessPlainText: { type: Boolean, default: false },
    guessEncryptedText: { type: Boolean, default: true },
    guessKey: { type: Boolean, default: false },
    customizedPlainText: { type: Boolean, default: false },
    customizedKeyText: {type: Boolean, default: false }
  },
  data() {
    return {
      customPlain: '', 
      keytext: '',
      plainTextInputs: [],
      encTextOutputs: [],
    }
  },
  computed: {
    sanitizedText() {
      let text = ''
      if (this.customPlain.length > 0){
        text = (this.customPlain || '').toUpperCase();
      } else {
        text = (this.plainText || '').toUpperCase();
      }

      let sanitizedText = '';

      for (let char of text) {
        const charCode = char.charCodeAt(0);
        if (charCode >= aAscii && charCode <= zAscii) {
          sanitizedText += char;
        }
      }
      
      return sanitizedText.split('');
    },
    sanitizedEnc() {
      let text = this.encryptedText.toUpperCase()
      let sanitizedEnc = ''

      for (let char of text) {
        const charCode = char.charCodeAt(0);
        if (charCode >= aAscii && charCode <= zAscii) {
          sanitizedEnc += char;
        }
      }
      return sanitizedEnc;
    },
    repetitiveKey() {
      /**
       * When plainText = 'ababab' and vigenereKey = 'abc',
       * repKey = ['a', 'b', 'c', 'a', 'b', 'c']
       */
      let repKey = [];
      let encKey = ''
      if (this.keytext.length > 0){
        encKey = this.keytext
      } else {
        encKey = this.vigenereKey
      }
      encKey = encKey.toUpperCase()
      for (let i = 0; i < this.sanitizedText.length; i++) {
        repKey.push(encKey[i % encKey.length]);
      }
      return repKey;
    },
    encryptedText() {
      let text = this.sanitizedText.join('')
      let encKey = this.repetitiveKey.join('')
      return encrypt(encKey, text)
    },
    isPlainTextGuessCorrect() {
      return this.plainTextInputs.join() === this.sanitizedText.join();
    },
    isEncTextGuessCorrect() {
      return this.encTextOutputs.join('') === this.sanitizedEnc;
    },
  },
  watch: {
    sanitizedText: function (newText) {
      const emptyInputs = [];
      for (let i = 0; i < newText.length; i++) {
        emptyInputs.push('');
      }
      this.plainTextInputs = emptyInputs;
    }
  },
  methods: {
    getSingleInput(input) {
      if (input.length > 1) input = input[input.length - 1];
      input = input.toUpperCase();
      if (input.charCodeAt(0) < 'A'.charCodeAt(0) || input.charCodeAt(0) > 'Z'.charCodeAt(0)) {
        input = '';
      }
      return input;
    },
    updatePlainTextInput(index) {
      this.plainTextInputs[index] = this.getSingleInput(this.plainTextInputs[index]);
      if (this.plainTextInputs[index].length > 0 && index < this.sanitizedText.length - 1) {
        this.$refs[`plainTextInput${index + 1}`][0].focus();
      }
    },
    updateEncTextOutput(index) {
      this.encTextOutputs[index] = this.getSingleInput(this.encTextOutputs[index]);
      if (this.encTextOutputs[index].length > 0 && index < this.sanitizedEnc.length - 1) {
        this.$refs[`encTextOutputs${index + 1}`][0].focus();
      }
    },
    updateCustomizedInput(customText) {
      customText = customText.toUpperCase();
      customText = customText.split('').filter(char => (
        char.charCodeAt(0) >= 'A'.charCodeAt(0) && char.charCodeAt(0) <= 'Z'.charCodeAt(0)
      )).join('');
      return customText
    }
  },
}
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
}

.frame {
  display: flex;
  flex-direction: column;
}

.input {
  width: 300px;
}

.row {
  display: flex;
  justify-content: space-around;
}

.letter-blocks {
  display: flex;
  border: 2px solid #333;
  border-left: none;
}

.letter-block {
  font-size: 1.5rem;
  width: 3rem;
  height: 3rem;
  border-left: 2px solid #333;
  display: flex;
  justify-content: center;
  align-items: center;
  line-height: 1;
  font-weight: bold;
  transition: all 0.5s;
}

.middle-cell {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 3rem;
  border-left: 2px solid #979797;
  border-right: 2px solid #979797;
  height: 7rem;
  font-size: 1.5rem;
}

.middle-cell:nth-child(odd),
.letter-blocks > .letter-block:nth-child(odd) {
  background-color: #D8D8D8;
}

.middle-cell:not(:first-child) {
  border-left: 0;
}

.green {
  background-color: rgba(46, 204, 113, 0.7);
}
</style>

<style>
.letter-blocks, .letter-blocks .el-form-item {
  margin: 0;
}

.letter-blocks .letter-block > input {
  font-size: 1.5rem;
  width: 3rem;
  height: 3rem;
  line-height: 1;
  text-align: center;
  padding: 0;
  border: none;
  background-color: rgba(46, 204, 113, 0);
  color: #333;
  border-radius: 0;
}

.letter-blocks > .el-form-item:nth-child(odd) {
  background-color: #D8D8D8;
}
</style>
