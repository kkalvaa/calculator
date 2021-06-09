<template>
  <div class="keypad" v-hotkey="keymap">
    <Key id="7" @click.native="number('7')">7</Key>
    <Key id="8" @click.native="number('8')">8</Key>
    <Key id="9" @click.native="number('9')">9</Key>
    <Key class="accent" @click.native="number('del')">DEL</Key>
    <Key id="4" @click.native="number('4')">4</Key>
    <Key id="5" @click.native="number('5')">5</Key>
    <Key id="6" @click.native="number('6')">6</Key>
    <Key id="+" @click.native="operation('+')" :class="{'is-active' : activeOperator === '+',}">+</Key>
    <Key id="1" @click.native="number('1')">1</Key>
    <Key id="2" @click.native="number('2')">2</Key>
    <Key id="3" @click.native="number('3')">3</Key>
    <Key id="-" @click.native="operation('-')" :class="{'is-active' : activeOperator === '-',}">−</Key>
    <Key id="," @click.native="number('.')">.</Key>
    <Key id="0" @click.native="number('0')">0</Key>
    <Key id="/" @click.native="operation('/')" :class="{'is-active' : activeOperator === '/',}">÷</Key>
    <Key id="*" @click.native="operation('*')" :class="{'is-active' : activeOperator === '*',}">×</Key>
    <Key class="double accent" @click.native="reset">RESET</Key>
    <Key id="=" class="double confirm" @click.native="operation('=')">=</Key>
  </div>
</template>

<script>
import { store, actions } from '@/store.js';

import Key from '@/components/Key.vue';

export default {
  name: 'Keypad',
  components: {
    Key,
  },
  computed: {
    displayValue() {
      if (this.inputValue === '' ) {
        return 0;
      } else {
        return parseFloat(this.inputValue);
      }
    },
    keymap() {
      return {
        '1': this.key1,
        '2': this.key2,
        '3': this.key3,
        '4': this.key4,
        '5': this.key5,
        '6': this.key6,
        '7': this.key7,
        '8': this.key8,
        '9': this.key9,
        '0': this.key0,
      }
    },
    activeOperator() {
      return store.operator;
    }
  },

  methods: {
    keyPress(value) {
      const key = document.getElementById(value);
      key.classList.add('is-active');
      key.click();
      setTimeout(() => {
        key.classList.remove('is-active');
      }, 125);
    },
    number(value) {
      actions.updateInputValue(value);
    },
    operation(operator) {
      actions.operation(operator);
    },
    reset() {
      actions.reset()
    },
    key1() {
      this.keyPress('1');
    },
    key2() {
      this.keyPress('2');
    },
    key3() {
      this.keyPress('3');
    },
    key4() {
      this.keyPress('4');
    },
    key5() {
      this.keyPress('5');
    },
    key6() {
      this.keyPress('6');
    },
    key7() {
      this.keyPress('7');
    },
    key8() {
      this.keyPress('8');
    },
    key9() {
      this.keyPress('9');
    },
    key0() {
      this.keyPress('0');
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
  grid-template-columns: repeat(4, 1fr);
  gap: 1em;
}
</style>