<template>
  <div class="keypad" v-hotkey="keymap">
    <Key>7</Key>
    <Key>8</Key>
    <Key>9</Key>
    <Key class="accent">DEL</Key>
    <Key>4</Key>
    <Key>5</Key>
    <Key>6</Key>
    <Key>+</Key>
    <Key id="1" @click.native='click1'>1</Key>
    <Key>2</Key>
    <Key>3</Key>
    <Key>−</Key>
    <Key>.</Key>
    <Key>0</Key>
    <Key>÷</Key>
    <Key>×</Key>
    <Key class="double accent">RESET</Key>
    <Key class="double confirm">=</Key>
  </div>
</template>

<script>
import Key from '@/components/Key.vue';

export default {
  name: 'Keypad',
  components: {
    Key,
  },
  data () {
    return {
      show: true
    }
  },
  computed: {
    keymap() {
      return {
        '1': this.key1,
      }
    }
  },

  methods: {
    click1() {
      console.log('Hei');
    },
    key1() {
      const key = document.getElementById('1');
      key.classList.add('is-active');
      key.click();
      setTimeout(() => {
        key.classList.remove('is-active');
      }, 125);
    },
  }
}
</script>

<style lang="scss">
.keypad {
  background: var(--color-keypad);
  padding: 1em;
  border-radius: var(--radius);
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 1em;
}
</style>