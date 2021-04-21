<template>
  <div class="home">
      <h2>To Do App</h2>
      <AddToDo></AddToDo>
      <ToDoList/>
     <router-link to="Guide">To Do Guide</router-link>
  </div>
</template>

<script>
import AddToDo from '../components/AddToDo';
import ToDoList from '../components/ToDoList';

export default {
  name: 'Home',
  components: {
      AddToDo,
      ToDoList
  }
}
</script>

<style scoped>
.home {
  background-color: rgb(125, 248, 217);
  width: 40vw;
  padding: 20px;
}
</style>
