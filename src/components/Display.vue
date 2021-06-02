<template>
  <section
    class="display"
  >
    {{ displayValue.toLocaleString() }}
  </section>
</template>

<script>
import { store } from '@/store.js';

export default {
  name: 'Display',
  computed: {
    inputValue() {
      return store.inputValue;
    },
    displayValue() {
      if (this.inputValue === '') {
        return 0;
      } else {
        return parseFloat(this.inputValue);
      }
    }
  }
}
</script>

<style lang="scss">
.display {
  color: var(--color-display);
  background: var(--color-display-bg);
  padding: 1rem;
  font-size: var(--font-base-size);
  margin: 1em auto;
  border-radius: var(--radius);
  text-align: right;
}
</style>