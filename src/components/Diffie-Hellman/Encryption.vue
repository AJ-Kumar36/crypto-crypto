<template>
  <div class="container">
    <div
      class="particle"
      :style="`height: ${particleHeight}px;`"
    >
      <div class="color-picker-a">
        <div>
          <ColorPicker
            :value="keyA"
            @input="updateKeyA"
          />
          <el-switch
            v-show="$store.getters.canAccess(4, 4)"
            v-model="showBSelector"
            active-text="Show B’s secret key"
            class="switch"
          />
        </div>
      </div>
      <div class="color-parallel">
        <div class="column">
          <ColorCircle
            :color="base"
            label="Base Color"
          />
          <span>+</span>
          <ColorCircle
            :color="keyA"
            label="A’s Secret Key"
          />
          <span>=</span>
          <ColorCircle
            :color="baseBlendKeyA"
            label="A’s Public Key"
          />
          <div style="height: 8rem;" />
          <ColorCircle
            v-show="$store.getters.canAccess(4, 2)"
            :color="baseBlendKeyB"
            label="B’s Public Key"
          />
          <span
            v-show="$store.getters.canAccess(4, 3)"
          >+</span>
          <ColorCircle
            v-show="$store.getters.canAccess(4, 3)"
            :color="keyA"
            label="A’s Secret Key"
          />
          <span
            v-show="$store.getters.canAccess(4, 4)"
          >=</span>
          <ColorCircle
            v-show="$store.getters.canAccess(4, 4)"
            :color="colorBlend"
            label="Shared Secret Key"
          />
        </div>

        <v-stage :config="konvaConfig">
          <v-layer>
            <v-text>=</v-text>
            <v-arrow
              v-if="$store.getters.canAccess(4, 2)"
              :points="[0, 580, 200, 750]"
              fill="#2c3e50"
              stroke="#2c3e50"
              :stroke-width="4"
            />
            <v-arrow
              v-if="$store.getters.canAccess(4, 2)"
              :points="[200, 580, 0, 750]"
              fill="#2c3e50"
              stroke="#2c3e50"
              :stroke-width="4"
            />
            <v-text
              v-if="$store.getters.canAccess(4, 2)"
              text="Public Transport"
              fill="black"
              align="center"
              :width="200"
              :height="160"
              :y="690"
              :fontSize="24"
              verticalAlign="middle"
            />
            <v-text
              text="="
              fill="black"
              align="center"
              :width="200"
              :height="160"
              :fontSize="60"
              verticalAlign="middle"
            />
            <v-text
              v-if="$store.getters.canAccess(4, 4)"
              text="="
              fill="black"
              align="center"
              :width="200"
              :height="160"
              :y="1180"
              :fontSize="60"
              verticalAlign="middle"
            />
          </v-layer>
        </v-stage>

        <div class="column">
          <ColorCircle
            :color="base"
            label="Base Color"
          />
          <span>+</span>
          <ColorCircle
            :color="keyB"
            :isMystery="!showBSelector"
            label="B’s Secret Key"
          />
          <span>=</span>
          <ColorCircle
            :color="baseBlendKeyB"
            label="B’s Public Key"
          />
          <div style="height: 8rem;" />
          <ColorCircle
            v-show="$store.getters.canAccess(4, 2)"
            :color="baseBlendKeyA"
            label="A’s Public Key"
          />
          <span
            v-show="$store.getters.canAccess(4, 3)"
          >+</span>
          <ColorCircle
            v-show="$store.getters.canAccess(4, 3)"
            :color="keyB"
            :isMystery="!showBSelector"
            label="B’s Secret Key"
          />
          <span v-show="$store.getters.canAccess(4, 4)">=</span>
          <ColorCircle
            v-show="$store.getters.canAccess(4, 4)"
            :color="colorBlend"
            label="Shared Secret Key"
          />
        </div>
      </div>
      <div :class="['color-picker-b', showBSelector || 'hide']">
        <ColorPicker
          :value="keyB"
          @input="updateKeyB"
        />
      </div>
    </div>
    <p v-if="$store.getters.canAccess(4, 4)">
      Shared Secret Key: {{ generateKey }}
    </p>
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
      showBSelector: false,
      konvaConfig: {
        width: 200,
        height: 1364,
      },
    };
  },
  computed: {
    baseBlendKeyA() {
      return blendColors(this.base, { ...this.keyA });
    },
    baseBlendKeyB() {
      return blendColors(this.base, { ...this.keyB });
    },
    colorBlend() {
      return blendColors({ ...this.keyA }, { ...this.keyB }, this.base);
    },
    generateKey() {
      return rgbToKey(rgbaToRgb(this.colorBlend));
    },
    particleHeight() {
      if (this.$store.getters.canAccess(4, 4)) return 1364;
      if (this.$store.getters.canAccess(4, 3)) return 1200;
      if (this.$store.getters.canAccess(4, 2)) return 1000;
      return 618;
    },
  },
  watch: {
    generateKey() {
      this.updateKey();
    },
  },
  mounted() {
    this.updateKey();
  },
  methods: {
    updateKeyA(value) {
      this.keyA = value.rgba;
    },
    updateKeyB(value) {
      this.keyB = value.rgba;
    },
    updateKey() {
      this.$emit('input', this.generateKey)
    },
  }
}
</script>

<style scoped>
.particle {
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
}

.color-picker-a {
  margin-right: 2rem;
  display: block;
}

.color-picker-b {
  margin-left: 2rem;
  display: block;
  transition: all .2s;
  opacity: 1;
}

.hide {
  opacity: 0;
}

.color-picker-a > div, .color-picker-b > div {
  position: sticky;
  top: 2rem;
}

.color-parallel {
  display: flex;
  overflow-y: hidden;
}

.column {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.switch {
  margin-top: 1rem;
}

span {
  font-size: 1.5rem;
}
</style>
