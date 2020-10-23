<template>
  <div class="container">
    <Power subscript="2">
      {{ binary }}
    </Power><span>=</span>
    <div
      v-for="(power, index) in powers"
      :key="`${binary}-${power}`"
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
      <span v-else>=</span>
    </div>
    <InputBox
      v-if="guess"
      :ref="`input-${powers.length}`"
      :answer="decimal.toString()"
      :numberOnly="true"
    />
    <span v-else>{{ decimal }}</span>
  </div>
</template>

<script>
import InputBox from '../Common/InputBox';
import Power from '../Common/Power';
import { getDecimalNumber } from './utils';

export default {
  name: 'BinaryToDecimal',
  components: {
    InputBox,
    Power,
  },
  props: {
    binary: { type: String, required: true },
    guess: { type: Boolean, required: false, default: false },
  },
  computed: {
    powers() {
      const array = [];
      for (let i = this.binary.length - 1; i >= 0; i--) {
        array.push(i);
      }
      return array;
    },
    decimal() {
      return getDecimalNumber(this.binary.split(''));
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
