import Vuex from 'vuex';
import Vue from 'vue';
import trigger from './modules/trigger';
import action from './modules/action';

// load vuex
Vue.use(Vuex);

// create store
export default new Vuex.Store({
    modules: {
        trigger,
        action
    },
});
