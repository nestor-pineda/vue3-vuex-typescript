import { StateInterface } from "./../store/index";
import { useStore } from "vuex";
import { computed, Ref } from "vue";
import { Post } from "@/store/number/state";

export const useNumberStore = () => {
  const store = useStore<StateInterface>();

  const counter = computed<number>(() => store.state.number.counter);
  const addValueToArray = () => store.commit("number/addSelectedNumbers", counter.value);
  const savedNums = computed<number[]>(() => store.state.number.selectedNumbers);
  const deleteValueFromArray = (num: number) => store.commit("number/deleteNumber", num);

  const counterTimes2 = computed<number>(() => store.getters["number/counterTimes2"]);
  const increment = () => store.commit("number/increaseCounter", counter.value + 1);
  const classFilter = computed(() => store.getters.number.classFilter);

  store.dispatch("number/get");

  const postList = computed<Post[]>(() => store.state.number.list);

  return { counter, addValueToArray, savedNums, deleteValueFromArray, counterTimes2, increment, classFilter, postList };
};

export const useNumberStoreForInputs = (inputNumber: Ref<number>) => {
  const store = useStore<StateInterface>();
  const setCounter = () => store.commit("number/setInitialCounter", inputNumber.value);
  return { setCounter };
};
