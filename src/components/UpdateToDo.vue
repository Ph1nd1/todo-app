<template>
  <div>
    <div class="update-container">
      <input type="text" placeholder="New todo" :value="toDo" id="todo" />
      <button class="update-btn" @click="updateToDo">save</button>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "UpdateToDo",
  computed: mapGetters(["toDoArray"]),
  props: {
    toDo: String
  },
  methods: {
    ...mapActions(['updatedToDo']),
    updateToDo() {
      const updatedToDo = document.getElementById("todo").value;
      const toDo = this.toDo;
      this.updatedToDo({toDo, updatedToDo});
      this.$emit("updated");
    }
  }
};
</script>

<style scoped>
input {
  border: none;
  padding: 5px;
  width: 60%;
  font-size: 0.8em;

}
button {
  width: fit-content;
  text-align: center;
  border: none;
  padding: 5px;
  font-size: 0.8em;

}
</style>
