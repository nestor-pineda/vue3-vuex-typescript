import { MutationTree } from "vuex";
import { PlaceStateInterface } from "./state";

const mutation: MutationTree<PlaceStateInterface> = {
  someMutation(/* state: ExampleStateInterface */) {
    // a line to prevent linter errors
  },
};

export default mutation;
