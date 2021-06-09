<template>
  <div class="switcher">
    <button
      @click="setTheme(1)"
      class="theme-btn"
    >
      1
    </button>
    <button
      @click="setTheme(2)"
      class="theme-btn"
    >
      2
    </button>
    <button
      @click="setTheme(3)"
      class="theme-btn"
    >
      3
    </button>
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
  created() {
    this.initTheme();
  },
  methods: {
    initTheme() {
      // First check if the user previously has actively selected a theme
      // if not, check if the user favours high contrast mode
      // or light or dark modes, then set the theme selector value.
      if (localStorage.getItem('theme')) {
        this.setTheme(parseInt(localStorage.getItem('theme')));
      } else {
        if (window.matchMedia('(prefers-contrast: more').matches) {
          this.theme = 3;
        } else if (window.matchMedia('(prefers-color-scheme: light)').matches) {
          this.theme = 2;
        } else {
          this.theme = 1;
        }
      }
    },
    setTheme(value) {
      this.theme = value;
      actions.updateTheme(value);
      localStorage.setItem('theme', this.theme);
    },
    updateTheme() {
      actions.updateTheme(this.theme);
      localStorage.setItem('theme', this.theme);
    }
  }
}
</script>

<style lang="scss">
input[type='range'] {
  width: 100%;
  background: transparent;
  grid-column: 1 / -1;

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

.theme-btn {
  border: 0;
  background: none;
  color: var(--color-main);
  font-weight: 700;
  margin: 2px;
  padding: 4px;
}

.switcher {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  width: 4em;
}

</style>