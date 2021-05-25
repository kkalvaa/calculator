<template>
  <div>
    <h3>Theme</h3>
    <div>
      <button>1</button>
      <button>2</button>
      <button>3</button>
      <input
        v-model.number="theme"
        @input="updateTheme"
        type="range"
        name="themer"
        value="1"
        min="1"
        max="3"
        step="1"
      >
    </div>
  </div>
</template>

<script>
import { store, actions } from '@/store.js';

export default {
  name: 'ThemeSelector',
  data() {
    return {
      theme: 1,
    };
  },
  computed: {
    themeStore() {
      return store.theme;
    }
  },
  methods: {
    updateTheme() {
      actions.updateTheme(this.theme);
    }
  }
  /*computed: {
    theme: {
      get: () => {
        return store.theme;
      },
      set: (newValue) => {
        actions.updateThemeAction(newValue);
      }
    }
  }*/
}
</script>

<style lang="scss">
input[type='range'] {
  width: 5em;
  background: transparent;

  &::-moz-range-thumb {
    background-color: var(--color-toggle);
    height: 1.25em;
    width: 1.25em;
    border: 0;
    border-radius: 50%;
  }

  &::-moz-range-track {
    background-color: var(--color-toggle-background);
    height: 1.75em;
    border-radius: 100px;
    border: 0;
  }
}

</style>