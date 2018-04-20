import Vue from 'vue'
import Vuex from 'vuex'

// import example from './module-example'
import user from './module-user'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    user
  }
})

export default store
