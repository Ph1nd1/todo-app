<template>
  <div>
    <div>
      <input type="text" placeholder="New todo" v-model="newToDo" />
      <button v-on:click="saveToDo">+</button>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "AddToDo",
  data() {
    return {
      newToDo: ""
    };
  },
  computed: mapGetters(["toDoArray"]),
  methods: {
    ...mapActions(["addToDo"]),
    saveToDo() {
      this.addToDo(this.newToDo);
      this.newToDo = "";
    }
  }
};
</script>


<style scoped>
input {
  border: none;
  padding: 5px;
  width: 75%;
  font-size: 1em;
}
button {
  width: fit-content;
  text-align: center;
  border: none;
  padding: 5px;
  font-size: 1em;
}
</style>