import { createStore, createLogger } from "vuex";
import { State, Post } from "@/interfaces/store.interface";

const plugins = [createLogger()];

// Lectura de estados globales. Variables que crearíamos en el data del options API.
const state: State = {
  counter: 0,
  selectedNumbers: [],
  classList: ["nestor", "juan", "raquel"],
  list: [],
  loading: false,
};
// Lectura de estados Computados. Estados que dependen de las variables en state. Tienen valor tangible. Computed Properties that depend on the state
const getters = {
  counterTimes2(state: State) {
    return state.counter * 2;
  },

  classFilter(state: State) {
    return state.classList.filter((item) => {
      return item === "nestor";
    });
  },
};
// Mutaciones de estados sincronos. Methods que modifican los valores de los estados globales. No tienen valor tangible, son solo funciones.
// El primer parametro que aceptaremos será el estado global que queremos modificar "initialCounter". luego aceptaremos los parametros que modificaran el estado.
// Methods calls to change or update the state
const mutations = {
  setInitialCounter(state: State, value: number) {
    state.counter = value;
  },
  addSelectedNumbers(state: State, value: number) {
    state.selectedNumbers.push(value);
  },
  deleteNumber(state: State, value: number) {
    const itemIndex = state.selectedNumbers.indexOf(value);
    state.selectedNumbers.splice(itemIndex, 1);
  },
  increaseCounter(state: State, value: number) {
    state.counter = value;
  },
  set(state: State, value: Post[]) {
    state.list = value;
    console.log(state.list);
  },
  setLoading(state: State, loading: boolean) {
    state.loading = loading;
  },
};

// we call async functions and combine them with mutations to set the a global state.
const actions = {
  async get({ commit }: any) {
    const result = await fetch("https://jsonplaceholder.typicode.com/posts");
    const json = await result.json();
    commit("set", json);
    commit("setLoading", false);
  },
};

// export default createStore({})
export default createStore({
  plugins,
  state,
  getters,
  mutations,
  actions,
});
