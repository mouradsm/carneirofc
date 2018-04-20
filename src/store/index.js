import Vue from 'vue'
import Vuex from 'vuex'

// import example from './module-example'
import users from './user'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    users
  }
})

export default store
