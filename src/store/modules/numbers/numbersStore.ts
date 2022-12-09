import { GetterTree, MutationTree, ActionTree } from "vuex";

// Lectura de estados globales. Variables que crearíamos en el data del options API.
import { NumberStateInterface, PostInterface } from "@/interfaces/store.interface";
import { StateInterface } from "./../../index";

const state: NumberStateInterface = {
  counter: 0,
  selectedNumbers: [],
  classList: ["nestor", "juan", "raquel"],
  list: [],
  loading: false,
};

// function state(): NumberStateInterface {
//   return {
//     counter: 0,
//     selectedNumbers: [],
//     classList: ["nestor", "juan", "raquel"],
//     list: [],
//     loading: false,
//   };
// }

// Lectura de estados Computados. Estados que dependen de las variables en state. Tienen valor tangible. Computed Properties that depend on the state
const getters: GetterTree<NumberStateInterface, StateInterface> = {
  counterTimes2(state: NumberStateInterface) {
    return state.counter * 2;
  },

  classFilter(state: NumberStateInterface) {
    return state.classList.filter((item) => {
      return item === "nestor";
    });
  },
};
// Mutaciones de estados sincronos. Methods que modifican los valores de los estados globales. No tienen valor tangible, son solo funciones.
// El primer parametro que aceptaremos será el estado global que queremos modificar "initialCounter". luego aceptaremos los parametros que modificaran el estado.
// Methods calls to change or update the state
const mutations: MutationTree<NumberStateInterface> = {
  setInitialCounter(state: NumberStateInterface, value: number) {
    state.counter = value;
  },
  addSelectedNumbers(state: NumberStateInterface, value: number) {
    state.selectedNumbers.push(value);
  },
  deleteNumber(state: NumberStateInterface, value: number) {
    const itemIndex = state.selectedNumbers.indexOf(value);
    state.selectedNumbers.splice(itemIndex, 1);
  },
  increaseCounter(state: NumberStateInterface, value: number) {
    state.counter = value;
  },
  set(state: NumberStateInterface, value: PostInterface[]) {
    state.list = value;
    console.log(state.list);
  },
  setLoading(state: NumberStateInterface, loading: boolean) {
    state.loading = loading;
  },
};

// we call async functions and combine them with mutations to set the a global state.
const actions: ActionTree<NumberStateInterface, StateInterface> = {
  async get({ commit }) {
    const result = await fetch("https://jsonplaceholder.typicode.com/posts");
    const json = await result.json();
    commit("set", json);
    commit("setLoading", false);
  },
};

export const numberModule = {
  state,
  getters,
  mutations,
  actions,
  namespaced: true,
};
