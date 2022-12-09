import { createStore, createLogger } from "vuex";
import { numbers } from "@/store/modules/numbers/numbersStore";

const plugins = [createLogger()];

// export default createStore({})
export default createStore({
  plugins,
  modules: {
    numbers,
  },
});
