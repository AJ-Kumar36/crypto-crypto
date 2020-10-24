<template>
  <div>
    <h1>Try to do the Caesar shifting!</h1>
    <LetterShift
      from="A"
      to="B"
      :quizTo="true"
    />

    <LetterShift
      from="X"
      to="Z"
      :quizTo="true"
    />

    <br>

    <LetterShift
      from="C"
      to="T"
      :quizFrom="true"
    />

    <LetterShift
      from="P"
      to="D"
      :quizFrom="true"
    />

    <p>Try encrypting the secret message!</p>
    <h1 font-family>
      {{ input }}
      <el-input
        v-model="input"
        placeholder="Secret Message"
        @input="inputSanitize"
      />
    </h1>
    <h1>{{ secretMessage }}</h1>
    <LetterArray
      :initialMessage="input"
      :shift="shift"
    />
    <el-row>
      <el-button @click="incrementShift">
        Left Shift
      </el-button>
      <el-button @click="decrementShift">
        Right Shift
      </el-button>
    </el-row>
    <br>
    <p><b>Encrypt the following messages using a Caesar Cipher!</b></p>
    <div class="questions-container">
      <div
        v-for="(answer, index) in shiftAns"
        :key="index"
        class="question-container"
      >
        <span class="questions">{{ `Shift "${basePlain[index]}" ${shiftAmts[index]}:` }}</span>
        <InputBox :answer="shiftAns[index]" />
      </div>
    </div>
    <br>
    <p><b>Decrypt the following encrypted messages!</b></p>
    <div class="encrypted-container">
      <div
        v-for="(answer, index) in encExamples"
        :key="index"
        class="encrypted-container"
      >
        <span class="encrypted-questions">{{ `${encExamples[index]}` }}</span>
        <InputBox :answer="originalText[index]" />
      </div>
    </div>
  </div>
</template>

<script>
import LetterShift from '../Common/LetterShift.vue';
import LetterArray from "./LetterArray.vue";
import InputBox from "../Common/InputBox.vue"

export default {
  name: "CaesarTryToShift",
  components: {
    LetterShift,
    LetterArray,
    InputBox
  },
  data() {
    return {
      configKonva: {
        width: window.innerWidth,
        height: 300,
      },
      shift: 0,
      initialMessage: "Secret Message",
      input: "SecretMessage".toUpperCase(),
      basePlain: ["SecretMessage", "SecretMessage", "Caesar", "Caesar", "Caesar"],
      shiftAmts: ["5 to the right", "10 to the left", "3 to the right", "23 to the left", "12 to the right"],
      shiftAns: ["XJHWJYRJXXFLJ", "IUSHUJCUIIQWU", "FDHVDU", "FDHVDU", "OUBTQD"],
      encExamples: ["KZGXBWOZIXPG", "RAPELCGRQ", "EXUXYGX"],
      originalText: ["CRYPTOGRAPHY", "ENCRYPTED", "UNKNOWN"]
    };
  },
  computed: {
    centerShift() {
      return (window.innerWidth - 26 * 50) / 2;
    },
    secretMessage() {
      let message = '';
      let plaintext = this.input.toUpperCase()

      let curr = 0;
      for (let i = 0; i < this.input.length; i++) {
        curr = this.input.charCodeAt(i);
        if (curr >= 65 && curr <= 90) {
          message += String.fromCharCode(((curr - 65 + (26 - this.shift)) % 26) + 65);
        } 
        else {
          message += '';
        }
      }
      return message;
    }
  },
  methods: {
    shiftArray(shift) {
      let shiftedArray = [];
      for (let i = 0; i < 26; i++) {
        shiftedArray.push(String.fromCharCode((i + shift) % 26 + 65));
      }
      return shiftedArray;
    },
    incrementShift() {
      this.shift = (this.shift + 1) % 26;
    },
    decrementShift() {
      this.shift = (this.shift + 25) % 26;
    },
    inputSanitize(input){
      input = input.toUpperCase();
      input = input.split('').filter(char => (char.charCodeAt(0) >= 'A'.charCodeAt(0)) && (char.charCodeAt(0) <= 'Z'.charCodeAt(0))).join('');
      this.input = input
    }
  },
};
</script>

<style scoped>
h1 {
  font-family: "Lucida Console", Courier, monospace;
}

.questions-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.question-container {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin: 1rem 0;
  width: 40rem;
}

.question-container > span {
  margin-right: .5rem;
  font-size: 1.5rem;
}

.encrypted-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.encrypted-container {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin: 1rem 0;
  width: 40rem;
}

.encrypted-container > span {
  margin-right: .5rem;
  font-size: 1.5rem;
}
</style>
