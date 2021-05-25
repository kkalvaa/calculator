<template>
  <div
    id="app"
    :class="{
      'theme-1' : theme === 1,
      'theme-2' : theme === 2,
      'theme-3' : theme === 3,
    }"
  >
    <div class="calculator">
      <header>
        <h1>calc</h1>
        <theme-selector />
      </header>
      <div class="display">399 981</div>
      <Keypad />
    </div>
  </div>
</template>

<script>
import { store } from '@/store.js';

import Keypad from '@/components/Keypad.vue';
import ThemeSelector from './components/ThemeSelector.vue';

export default {
  name: 'App',
  components: {
    Keypad,
    ThemeSelector,
  },
  computed: {
    theme() {
      return store.theme;
    }
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Spartan:wght@700&display=swap');

body {
  padding: 0;
  margin: 0;
}

:root {
  font-family: Spartan, sans-serif;

  --font-base-size: 32px;

  --color-main: #fff;
  --color-main-background: hsl(222, 26%, 31%);

  --color-toggle: hsl(6, 63%, 50%);
  --color-toggle-background: hsl(223, 31%, 20%);

  --color-display: var(--color-main);
  --color-display-bg: hsl(224, 36%, 15%);

  --color-keypad: hsl(223, 31%, 20%);

  --color-key: hsl(221, 14%, 31%);
  --color-key-bg: hsl(30, 25%, 89%);
  --color-key-shadow: hsl(28, 16%, 65%);

  --color-key--accent: hsl(0, 0, 100%);
  --color-key-bg--accent: hsl(225, 21%, 49%);
  --color-key-shadow--accent: hsl(224, 28%, 35%);

  --color-key--confirm: hsl(0, 0, 100%);
  --color-key-bg--confirm: hsl(6, 63%, 50%);
  --color-key-shadow--confirm: hsl(6, 70%, 34%);

  --radius: 10px;
  --radius-small: 5px;
}

.theme-2 {
  --color-main: hsl(60, 10%, 19%);
  --color-main-background: hsl(0, 0%, 90%);

  --color-toggle: hsl(25, 98%, 40%);
  --color-toggle-background: hsl(0, 5%, 81%);

  --color-display: var(--color-main);
  --color-display-bg: hsl(0, 0%, 93%);

  --color-keypad: hsl(0, 5%, 81%);

  --color-key: hsl(60, 10%, 19%);
  --color-key-bg: hsl(45, 7%, 89%);
  --color-key-shadow: hsl(35, 11%, 61%);

  --color-key--accent: #fff;
  --color-key-bg--accent: hsl(185, 42%, 37%);
  --color-key-shadow--accent: hsl(185, 58%, 25%);

  --color-key--confirm: #fff;
  --color-key-bg--confirm: hsl(25, 98%, 40%);
  --color-key-shadow--confirm: hsl(25, 99%, 27%);
}

.theme-3 {
  --color-main: hsl(52, 100%, 62%);
  --color-main-background: hsl(268, 75%, 9%);

  --color-toggle: hsl(176, 100%, 44%);
  --color-toggle-background: hsl(268, 71%, 12%);

  --color-display: var(--color-main);
  --color-display-bg: hsl(268, 71%, 12%);

  --color-keypad: hsl(268, 71%, 12%);

  --color-key: var(--color-main);
  --color-key-bg: hsl(268, 47%, 21%);
  --color-key-shadow: hsl(290, 70%, 36%);

  --color-key--accent: hsl(0, 0, 100%);
  --color-key-bg--accent: hsl(281, 89%, 26%);
  --color-key-shadow--accent: hsl(285, 91%, 52%);

  --color-key--confirm: hsl(198, 20%, 13%);
  --color-key-bg--confirm: hsl(176, 100%, 44%);
  --color-key-shadow--confirm: hsl(177, 92%, 70%);
}

* {
  transition:
    color ease 150ms,
    background-color ease 175ms;
}

#app {
  color: var(--color-main);
  background: var(--color-main-background);
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.calculator {
  max-width: 460px;
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.display {
  color: var(--color-display);
  background: var(--color-display-bg);
  padding: 1rem;
  font-size: var(--font-base-size);
  margin: 1em auto;
  border-radius: var(--radius);
  text-align: right;
}


[type='range'] {
  width: 5em;
  background: transparent;
}

input[type='range']::-moz-range-thumb {
  background-color: var(--color-toggle);
  height: 1.25em;
  width: 1.25em;
  border: 0;
  border-radius: 50%;
}

input[type='range']::-moz-range-track {
  background-color: var(--color-toggle-background);
  height: 1.75em;
  border-radius: 100px;
  border: 0;
}

</style>
