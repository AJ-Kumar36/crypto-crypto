<template>
  <div>
    <h1>Try to do the Caesar shifting!</h1>
    <p>Try encrypting the secret message!</p>
    <h1 font-family>
      {{ initialMessage }}
    </h1>
    <h1>
      {{ secretMessage }}
    </h1>
    <LetterArray initialMessage="SecretMessage" :shift="shift"/>
    <el-row>
      <el-button
        @click="incrementShift"
      >
        Backward
      </el-button>
      <el-button 
        @click="decrementShift"
      >
        Forward
      </el-button>
    </el-row>
  </div>
</template>

<script>
import LetterArray from './LetterArray.vue';

export default {
  name: "CaesarTryToShift",
  components: {
    LetterArray,
  },
  data() {
    return {
      configKonva: {
        width: window.innerWidth,
        height: 300,
      },
      shift: 0,
      initialMessage: "Secret Message",
      secretMessage: "Secret Message",
    };
  },
  computed: {
    centerShift() {
      return (window.innerWidth-(26*50))/2
    }
  },
  methods: {
    shiftArray(shift) {
      let shiftedArray = [];
      for (let i = 0; i < 26; i++) {
        shiftedArray.push(String.fromCharCode(((i + shift) % 26) + 65));
      }
      return shiftedArray;
    },
    incrementShift() {
      this.shift = (this.shift + 1) % 26;
      this.secretMessage = this.calculateCaesar();
    },
    decrementShift() {
      this.shift = (this.shift + 25) % 26;
      this.secretMessage = this.calculateCaesar();
    },
    calculateCaesar() {
      let message = "";
      let curr = 0;
      for (let i = 0; i < this.initialMessage.length; i++) {
        curr = this.initialMessage.charCodeAt(i);
        if (curr >= 65 && curr <= 90) {
          message += String.fromCharCode(((curr - 65 + this.shift) % 26) + 65);
        } else if (curr >= 97 && curr <= 122) {
          message += String.fromCharCode(((curr - 97 + this.shift) % 26) + 97);
        } else {
          message += String.fromCharCode(curr);
        }
      }
      return message;
    },
  },
};
</script>

<style scoped>
h1 {
  font-family: "Lucida Console", Courier, monospace;
}
</style>
git 