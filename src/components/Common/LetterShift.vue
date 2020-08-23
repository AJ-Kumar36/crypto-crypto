<template>
  <div class="container">
    <Letter :letter="from" />
    <div class="extended-line" />
    <i class="el-icon-right" />
    <Letter :letter="to" />

    <div class="text-container">
      <span>{{ text }}</span>
    </div>
  </div>
</template>

<script>
import Letter from './Letter.vue';

export default {
  name: 'LetterShift',
  props: {
    from: String,
    to: String,
    showShift: Boolean,
    shiftLeft: Boolean,
    shiftAmount: Number
  },
  components: {
    Letter,
  },
  computed: {
    text() {
      if (!this.showShift) return '';
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
}

span {
  line-height: 1;
}

.extended-line {
  height: 1.25px;
  width: 8rem;
  background-color: #2c3e50;
  transform: translate(16px, .2px);
}

i {
  font-size: 1.5rem;
  margin-right: .5rem;
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
