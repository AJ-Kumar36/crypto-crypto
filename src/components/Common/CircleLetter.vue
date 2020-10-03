<template>
  <div class="letter">
    <span>{{ letter }}</span>
  </div>
</template>

<script>
export default {
  name: 'Letter',
  props: {
    letter: { type: String, required: true }
  }
}
</script>

<style scoped>
.letter {
  font-size: 1.2rem;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  border: 1px solid #d7dae2;
  display: flex;
  justify-content: center;
  align-items: center;
  line-height: 1;
}
</style>
