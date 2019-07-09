<template>
  <div class="tow-title" v-bind:style="{height:heigths+'px'}" id="tow">
    <div class="bor">
      <div class="imgs">
        <img src="../assets/images/weixin-head.png">
      </div>
      <div class="txt">
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;你好，我叫方荣涛，坐标广州，我是一名Web前端工程师，平时没事喜欢捣鼓一些新玩意，
          在2016年自学了点Java后端，今后的职业规划是朝着全栈发展，在第一家公司中有写过一些简单的API，主要还是根据业务API和前端进行交互，在公司写过的项目:海川衣坊，拼团购，园区租赁管理，大数据专科平台，个人作品有俄罗斯方块，音视频弹幕,群聊私聊等前端练手作品
          <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;不浮躁，喜欢学习新知识，执行力强，自学能力也不错，目前，可以根据文档实现简单
          的业务功能，愿意挑战一些较难的网页
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapState } from "vuex";
export default {
  name: "User",
  data() {
    return {
      heigths: ""
    };
  },
  created() {
    setTimeout(function() {
      $(".tow-title .bor .imgs").show();
      $(".tow-title .bor .imgs").animate({ top: "20%" });
    }, 600);

    setTimeout(function() {
      $(".tow-title .bor .txt").show();
      $(".tow-title .bor .txt").animate({ top: "48%" });
    }, 1000);

    //获取到当前浏览器的高度
    this.$store.state.sizes = 2;
    this.heigths = window.screen.availHeight - 20;
  },
  mounted() {
    /* var _this=this;

            tow.addEventListener("mousewheel", function(e){
              if(_this.$store.state.sizes==2){
                debugger
                /!*console.info(e.wheelDelta);*!/
                if(e.wheelDelta>=1){
                  _this.$store.state.sizes=1;
                  window.location.href='/#/home';
                }else {
                  /!*window.location.href='/#/user';*!/
                  _this.$store.state.sizes=3;
                  window.location.href='/#/skill';
                }
              }
            });*/
    /*_this.$store.state.sizes=2;*/
  }
};
</script>

<style scoped>
.tow-title {
  /*height: 500px;*/
  width: 100%;
  background: url("http://cnd.yinglingxuan.cn/17.jpg");
}
.tow-title .bor {
  /*  border: solid 1px red;
    width: 100%;
    height: 500px;*/
}
.tow-title .bor .txt {
  color: #fff;
  width: 60%;
  position: absolute;
  left: 20%;
  right: 20%;
  bottom: -10%;
  display: none;
}
.tow-title .bor .imgs {
  width: 150px;
  position: absolute;
  left: 45%;
  right: 45%;
  bottom: -30%;
  display: none;
}
.tow-title .bor .imgs img {
  height: 150px;
  width: 150px;
  border-radius: 50%;
}
</style>
