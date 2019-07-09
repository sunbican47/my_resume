<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
    <transition :name="transitionName">    <!--过渡动画的标签-->
      <router-view></router-view>
    </transition>

    <!--<div style="height: 200px; z-index: 30" class="step">
      <step></step>
    </div>-->
  </div>
</template>

<script>
  import {mapGetters,mapState} from 'vuex'
  import step from '@/components/Step'
export default {
  name: 'App',
  data(){
    return {
      transitionName:'',     /*动画的属性*/
    }
  },
  watch: {//使用watch 监听$router的变化
    $route(to, from) {
      //如果to索引大于from索引,判断为前进状态,反之则为后退状态
      debugger
      if(to.meta.index > from.meta.index){
        //设置动画名称
        this.transitionName = 'slide-left';
      }else{
        this.transitionName = 'slide-right';
      }
    }
  },
  components:{
    step
  }
}
</script>

<style>
  html{
    overflow-x: hidden;
    overflow-y: hidden;
  }

  *{
    margin: 0px;
  }
  .step{
    /*border: solid 1px red;*/
    width: 30px;
    position: fixed;
    top: 30%;
    right: 20px;
  }


.slide-right-enter-active,
.slide-right-leave-active,
.slide-left-enter-active,
.slide-left-leave-active {
  will-change: transform;
  transition: all 700ms;
  position: absolute;
}
.slide-right-enter {
  /*opacity: 0;*/
  transform: translate3d(0, -100%, 0);
}
.slide-right-leave-active {
  /*opacity: 0;*/
  transform: translate3d(0, 100%, 0);
}
.slide-left-enter {
  /*opacity: 0;*/
  transform: translate3d(0, 100%, 0);
}
.slide-left-leave-active {
  /*opacity: 0;*/
  transform: translate3d(0, -100%, 0);
}
</style>
