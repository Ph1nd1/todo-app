<template>
  <div>
    <div class="update-container">
      <input type="text" placeholder="New todo" :value="toDo" id="todo" />
      <button class="update-btn" @click="updateToDo">save</button>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "UpdateToDo",
  computed: mapGetters(["toDoArray"]),
  props: {
    toDo: String
  },
  methods: {
    updateToDo() {
      this.$set(
        this.toDoArray,
        this.toDoArray.indexOf(this.toDo),
        document.getElementById("todo").value
      );
    }
  }
};
</script>

<style scoped>
</style>
