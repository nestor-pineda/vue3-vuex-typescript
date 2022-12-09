<template>
  <h2>Blog Post Component</h2>
  <div v-for="item in postList" :key="item.id">
    <div>
      <h3>{{ item.title }}</h3>
      <p>{{ item.body }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, ComputedRef } from "@vue/reactivity";
import { defineComponent } from "vue";
import { useStore } from "vuex";
import { Post } from "@/interfaces/store.interface";
import { StateInterface } from "@/store";

export default defineComponent({
  setup() {
    const store = useStore<StateInterface>();
    const postList: ComputedRef<Post[]> = computed(() => store.state.number.list);

    return { postList };
  },
});
</script>

<style scoped></style>
