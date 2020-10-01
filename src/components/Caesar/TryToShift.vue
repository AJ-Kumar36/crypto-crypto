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
    <p> Encrypt the following messages using a Caesar Cipher! </p>
    <el-form
      ref="form"
      :model="form"
      label-width="300px"
    >
      <el-form-item label="Secret Message (Shifted Left by 5)">
        <el-input v-model="form.quest_1" />
      </el-form-item>
      <el-form-item label="Secret Message (Shifted Right by 10)">
        <el-input v-model="form.quest_2" />
      </el-form-item>
      <el-form-item label="Caesar (Shifted Left by 3)">
        <el-input v-model="form.quest_3" />
      </el-form-item>
      <el-form-item label="Caesar (Shifted Right by 23)">
        <el-input v-model="form.quest_4" />
      </el-form-item>
      <el-form-item label="Cipher (Shifted Left by 12)">
        <el-input v-model="form.quest_5" />
      </el-form-item>
      <el-button
        type="primary"
        @click="submit_encrypt"
      >
        Check Answers
      </el-button>
    </el-form>
  </div>
</template>

<script>
import LetterShift from '../Common/LetterShift.vue';
import LetterArray from "./LetterArray.vue";

export default {
  name: "CaesarTryToShift",
  components: {
    LetterShift,
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
      input: "Secret Message",
      form: {
          quest_1: '',
          quest_2: '',
          quest_3: '',
          quest_4: '',
          quest_5: '',
          type: [],
          resource: '',
          desc: ''
        },
      shift_ans: {
          ans_1: "XJHWJYRJXXFLJ",
          ans_2: "IUSHUJCUIIQWU",
          ans_3: "FDHVDU",
          ans_4: "FDHVDU",
          ans_5: "OUBTQD",
      },
    };
  },
  computed: {
    centerShift() {
      return (window.innerWidth - 26 * 50) / 2;
    },
    secretMessage() {
      let message = '';
      let curr = 0;
      for (let i = 0; i < this.input.length; i++) {
        curr = this.input.charCodeAt(i);
        if (curr >= 65 && curr <= 90) {
          message += String.fromCharCode(((curr - 65 + (26 - this.shift)) % 26) + 65);
        } else if (curr >= 97 && curr <= 122) {
          message += String.fromCharCode(((curr - 97 + (26 - this.shift)) % 26) + 97);
        } else {
          message += String.fromCharCode(curr);
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
    submit_encrypt(){
      if( this.quest_1 === this.ans_1 && this.quest_2 === this.ans_2 && 
          this.quest_3 === this.ans_3 && this.quest_4 === this.ans_4 &&
          this.quest_5 === this.ans_5)
        {
          this.$notify({
            title: 'Success',
            message: 'All questions answered correctly',
            type: 'success'
          });
        }
        else{
          this.$notify({
            title: 'Incorrect',
            message: 'Some answers are incorrect',
            type: 'warning'
          });
        }

    },
    open1() {
        this.$notify({
          title: 'Success',
          message: 'All questions answered correctly',
          type: 'success'
        });
      },

      open2() {
        this.$notify({
          title: 'Incorrect',
          message: 'Some answers are incorrect',
          type: 'warning'
        });
      },
  },
};
</script>

<style scoped>
h1 {
  font-family: "Lucida Console", Courier, monospace;
}
</style>
