export const state = () => ({
  isOpened: false
});

export const mutations = {
  toggle(state) {
    state.isOpened = !state.isOpened;
  }
};

export const getters = {
  getMenuState(state) {
    return state.isOpened;
  }
};
