import Vue from 'vue'
import VueHotkey from 'v-hotkey';
import App from './App.vue'
import './registerServiceWorker'

Vue.config.productionTip = false

Vue.use(VueHotkey, {
  '1': 97,
  '2': 98,
  '3': 99,
  '4': 100,
  '5': 101,
  '6': 102,
  '7': 103,
  '8': 104,
  '9': 105,
  '-': 109,
  '+': 107,
  '*': 106,
  '/': 111,
  '=': 187,
  '.': 110,
});

new Vue({
  render: h => h(App),
}).$mount('#app')
