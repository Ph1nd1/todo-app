import axios from 'axios';

const state = {
    toDoArray: [],
    toDo: ''
};

const getters = {
    toDoArray: (state) => state.toDoArray,
    toDo: (state) => state.toDo
};

const actions = {
    async getToDoArray({ commit }) {
        const response = await axios.get(
          'http://localhost:5678/data/todoapp/todoarray'
        );
        // console.log(response.data);
        commit('setToDoArray', response.data.toDoArray)
    },

    async addToDo({ commit}, newToDo) {
        const response = await axios.post('http://localhost:5678/data/todoapp/todoarray', 
        {newToDo});
        console.log(response.data.toDoArray);
        commit('addToDo', newToDo)
    }
};

const mutations = {
    setToDoArray: (state, todoarray) => (state.toDoArray = todoarray),
    addToDo: (state, newToDo) => state.toDoArray.push(newToDo)
};

export default {
    state,
    getters,
    actions,
    mutations
}