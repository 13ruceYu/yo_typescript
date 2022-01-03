<template>
  <div class="todo-wrapper">
    <TodoInput></TodoInput>
    <TodoList></TodoList>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TodoInput from './components/TodoInput/TodoInput.vue'
import TodoList from './components/TodoList/TodoList.vue'
export default defineComponent({
  name: "App",
  components: {
    TodoInput,
    TodoList
  }
});
</script>

<style>
</style>
