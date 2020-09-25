<template>
  <div class="letterArray">
    <v-stage :config="configKonva">
      <v-layer>
        <v-group 
        v-for="(startLetter, messIndex) in this.splitList(initialMessage)"
        :key="'MessageLoop'+messIndex"
        :width="26*50"
        :height="50*messageLen"
        :x="centerShift"
        :y="2+messIndex*50"
        >
          <v-group
            v-for="(letter, index) in shiftArray(((startLetter.charCodeAt(0)-65)+shift )%26 )"
            :key="'InitArray'+letter"
            :width="50"
            :height="50"
            :x="index*50"
            :y="2"
          >
            <v-rect v-if="index===0" :width="50" :height="50" stroke="black" :stroke-width="2" fill="lightblue"/>
            <v-rect v-if="index===shift" :width="50" :height="50" stroke="black" :stroke-width="2" fill="lightgreen"/>
            <v-rect v-else :width="50" :height="50" stroke="black" :stroke-width="2" />
            <v-text
              :text="letter"
              fill="black"
              align="center"
              :width="50"
              :height="50"
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
  data() {
    return {
      secretMessage: "SecretMessage",
      messageLen: 13,
      configKonva: {
        width: window.innerWidth,
        height: 13*50+20,
      },
    };
  },
  props: {
    initialMessage: {type: String, required: true},
    shift: {}
    //startLetter: { type: String, required: true },
    //initX: { required: true },
    //initY: { required: true },
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
    splitList(initMsg) {
      let split = initMsg.toUpperCase().split("");
      return split;
    },
  },
};
</script>