<template>
  <div class="container">
    <span>Alphabet encryption scheme goes here</span>
    <div class="frame">
      <el-form class="letter-input-container" v-if="guessPlainText">
        <el-form-item v-for="(letter, index) in sanitizedText" :key="index">
          <el-input
            v-model="plainTextInputs[index]"
            :class="['letter-input']"
            status="warning"
          />
        </el-form-item>
      </el-form>
      <div v-else>
        <div v-for="(letter, index) in sanitizedText" :key="index" class="letter-block">
          <span>{{ letter }}</span>
        </div>
      </div>
      <CircleLetter
        v-for="(letter, index) in repetitiveKey"
        :key="index"
        :letter="letter"
      />
    </div>
    <div class="inputs">
      <el-input
        v-model="customPlain"
        class="input"
        placeholder="Plaintext"
      />
      <el-input
        v-model="keytext"
        class="input"
        placeholder="Key Text"
      />
    </div>
  </div>
</template>

<script>
import CircleLetter from '../Common/CircleLetter.vue';

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
    guessEncryptedText: { type: Boolean, default: false },
    guessKey: { type: Boolean, default: false },
    customizedPlainText: { type: Boolean, default: true },
    customizedKeyText: {type: Boolean, default: true }
  },
  data() {
    return {
      customPlain: '', 
      keytext: '',
      plainTextInputs: [],
    }
  },
  computed: {
    sanitizedText() {
      let text = ''
      if (this.customizedPlainText){
        text = (this.customPlain || '').toUpperCase();
      }
      else {
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
    repetitiveKey() {
      /**
       * When plainText = 'ababab' and vigenereKey = 'abc',
       * repKey = ['a', 'b', 'c', 'a', 'b', 'c']
       */
      let repKey = [];
      let encKey = ''
      if (this.customizedKeyText && this.keytext.length > 0){
        encKey = this.keytext
      } else {
        encKey = this.vigenereKey
      }
      for (let i = 0; i < this.sanitizedText.length; i++) {
        repKey.push(encKey[i % encKey.length]);
      }
      return repKey;
    },
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
}

.input {
  width: 300px;
}

.letter-block {
  font-size: 1.5rem;
  width: 3rem;
  height: 3rem;
  border: 1px solid #d7dae2;
  display: flex;
  justify-content: center;
  align-items: center;
  line-height: 1;
}
</style>
