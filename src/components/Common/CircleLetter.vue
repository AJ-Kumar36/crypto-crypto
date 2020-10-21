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
  border: 1px solid #979797;
  background-color: #EBEBEB;
  display: flex;
  justify-content: center;
  align-items: center;
  line-height: 1;
}

span {
  margin-top: 0.1rem;
}
</style>
