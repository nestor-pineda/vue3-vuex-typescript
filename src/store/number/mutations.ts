import { MutationTree } from "vuex";
import { NumberStateInterface, Post } from "./state";

const mutation: MutationTree<NumberStateInterface> = {
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
  set(state: NumberStateInterface, value: Post[]) {
    state.list = value;
    console.log(state.list);
  },
  setLoading(state: NumberStateInterface, loading: boolean) {
    state.loading = loading;
  },
};

export default mutation;
