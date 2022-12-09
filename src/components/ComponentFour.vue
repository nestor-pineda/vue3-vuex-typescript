<template>
  <div></div>
</template>

<script lang="ts">
import { StateInterface } from "@/store";
import { computed, ComputedRef } from "@vue/reactivity";
import { defineComponent } from "vue";
import { useStore } from "vuex";

export default defineComponent({
  setup() {
    const store = useStore<StateInterface>();

    const counter: ComputedRef<number> = computed(() => store.state.number.counter);

    return {};
  },
});
</script>

<style scoped></style>
