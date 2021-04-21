<template>
  <div>
    <ul>
      <li class="item" v-for="toDo in toDoArray" :key="toDo">
        <input
          type="checkbox"
          :id="toDo"
          :value="toDo"
          @click="done(toDo)"
        />
        <button class="updateToDo" @click="updateToDo(toDo)" :id="toDo">
          🖊️
        </button>
        <span :class="toDo">{{ toDo }}</span>
        <button class="removeToDo" @click="removeToDo(toDo)">X</button>
      </li>
      <UpdateToDo v-if="toDo" :toDo="toDo" />
    </ul>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import UpdateToDo from "../components/UpdateToDo";

export default {
  name: "ToDoList",
  components: {
    UpdateToDo
  },
  data() {
    return {
      updatedToDo: "",
      toDo: ""
    };
  },
  computed: mapGetters(["toDoArray"]),
  methods: {
    ...mapActions(['getToDoArray']),
    removeToDo(toDo) {
      for (let i = 0; i < this.toDoArray.length; i++) {
        if (toDo == this.toDoArray[i]) {
          this.toDoArray.splice(this.toDoArray.indexOf(this.toDoArray[i]), 1);
        }
      }
    },
    updateToDo(toDo) {
      this.toDo = toDo;
    },
    done(toDo) {
      const toDoDone = document.querySelector(`.${toDo}`);
      if (document.getElementById(`${toDo}`).checked) {
        toDoDone.style.setProperty("text-decoration", "line-through");
        return;
      }
      toDoDone.style.setProperty("text-decoration", "none");
    }
  },
  created() {
    this.getToDoArray();
  }
};
</script>


<style scoped>
ul {
  list-style-type: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
li {
  margin: 0 10px;
}
.item {
  display: flex;
  flex-direction: row;
  background-color: white;
  margin-bottom: 10px;
  padding: 5px;
  width: 80%;
}
button {
  width: fit-content;
  text-align: center;
  border: none;
  font-size: 1em;
  height: 40px;
}
input {
  height: 35px;
  width: 25px;
}
.updateToDo {
  margin-right: 10px;
  font-size: 0.7em;
}
.removeToDo {
  text-decoration: none;
  position: absolute;
  right: 34%;
  float: right;
}
</style>
