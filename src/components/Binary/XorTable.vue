<template>
  <div>
    <p
      v-for="i in [0, 1]"
      :key="i"
    >
      <span
        v-for="j in [0, 1]"
        :key="`${i}-${j}`"
      >
        <span>{{ i }}</span><span>⊕</span><span>{{ j }}</span>
        <span>=</span><span>{{ i === j ? 0 : 1 }}</span>
      </span>
    </p>
  </div>
</template>

<script>
export default {
  name: 'XorTable'
}
</script>

<style scoped>
span {
  min-width: 1.5rem;
  text-align: center;
  font-size: 1.5rem;
  display: inline-block;
}

p {
  margin: 0;
}

p > span:first-child {
  margin-right: 1.5rem;
}
</style>
