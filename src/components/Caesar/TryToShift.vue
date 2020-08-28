<template>
  <div>
    <h1>Try to do the Caesar shifting!</h1>
    <p>Try encrypting the secret message!</p>
    <h1>{{initialMessage}}</h1>
    <h1>{{ secretMessage }}</h1>
    <v-stage :config="configKonva">
      <v-layer>
        <v-group>
          <v-group
            :width="50"
            :height="50"
            :y="2"
            v-for="(letter, index) in shiftArray(0)"
            :key="(letter) "
            :x="20 + index*50"
          >
            <v-rect :width="50" :height="50" stroke="black" :strokeWidth="2"></v-rect>
            <v-text
              :text="letter"
              fill="black"
              align="center"
              :width="50"
              :height="50"
              :fontSize="30"
              verticalAlign="middle"
            ></v-text>
          </v-group>
          <v-group
            :width="50"
            :height="50"
            :y="202"
            v-for="(letter, index) in shiftArray(shift)"
            :key="(letter) "
            :x="20 + index*50"
          >
            <v-rect :width="50" :height="50" stroke="black" :strokeWidth="2"></v-rect>
            <v-text
              :text="letter"
              fill="black"
              align="center"
              :width="50"
              :height="50"
              :fontSize="30"
              verticalAlign="middle"
            ></v-text>
          </v-group>
          <v-arrow
            v-for="(letter, index) in shiftArray(shift)"
            :key="(index)"
            :points="[(index*50)+45, 50, (index*50)+45, 200]"
            :pointerLength="10"
            :pointerWidth="10"
            fill="black"
            stroke="black"
            :strokeWidth="4"
          ></v-arrow>
        </v-group>
      </v-layer>
    </v-stage>
    <el-row>
      <el-button @click="incrementShift">Backward</el-button>
      <el-button @click="decrementShift">Forward</el-button>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "CaesarTryToShift",
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
</style>
