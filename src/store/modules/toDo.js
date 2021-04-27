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
        ).catch(error => {
            console.log(error);
          });
        commit('setToDoArray', response.data.toDoArray)
    },

    async addToDo({ commit}, newToDo) {
        const response = await axios.post('http://localhost:5678/data/todoapp/todoarray', 
        {newToDo});
        commit('addToDo', newToDo)
    },

    async deleteToDo({ commit }, toDo) {
        const response = await axios.delete('http://localhost:5678/data/todoapp/todoarray',
        {toDo});
        console.log(toDo);
        commit('deleteToDo', toDo)
    },

    async updatedToDo({ commit}, {toDo, updatedToDo}) {
        const response = await axios.put('http://localhost:5678/data/todoapp/todoarray', 
        {toDo, updatedToDo});

        commit('updatedToDo', {toDo, updatedToDo})
    },
};

const mutations = {
    setToDoArray: (state, todoarray) => (state.toDoArray = todoarray),
    addToDo: (state, newToDo) => state.toDoArray.push(newToDo),
    deleteToDo: (state, toDo) => {
        for (let i = 0; i < state.toDoArray.length; i++) {
            if (toDo == state.toDoArray[i]) {
              state.toDoArray.splice(state.toDoArray.indexOf(state.toDoArray[i]), 1);
            }
          }
    },
    updatedToDo: (state, {toDo, updatedToDo}) => {
        state.toDoArray.splice(
            state.toDoArray.indexOf(toDo),
            1,
            updatedToDo
        );
    }
};

export default {
    state,
    getters,
    actions,
    mutations
}