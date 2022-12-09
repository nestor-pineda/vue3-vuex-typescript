<template>
  <div class="home">
    <h1>This is the About page</h1>
    <ComponentFive />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ComponentFive from "@/components/ComponentFive.vue";
import { useStore } from "vuex";

export default defineComponent({
  name: "AboutView",
  components: { ComponentFive },

  setup() {
    const store = useStore();
    store.dispatch("number/get");
    return {};
  },
});
</script>

<style scoped></style>
