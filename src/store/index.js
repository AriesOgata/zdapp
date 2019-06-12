import Vue from 'vue'
import Vuex from 'vuex'
import actions from './action'
import getters from './getters'

Vue.use(Vuex)

const state = {
	latitude: '', //当前位置纬度
	longitude: '', //当前位置经度
    Authorization: localStorage.getItem('Authorization') ? localStorage.getItem('Authorization') : ''
  }


export default new Vuex.Store({
	state,
	getters,
	actions,
  mutations: {
    // 修改token，并将token存入localStorage
    changeLogin (state, user) {
      state.Authorization = user.Authorization;
      localStorage.setItem('Authorization', user.Authorization);
    }
  }
})
