<template>
  <div id="app">
    <TodoApp class="w-[400px] m-auto"/>
  </div>
</template>

<script>
  import TodoApp from "./components/TodoApp.vue"
  export default {
    name: 'App',
    components: {
      TodoApp
    }
  }
</script>

<style>

</style>
