<template>
  <div>
    <h2>TodoList</h2>
    <TodoItem></TodoItem>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TodoItem from "./TodoItem.vue";
export default defineComponent({
  name: "TodoList",
  components: {
    TodoItem,
  },
  data() {
    return {};
  },
});
</script>

