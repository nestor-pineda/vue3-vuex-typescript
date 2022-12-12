<template>
  <div>{{ counter }}</div>
</template>

<script lang="ts">
import { useNumberStore } from "@/composables";
// import { StateInterface } from "@/store";
// import { computed } from "@vue/reactivity";
import { defineComponent } from "vue";
// import { useStore } from "vuex";

export default defineComponent({
  setup() {
    const { counter } = useNumberStore();
    // const store = useStore<StateInterface>();

    // const counter = computed<number>(() => store.state.number.counter);

    return { counter };
  },
});
</script>

<style scoped></style>
