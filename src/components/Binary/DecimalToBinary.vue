<template>
  <div class="container">
    <span>{{ decimal }} =</span>
    <div
      v-for="(power, index) in powers"
      :key="`${decimal}-${power}`"
    >
      <InputBox
        v-if="guess"
        :ref="`input-${index}`"
        :answer="binary[index]"
        alphabet="01"
        :maxLength="1"
        @input-correct="() => focus(index + 1)"
      />
      <span v-else>{{ binary[index] }}</span>
      <span>×</span>
      <Power :superscript="power">
        2
      </Power>
      <span v-if="power != 0">+</span>
    </div>
  </div>
</template>

<script>
import InputBox from '../Common/InputBox';
import Power from '../Common/Power';
import { getBinaryNumber } from './utils';

export default {
  name: 'DecimalToBinary',
  components: {
    InputBox,
    Power,
  },
  props: {
    decimal: { type: Number, required: true },
    maxPower: { type: Number, required: false, default: 4 },
    guess: { type: Boolean, required: false, default: false },
  },
  computed: {
    powers() {
      const array = [];
      for (let i = this.maxPower; i >= 0; i--) {
        array.push(i);
      }
      return array;
    },
    binary() {
      return getBinaryNumber(this.decimal, this.maxPower + 1);
    },
  },
  methods: {
    focus(index) {
      const refs = this.$refs[`input-${index}`];
      if (refs && refs[0]) {
        refs[0].focus();
      }
    }
  }
}
</script>

<style scoped>
.container, div {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
}
</style>