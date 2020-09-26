<template>
  <div class="container">
    <LetterInput
      v-if="quizFrom"
      :letter="from"
    />
    <Letter
      v-else
      :letter="from"
    />

    <v-stage :config="configKonva">
      <v-layer>
        <v-arrow
          :points="[15, 6, 155, 6]"
          fill="#2c3e50"
          stroke="#2c3e50"
          :stroke-width="4"
        />
      </v-layer>
    </v-stage>

    <div class="text-container">
      <span>{{ text }}</span>
    </div>
    
    <LetterInput
      v-if="quizTo"
      :letter="to"
    />
    <Letter
      v-else
      :letter="to"
    />
  </div>
</template>

<script>
import Letter from './Letter.vue';
import LetterInput from './LetterInput.vue';

export default {
  name: 'LetterShift',
  components: {
    Letter,
    LetterInput,
  },
  props: {
    from: { type: String, required: true },
    to: { type: String, required: true },
    showShift: { type: Boolean, default: false },
    shiftLeft: { type: Boolean, required: false },
    shiftAmount: { type: Number, required: false, default: undefined },
    quizFrom: { type: Boolean, required: false, default: false },
    quizTo: { type: Boolean, required: false, default: false }
  },
  data() {
    return {
      configKonva: {
        width: 170,
        height: 11
      }
    };
  },
  computed: {
    text() {
      if (!this.quizFrom && !this.quizTo && !this.showShift) return '';
      let shiftAmount = this.shiftAmount;
      if (shiftAmount === undefined) {
        if (this.shiftLeft) {
          shiftAmount = this.from.charCodeAt(0) - this.to.charCodeAt(0);
        } else {
          shiftAmount = this.to.charCodeAt(0) - this.from.charCodeAt(0);
        }
        if (Number.isNaN(shiftAmount)) return '';
        if (shiftAmount < 0) shiftAmount += 26;
      }
      if (this.shiftLeft) return `Shift left by ${shiftAmount}`;
      return `Shift right by ${shiftAmount}`;
    }
  }
}
</script>

<style scoped>
.container {
  text-align: left;
  display: inline-flex;
  align-items: center;
  position: relative;
  padding: 1rem 2rem;
}

span {
  line-height: 1;
}

.text-container {
  position: absolute;
  width: 100%;
  left: 0;
  top: 1.2rem;
  display: flex;
  justify-content: center;
}
</style>
