import { ActionTree } from "vuex";
import { NumberStateInterface } from "./state";
import { StateInterface } from "../index";

const actions: ActionTree<NumberStateInterface, StateInterface> = {
  async get({ commit }: any) {
    const result = await fetch("https://jsonplaceholder.typicode.com/posts");
    const json = await result.json();
    commit("set", json);
    commit("setLoading", false);
  },
};

export default actions;
