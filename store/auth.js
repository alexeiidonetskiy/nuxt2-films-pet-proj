const defaultState = {user: "", name: ""};

const getFromLocalStorage = () => {
  // Not working in SSR
  // return localStorage.getItem('user') || undefined;
}

const saveToLocalStorage = (user) => {
  // Not working in SSR
  // localStorage.setItem('user', user);
}

const makeLogin =  () => {
  return new Promise((resolve) => {
    const response = { token: '123' };
  
    const cb = () => resolve(response);
    
    setTimeout(cb, 500);
  });
}

export const state = () => ({
  user: getFromLocalStorage() || defaultState
})

export const getters = {
  getUser(state) {
    return state.user
  }
}

export const mutations = {
  setUser(state, user) {
    state.user = user;
    saveToLocalStorage(user);
  },
  clearSession(state) {
    state.user = defaultState;
  },
}

export const actions = {
  async login({ state, commit }, payload) {
    console.log('payload', payload);
    const { token } = await makeLogin();
    console.log('token', token);
  },

  async logout ({ state }) {
    console.log('Logout');
  },

  async nuxtServerInit ({ commit }, { req }) {
    // if (req.session.user) {
      // commit('user', req.session.user)
    // }

    console.log('Nuxt server init');
    
  }
}
