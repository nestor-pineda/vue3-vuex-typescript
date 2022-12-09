import { GetterTree } from "vuex";
import { NumberStateInterface } from "./state";
import { StateInterface } from "../index";

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

export default getters;
