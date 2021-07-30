import Vue from 'vue';

const store = Vue.observable({
  theme: 0,
  inputValue: '',
  operation: '',
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
  setOperation(newValue) {
    store.operation = newValue;
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
    mutations.setOperator(newOperator);
    let operation = store.operation;
    if (newOperator === '=') {
      operation += store.inputValue;
      mutations.setOperation(operation);
      mutations.setResult(eval(operation));
      mutations.setInputValue(store.result.toString());

    } else {
      operation += store.inputValue +newOperator;
      mutations.setOperation(operation);
      mutations.setInputValue('');
    }
  },
  reset() {
    mutations.setInputValue('');
    mutations.setOperator('');
    mutations.setOperation('');
    mutations.setResult(0);
  }
}

export {
  store,
  getters,
  mutations,
  actions,
};