<template>
  <div class="keypad" v-hotkey="keymap">
    <Key id="7" @click.native="click('7')">7</Key>
    <Key id="8" @click.native="click('8')">8</Key>
    <Key id="9" @click.native="click('9')">9</Key>
    <Key class="accent">DEL</Key>
    <Key id="4" @click.native="click('4')">4</Key>
    <Key id="5" @click.native="click('5')">5</Key>
    <Key id="6" @click.native="click('6')">6</Key>
    <Key id="+">+</Key>
    <Key id="1" @click.native="click('1')">1</Key>
    <Key id="2" @click.native="click('2')">2</Key>
    <Key id="3" @click.native="click('3')">3</Key>
    <Key id="-">−</Key>
    <Key id=",">.</Key>
    <Key id="0" @click.native="click('0')">0</Key>
    <Key id="/">÷</Key>
    <Key id="*">×</Key>
    <Key class="double accent">RESET</Key>
    <Key id="=" class="double confirm">=</Key>
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
      show: true,
      inputValue: '',
    }
  },
  computed: {
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
    click(value) {
      this.inputValue += value;
      console.log(this.inputValue);
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