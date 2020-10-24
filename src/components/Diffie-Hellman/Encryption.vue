<template>
  <div class="diffHell">
    outputKey: <input
      ref="keyValue"
      type="String" 
      :value="value.key" 
      @input="updateKey()"
    >
    <ColorPicker :value="keyA" />
    <div class="left">
      <ColorCircle
        :color="base"
        label="Base Color"
      />
      <span>+</span>
      <ColorCircle
        :color="keyA"
        label="Your Secret Key"
      />
      <span>=</span>
      <ColorCircle
        :color="baseBlendKeyA"
        label="Public Key"
      />
    </div>
  </div>
</template>

<script>
import { Chrome as ColorPicker } from 'vue-color';
import ColorCircle from '../Common/ColorCircle.vue';
import { blendColors, rgbToKey, rgbaToRgb } from './utils'

export default {
  name: 'Encryption',
  components: {
    ColorPicker,
    ColorCircle,
  },
  props: {
    value: { type: String, required: true },
  },
  emits: ['input'],
  data() {
    return {
      base: 'rgba(30, 139, 195, .7)',
      keyA: { r: 35, g: 203, b: 167, a: .7 },
      keyB: { r: 210, g: 77, b: 87, a: .4 },
    };
  },
  computed: {
    baseBlendKeyA() {
      return blendColors(this.base, { ...this.keyA });
    },
    colorBlend() {
      return blendColors({ ...this.keyA }, { ...this.keyB }, this.base);
    },
    generateKey() {
      return rgbToKey(rgbaToRgb(this.colorBlend));
    }
  },
  methods: {
    updateKey() {
      this.$emit('input', this.generateKey)
    }
  }
}
</script>

<style scoped>
.left {
  display: flex;
  flex-direction: column;
  align-items: center;
}

span {
  font-size: 1.5rem;
}
</style>
