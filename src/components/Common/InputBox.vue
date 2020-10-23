<template>
  <el-form :class="['input-box-container', singleLetter && 'single-input-box-container']">
    <el-form-item :error="errorMessage">
      <el-input
        :ref="inputBox"
        v-model="input"
        :class="['input-box', status]"
        status="warning"
        @input="updateInput"
      />
    </el-form-item>
  </el-form>
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
  },
  data() {
    return {
      input: '',
    };
  },
  computed: {
    status() {
      if (!this.input) return 'empty';
      if (this.input === this.answer.toUpperCase()) {
        this.$emit('input-correct');
        return 'correct';
      }
      return 'incorrect';
    },
    errorMessage() {
      return this.status === 'incorrect' ? 'Not it' : null;
    },
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
      this.input = input.slice(0, this.maxLength);
    },
    focus() {
      if (!this.$refs.inputBox) {
        this.$refs.inputBox[0].focus();
      }
    },
  },
}
</script>

<style global>
.input-box-container, .input-box-container .el-form-item {
  margin: 0;
}

.input-box-container .input-box > input {
  font-size: 1.5rem;
  width: 8rem;
  height: 3rem;
  line-height: 1;
  text-align: center;
  padding: 0;
}

.single-input-box-container .input-box > input {
  width: 3rem;
}

.input-box-container .input-box.correct > input {
  border-color: rgb(46, 204, 113);
}
</style>
