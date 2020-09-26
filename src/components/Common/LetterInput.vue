<template>
  <el-form class="letter-input-container">
    <el-form-item :error="errorMessage">
      <el-input
        v-model="input"
        :class="['letter-input', status]"
        status="warning"
        @input="updateInput"
      />
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  name: 'LetterInput',
  props: {
    letter: { type: String, required: true }
  },
  data() {
    return {
      input: '',
    };
  },
  computed: {
    status() {
      if (!this.input) return 'empty';
      if (this.input === this.letter.toUpperCase()) return 'correct';
      return 'incorrect';
    },
    errorMessage() {
      return this.status === 'incorrect' ? 'Not it' : null;
    }
  },
  methods: {
    updateInput() {
      let input = this.input;
      if (input.length > 1) input = input[input.length - 1];
      input = input.toUpperCase();
      if (input.charCodeAt(0) < 'A'.charCodeAt(0) || input.charCodeAt(0) > 'Z'.charCodeAt(0)) {
        input = '';
      }
      this.input = input;
    }
  },
}
</script>

<style global>
.letter-input-container, .letter-input-container .el-form-item {
  margin: 0;
}

.letter-input-container .letter-input > input {
  font-size: 1.5rem;
  width: 3rem;
  height: 3rem;
  line-height: 1;
  text-align: center;
  padding: 0;
}

.letter-input-container .letter-input.correct > input {
  border-color: rgb(46, 204, 113);
}

.letter-input-container .el-form-item__error {
  font-size: 14px;
  left: 12%;
}
</style>

<style scoped>
</style>
