<template>
  <div class="home">
    <h1>This is the About page</h1>
    <ComponentFive />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ComponentFive from "@/components/ComponentFive.vue";
// import { useStore } from "vuex";
// import { StateInterface } from "@/store";
import { useNumberStore } from "@/composables";

export default defineComponent({
  name: "AboutView",
  components: { ComponentFive },

  setup() {
    useNumberStore();
    // const store = useStore<StateInterface>();
    // store.dispatch("number/get");
    return {};
  },
});
</script>

<style scoped></style>
