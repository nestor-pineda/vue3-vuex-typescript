<template>
  <div class="home">
    <ComponentOne />
    <ComponentTwo />
    <ComponentThree />
    <ComponentFour />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ComponentOne from "@/components/ComponentOne.vue";
import ComponentTwo from "@/components/ComponentTwo.vue";
import ComponentThree from "@/components/ComponentThree.vue";
import ComponentFour from "@/components/ComponentFour.vue";

export default defineComponent({
  name: "HomeView",
  components: { ComponentOne, ComponentTwo, ComponentThree, ComponentFour },
});
</script>
