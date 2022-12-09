import { GetterTree } from "vuex";
import { PlaceStateInterface } from "./state";
import { StateInterface } from "../index";

const getters: GetterTree<PlaceStateInterface, StateInterface> = {
  someGetter(/* state */) {
    // return true;
  },
};

export default getters;
