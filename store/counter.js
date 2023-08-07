export const state = () => ({
  counter: 0,
});

export const getters = {
  getCounter(state) {
    return state.counter;
  }
}

export const mutations = {
  increment(state) {
    state.counter++
  },
  setCustomValue(state, value) {
    state.counter = value;
  },
  clearValue (state) {
    state.counter = 0;
  }
}

export const actions = {
  async fetchCounter(state) {
    const res = { data: 10 };
    state.counter = res.data;
    return res.data;
  }
}
