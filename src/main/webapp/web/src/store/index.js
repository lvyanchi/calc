/**
 * Created by XH on 2017/7/18.
 */
import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import mutations from './mutations'



Vue.use(Vuex)




export default  new Vuex.Store({
  actions,
  mutations
})
