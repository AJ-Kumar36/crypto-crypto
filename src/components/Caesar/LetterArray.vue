<template>
  <div class="letterArray">
    <v-stage :config="configKonva">
      <v-layer>
        <v-group 
          v-for="(letters, messIndex) in splitList"
          :key="`MessageLoop-${messIndex}`"
          :width="26 * 50"
          :height="50 * messageLen"
          :x="centerShift"
          :y="2 + messIndex * 50"
        >
          <v-group
            v-for="(letter, index) in letters"
            :key="`InitArray-${letter}-${shift}`"
            :width="50"
            :height="50"
            :x="((index + shift) % 26) * 50"
            :y="2"
          >
            <v-rect
              v-if="index === 0"
              :width="50"
              :height="50"
              stroke="black"
              :stroke-width="2"
              fill="lightgreen"
            />
            <v-rect
              v-else-if="(index + shift) % 26 === 0"
              :width="50"
              :height="50"
              stroke="black"
              :stroke-width="2"
              fill="lightblue"
            />
            <v-rect
              v-else
              :width="50"
              :height="50"
              stroke="black"
              :stroke-width="2"
            />
            <v-text
              :text="letter"
              fill="black"
              align="center"
              :width="50"
              :height="54"
              :fontSize="30"
              verticalAlign="middle"
            />
          </v-group>
        </v-group>
      </v-layer>
    </v-stage>
  </div>
</template>

<script>
export default {
  name: "LetterArray",
  props: {
    initialMessage: { type: String, required: true },
    shift: { type: Number, required: true },
  },
  data() {
    return {
      secretMessage: "SecretMessage",
    };
  },
  computed: {
    centerShift() {
      return (window.innerWidth - 26 * 50) / 2;
    },
    windowHeight() {
      return this.messageLen * 50 + 20;
    },
    messageLen() {
      return this.sanitizedMessage.length;
    },
    configKonva() {
      return {
        width: window.innerWidth,
        height: this.windowHeight,
      };
    },
    sanitizedMessage() {
      const initMsg = this.initialMessage;
      let newString = '';
      for (let i = 0; i < initMsg.length; i++){
        let curr = initMsg.charCodeAt(i);
        if((curr >= 65 && curr <= 90) || (curr >= 97 && curr <= 122))
          newString += String.fromCharCode(curr);
      }
      if (newString.length > 13)
        newString = newString.substring(0,13);
      return newString.toUpperCase();
    },
    splitList() {
      return this.sanitizedMessage.split('').map(letter => this.shiftArray(letter));
    },
  },
  methods: {
    shiftArray(firstLetter) {
      let shiftedArray = [];
      const shift = firstLetter.charCodeAt(0) - 65;
      for (let i = 0; i < 26; i++) {
        shiftedArray.push(String.fromCharCode((i + shift) % 26 + 65));
      }
      return shiftedArray;
    },
  },
};
</script>