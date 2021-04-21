<template>
  <div class="guide-container">
    <h2>To Do Guide</h2>
    <p>
      What is a ToDo List? The definition is a simple one. It’s a list of tasks
      you need to complete, or things that you want to do.
    </p>
    <h4>How to write a To Do List</h4>
    <p>Put Tasks on Your To-Do List, Not Goals</p>
    <p>
      So what are tasks? Tasks are the actions you take to reach an objective.
      Break an objective down and you have your tasks. Very often they're single
      events (though they can repeat). A task might be "learn three new Hindi
      verbs" or "study for 30 minutes."
    </p>
    <h4>The Benefits of Using a To Do List</h4>
    <p>Improves your memory: A to do list acts as an external memory aid.</p>
    <p>
      Increases productivity: A to do list allows you to prioritize the tasks
      that are more important.
    </p>
    <p>
      Helps with motivation: To do lists are a great motivational tool because
      you can use them to clarify your goals.
    </p>
    <router-link to="/">Go home</router-link>
  </div>
</template>

<script>
export default {
  name: "Guide",
  data() {
    return {};
  },
  props: {},
  methods: {}
};
</script>


<style scoped>
.guide-container {
  background-color: rgb(125, 248, 217);
  width: 60vw;
  padding: 20px; 
  font-size: 1em;
}
</style>
