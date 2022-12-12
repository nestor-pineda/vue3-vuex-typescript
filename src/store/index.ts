import { createStore } from "vuex";

// modules
import placesModule from "./places";
import numberModule from "./number";
// modules interfaces
import { PlaceStateInterface } from "./places/state";
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
