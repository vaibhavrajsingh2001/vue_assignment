import Vuex from 'vuex';
import Vue from 'vue';
import trigger from './modules/trigger';

// load vuex
Vue.use(Vuex);

// create store
export default new Vuex.Store({
    modules: {
        trigger,
    },
});
