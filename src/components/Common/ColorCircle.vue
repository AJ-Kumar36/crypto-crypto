<template>
  <div class="container">
    <div
      class="stripes"
      :style="`opacity: ${isMystery ? 1 : 0}`"
    />
    <div
      class="round"
      :style="style"
    />
    <span v-if="label">{{ label }}</span>
  </div>
</template>

<script>
export default {
  name: 'ColorCircle',
  props: {
    label: { type: String, required: false, default: null },
    color: { type: [String, Object, Array], required: false, default: '#ffffff' },
    isMystery: { type: Boolean, required: false, default: false },
  },
  computed: {
    style() {
      if (this.isMystery) return '';
      if (typeof this.color === 'string') return `background-color: ${this.color};`;
      if (this.color.length !== undefined) return `background-color: rgba(${this.color.join(',')});`;
      return `background-color: rgba(${this.color.r}, ${this.color.g}, ${this.color.b}, ${this.color.a});`;
    },
  },
}
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
}

.stripes, .round {
  width: 10rem;
  height: 10rem;
  border-radius: 5rem;
}

.stripes {
  background-image: linear-gradient(45deg, #eeeeee 25%, #cccccc 25%, #cccccc 50%, #eeeeee 50%, #eeeeee 75%, #cccccc 75%, #cccccc 100%);
  background-size: 3rem 3rem;
  position: absolute;
  top: 0;
  left: 0;
  transition: opacity 0.5s;
}

span {
  line-height: 1.5;
}
</style>
