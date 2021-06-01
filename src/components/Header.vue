<template>
  <header>
    <h1>calc</h1>
    <h2>Theme</h2>
    <theme-selector />
  </header>
</template>

<script>
import ThemeSelector from '@/components/ThemeSelector.vue';

export default {
  name: 'Header',
  components: {
    ThemeSelector,
  },
}
</script>

<style lang="scss" scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: last baseline;
  gap: 1em;
}

h1 {
  flex-grow: 1;
  margin: 0;
}

h2 {
  font-size: 0.8rem;
  text-transform: uppercase;
  margin: 0;
  transform: translateY(-3px);
}
</style>