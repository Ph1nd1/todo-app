import Vuex from 'vuex';
import Vue from 'vue';
import toDo from './modules/toDo';

// Load Vuex
Vue.use(Vuex);

// Create store
export default new Vuex.Store({
  modules: {
    toDo
  }
});