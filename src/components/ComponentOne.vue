<template>
  <div class="one">
    <input type="number" v-model="inputNumber" />
    <button
      @click="
        submit();
        setCounter();
      "
    >
      Submit
    </button>
    <p>{{ showNumber }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useStore } from "vuex";
import { ref } from "@vue/reactivity";

export default defineComponent({
  setup() {
    const store = useStore();
    let inputNumber = ref<number>(0);
    let showNumber = ref<number>(0);

    const submit = () => {
      return (showNumber.value = inputNumber.value);
    };

    const setCounter = () => store.commit("numbers/setInitialCounter", inputNumber.value);

    return { inputNumber, showNumber, submit, setCounter };
  },
});
</script>

<style scoped>
.one {
  width: 100%;
  min-height: 100px;
  padding: 20px;
  background-color: rgb(238, 238, 238);
}
</style>
