import Vue from 'vue';

const store = Vue.observable({
  theme: 1,
  test: {
    theme: 1,
  },
  value: 399981,
})

const getters = {
  theme: () => store.theme,
}

const mutations = {
  setTheme(newValue) {
    store.theme = newValue;
  },
}

const actions = {
  updateTheme(newValue) {
    mutations.setTheme(newValue);
  }
}

export {
  store,
  getters,
  mutations,
  actions,
};