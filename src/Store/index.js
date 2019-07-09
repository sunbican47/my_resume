import Vue from 'vue'     /*导入安装好自带的组件*/
import Vuex from 'vuex'
// 启用/安装vuex -> Vuex.install
Vue.use(Vuex);
const store = new Vuex.Store({
  state: { // 共享数据
   sizes:1,
  },
  getters:{
    sizes(state){
      return state.sizes;
    },
  },
  mutations: { // 行为/数据状态[不能异步]

    add(){
      this.$store.state.sizes++;
    },
    att(){
      this.$store.state.sizes--;
    }

  },
  actions: {// 动作

  }
});

export default store;
