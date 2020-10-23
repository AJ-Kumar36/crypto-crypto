<template>
  <span>
    {{ content }}<sup>{{ superscript }}</sup><sub />
  </span>
</template>

<script>
export default {
  name: 'Power',
  props: {
    base: { type: [Number, String], required: false, default: null },
    superscript: { type: [Number, String], required: true }
  },
  computed: {
    content() {
      if (this.base != null) return this.base;
      // eslint-disable-next-line vue/require-slots-as-functions
      return this.$slots.default[0].text.trim();
    }
  }
}
</script>
