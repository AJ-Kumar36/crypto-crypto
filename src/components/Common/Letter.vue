<template>
  <div class="letter">
    <span>{{ letter }}</span>
  </div>
</template>

<script>
export default {
  name: 'Letter',
  props: {
    letter: String
  }
}
</script>

<style scoped>
.letter {
  font-size: 1.5rem;
  width: 3rem;
  height: 3rem;
  border-radius: 4px;
  border: 1px solid #d7dae2;
  display: flex;
  justify-content: center;
  align-items: center;
  line-height: 1;
}
</style>
