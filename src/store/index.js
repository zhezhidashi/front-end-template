import Vue from 'vue'
import Vuex from 'vuex'
import first from './first.js'
Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        first
    }
})