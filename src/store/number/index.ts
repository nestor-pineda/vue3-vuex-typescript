import { Module } from "vuex";
import { StateInterface } from "../index";
import state, { NumberStateInterface } from "./state";
import actions from "./actions";
import getters from "./getters";
import mutations from "./mutations";

const numberModule: Module<NumberStateInterface, StateInterface> = {
  namespaced: true,
  actions,
  getters,
  mutations,
  state,
};

export default numberModule;
