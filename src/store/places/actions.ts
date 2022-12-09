import { ActionTree } from "vuex";
import { PlaceStateInterface } from "./state";
import { StateInterface } from "../index";

const actions: ActionTree<PlaceStateInterface, StateInterface> = {
  someAction(/*{ commit }, payload  */) {
    // a line to prevent linter errors
  },
};

export default actions;
