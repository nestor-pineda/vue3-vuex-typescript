<template>
  <div></div>
</template>

<script lang="ts">
import { computed } from "@vue/reactivity";
import { defineComponent } from "vue";
import { useStore } from "vuex";

export default defineComponent({
  setup() {
    const store = useStore();

    const counter = computed(() => store.state.counter);

    return {};
  },
});
</script>

<style scoped></style>
