<template>
  <div class="three">
    <h1>{{ counter }}</h1>
    <button @click="addValueToArray">save number</button><br />
    <span v-for="num in savedNums" :key="num">
      <span @click="deleteValueFromArray(num)">{{ num }}, </span>
    </span>
  </div>
</template>

<script lang="ts">
import { StateInterface } from "@/store";
import { computed } from "@vue/reactivity";
import { defineComponent } from "vue";
import { useStore } from "vuex";

export default defineComponent({
  setup() {
    const store = useStore<StateInterface>();
    const counter = computed<number>(() => store.state.number.counter);
    const addValueToArray = () => store.commit("number/addSelectedNumbers", counter.value);
    const savedNums = computed<number[]>(() => store.state.number.selectedNumbers);
    const deleteValueFromArray = (num: number) => store.commit("number/deleteNumber", num);

    return { counter, addValueToArray, savedNums, deleteValueFromArray };
  },
});
</script>

<style scoped>
.three {
  width: 100%;
  min-height: 100px;
  padding: 20px;
  background-color: rgb(204, 204, 204);
}
.array {
  display: flex;
}
</style>
