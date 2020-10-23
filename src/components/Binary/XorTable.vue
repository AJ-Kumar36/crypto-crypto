<template>
  <div>
    <div
      v-for="i in [0, 1]"
      :key="i"
    >
      <p
        v-for="j in [0, 1]"
        :key="`${i}-${j}`"
      >
        <span>{{ i }}</span><span>⊕</span><span>{{ j }}</span>
        <span>=</span><span>{{ i === j ? 0 : 1 }}</span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'XorTable'
}
</script>

<style scoped>
span {
  min-width: 2rem;
  text-align: center;
  font-size: 1.5rem;
}

p {
  margin: 0;
}
</style>
