<template>
  <div>
    <h3>{{ counter }} x 2 =</h3>
    <!-- <p>{{ counterTimes }}</p> -->
    <button @click="increment">increment by 2</button>
  </div>
  <!-- <div v-for="name in classList" :key="name">
    <p>{{ name }}</p>
  </div> -->
  <!-- Filtered name: {{ classFilter }} -->
</template>

<script lang="ts">
import { StateInterface } from "@/store";
import { computed } from "@vue/reactivity";
import { defineComponent } from "vue";
import { useStore } from "vuex";

export default defineComponent({
  setup() {
    const store = useStore<StateInterface>();

    // To mantain reactivity we use computed references for the state and the getters
    const counter = computed<number>(() => store.state.number.counter);
    const counterTimes = computed(() => store.getters.number.counterTimes2);
    const increment = () => store.commit("number/increaseCounter", counter.value + 1);

    // const classList = computed(() => store.state.classList);
    const classFilter = computed(() => store.getters.number.classFilter);

    return { counter, counterTimes, increment, classFilter };
  },
});
</script>

<style scoped></style>
