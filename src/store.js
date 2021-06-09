import Vue from 'vue';

const store = Vue.observable({
  theme: 1,
  inputValue: '',
  operator: '',
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
  setOperator(operator) {
    store.operator = operator;
  }
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
  operation(newOperator) {
    let result = store.result;
    if (result === 0) {
      mutations.setResult(parseFloat(store.inputValue));
      mutations.setInputValue('');
    } else {
      const operator = store.operator;
      if (operator === '+') {
        result += parseFloat(store.inputValue);
        mutations.setResult(result);
        mutations.setInputValue('');
      } else if (operator === '-') {
        result -= parseFloat(store.inputValue);
        mutations.setResult(result);
        mutations.setInputValue('');
      } else if (operator === '*') {
        result *= parseFloat(store.inputValue);
        mutations.setResult(result);
        mutations.setInputValue('');
      } else if (operator === '/') {
        result /= parseFloat(store.inputValue);
        mutations.setResult(result);
        mutations.setInputValue('');
      }
    }
    mutations.setOperator(newOperator);
    if (newOperator === '=') {
      mutations.setInputValue(result.toString());
    }
  },
  reset() {
    mutations.setInputValue('');
    mutations.setOperator('');
    mutations.setResult(0);
  }
}

export {
  store,
  getters,
  mutations,
  actions,
};