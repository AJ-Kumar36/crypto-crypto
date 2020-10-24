<template>
  <div class="overall-container" :style="`width: ${inputWidth};`">
    <el-form
      :class="[
        'input-box-container',
        singleLetter && 'single-input-box-container',
        bottomBorderOnly && 'bottom-line-only-container'
      ]"
    >
      <el-form-item :error="errorMessage">
        <el-input
          ref="box"
          v-model="input"
          :disabled="disabled"
          :class="['input-box', status]"
          status="warning"
          @input="updateInput"
        />
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'InputBox',
  props: {
    answer: { type: String, required: true },
    maxLength: { type: Number, required: false, default: 32 },
    numberOnly: { type: Boolean, required: false, default: false },
    alphabet: { type: String, required: false, default: '' },
    singleLetter: { type: Boolean, require: false, default: false },
    bottomBorderOnly: { type: Boolean, required: false, default: false },
    disabled: { type: Boolean, required: false, default: false },
    width: { type: String, required: false, default: null },
  },
  emits: ['input-correct', 'input-incorrect', 'input'],
  data() {
    return {
      input: '',
    };
  },
  computed: {
    status() {
      if (!this.input) return 'empty';
      if (this.bottomBorderOnly && this.input.length < this.maxLength) return 'empty';
      if (this.input === this.answer.toUpperCase()) {
        this.$emit('input-correct');
        return 'correct';
      }
      this.$emit('input-incorrect');
      return 'incorrect';
    },
    errorMessage() {
      return this.status === 'incorrect' ? 'Not it' : null;
    },
    inputWidth() {
      if (this.width === null) {
        if (this.bottomBorderOnly) return '10.4rem';
        if (this.singleLetter) return '3rem';
        return '8rem';
      }
      return this.width;
    }
  },
  methods: {
    updateInput() {
      let input = this.input;
      input = input.toUpperCase();
      if (this.numberOnly) {
        input = input.split('').filter(char => (
          char.charCodeAt(0) >= '0'.charCodeAt(0) && char.charCodeAt(0) <= '9'.charCodeAt(0)
        )).join('');
      }
      if (this.alphabet.length > 0) {
        const alphabet = this.alphabet.split('');
        input = input.split('').filter(char => alphabet.includes(char)).join('');
      }
      if (input.length > 0) {
        input = this.maxLength === 1 ? input[input.length - 1] : input.slice(0, this.maxLength);
      }
      this.input = input;
      this.$emit('input', input);
    },
    focus() {
      if (this.$refs.box) {
        this.$refs.box.focus();
      }
    },
  },
}
</script>

<style scoped>
.overall-container {
  display: inline-block;
}
</style>

<style global>
.input-box-container, .input-box-container .el-form-item {
  margin: 0;
}

.input-box-container .input-box > input {
  font-size: 1.5rem;
  height: 3rem;
  line-height: 1;
  text-align: center;
  padding: 0;
  color: #2c3e50;
}

.input-box-container .input-box.correct > input {
  border-color: rgb(46, 204, 113);
}

.bottom-line-only-container .input-box > input {
  border-top: none;
  border-left: none;
  border-right: none;
  border-radius: 0;
  height: 2rem;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  letter-spacing: 1rem;
  padding-left: 1rem;
  text-align: left;
}

.bottom-line-only-container .el-form-item__error {
  font-size: 14px;
  right: 0;
  margin-top: -.5rem;
}

.single-input-box-container .el-form-item__error {
  font-size: 14px;
  left: 12%;
}
</style>
