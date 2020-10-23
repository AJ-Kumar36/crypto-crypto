<template>
  <span>
    <slot />{{ base || '' }}<sup>{{ superscript }}</sup>
  </span>
</template>

<script>
export default {
  name: 'Power',
  props: {
    base: { type: [Number, String], required: false, default: null },
    superscript: { type: [Number, String], required: true }
  }
}
</script>
