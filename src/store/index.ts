import { createStore } from "vuex";
import { numberModule } from "@/store/modules/numbers/numbersStore";
import { NumberStateInterface } from "@/interfaces/store.interface";

export interface StateInterface {
  number: NumberStateInterface;
}

// export default createStore
export default createStore<StateInterface>({
  modules: {
    number: numberModule,
  },
});
