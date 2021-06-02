import Vue from 'vue';

const store = Vue.observable({
  theme: 1,
  inputValue: '',
  result: 0,
})

const getters = {
  theme: () => store.theme,
  displayValue: () => parseFloat(store.inputValue),
}

const mutations = {
  setTheme(newValue) {
    store.theme = newValue;
  },
  setInputValue(newValue) {
    store.inputValue = newValue;
  },
  setResult(newValue) {
    store.result = newValue;
  },
}

const actions = {
  updateTheme(newValue) {
    mutations.setTheme(newValue);
  },
  updateInputValue(value) {
    let inputValue = store.inputValue;
    if (value === 'del') {
      inputValue = inputValue.slice(0, -1);
    } else if (value === 'reset') {
      inputValue = '';
    } else {
      inputValue += value;
    }
    mutations.setInputValue(inputValue);
  },
  reset() {
    mutations.setInputValue('');
    mutations.setResult(0);
  }
}

export {
  store,
  getters,
  mutations,
  actions,
};