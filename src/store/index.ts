// import { createStore, createLogger } from "vuex";
// import { numbers } from "@/store/modules/numbers/numbersStore";

// const plugins = [createLogger()];

// // export default createStore({})
// export default createStore({
//   plugins,
//   modules: {
//     numbers,
//   },
// });

//NEW CODE

import { createStore } from "vuex";

// My custom modules
import placesModule from "./places";
import { PlaceStateInterface } from "./places/state";
import numberModule from "./number";
import { NumberStateInterface } from "./number/state";

export interface StateInterface {
  places: PlaceStateInterface;
  number: NumberStateInterface;
}

export default createStore<StateInterface>({
  modules: {
    places: placesModule,
    number: numberModule,
  },
});
