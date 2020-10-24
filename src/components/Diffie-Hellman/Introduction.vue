<template>
  <div>
    <h1>Diffie-Hellman Key Sharing</h1>
    <p>During the other exercises, we assumed that the sender and the receiver would both have a copy of the same key. However, in practice, it isn't easy to make sure everyone has a copy of the same key, especially if you want to keep the key secret from other people.</p>
    <p>The <b>Diffie-Hellman method</b> allows two people to share and use the same key over insecure channels. This means that two strangers can safely share keys without worrying about anyone else getting the key.</p>
  </div>
</template>

<style scoped>
div {
  padding: 1rem 2rem;
  text-align: left;
}
</style>>