<template>
    <div class="sTitle ">
      <div class="outer" v-bind:class="{out:$store.state.sizes==1}">
        <div class="heart"><a href="/#/home"> </a></div>
      </div>
      <div class="dot"></div>
      <div class="outer" v-bind:class="{out:$store.state.sizes==2}">
        <div class="heart"><a href="/#/tow"> </a></div>
      </div>
      <div class="dot"></div>
      <div class="outer" v-bind:class="{out:$store.state.sizes==3}">
        <div class="heart"> <a href="/#/skill"> </a></div>
      </div>
      <div class="dot"></div>
      <div class="outer" v-bind:class="{out:$store.state.sizes==4}">
        <div class="heart"></div>
      </div>
      <div class="dot"></div>
      <div class="jpgs">
        <div class="simgs">
           <img src="http://cnd.yinglingxuan.cn/13.jpg">
        </div>
      </div>
      <!--<div class="mps" style="display: none">
        <audio autoplay="autoplay" controls="true"  loop="loop"  name="media" id="data5">
          <source  id="data4" src="static/mp4/横山克 - アゲイン.mp3" type="audio/mpeg" autoplay>
        </audio>
      </div>
      <div id="can">
        <canvas id="wrap" height="80" width="50" style="border-bottom: solid 1px #000000;"></canvas>
      </div>-->

    </div>
</template>

<script>
    export default {
        name: "Step",
        data(){
          return{
            styles:true
          }
        },
        mounted() {
          var aee=["red","cyan","green","blue","orange","purple","#557CC1","#DA63FF","#93F100","#FECCE5"];
            var _this=this;
            // 鼠标移动到上面
            $('.outer').mouseenter(function () {
              /*console.info(this);*/
              _this.styles=false;
              $(".outer").css({backgroundColor:''});
              $(this).css({backgroundColor:'#fff'});
            })
          // 鼠标移开
            $('.outer').mouseleave(function () {
              /*console.info(this);*/
              _this.styles=true;
              $(this).css({backgroundColor:''});
            })
            //点击暂停和播放
            var count2=0;
            $('.simgs').click(function () {
              var music = document.getElementById("data5");
              if(count2==1){
                music.pause();
                count2=0;
                return;
              }
              music.play();
              count2++;
              raised();
            })
          raised();
          //颜色的闪烁
          var count=0;
          setInterval(function(){
            $(".outer").css({backgroundColor:''});
            if (_this.styles){
              count++;
              if(count%2==0){
                count=0;
                $('.out').css({backgroundColor:'#fff'});
                return;
              }
              $('.out').css({backgroundColor:''});
            }
          },2000);

          //音频的波浪纹
          function raised(){
            var wrap = document.getElementById("wrap");
            var cxt = wrap.getContext("2d");
            //获取API
            var context = new AudioContext;
            //加载媒体
            /*var audio = new Audio("MP3/40㍍P - からくりピエロ (活动小丑).mp3");*/
            var audio =document.getElementById("data5");;
            //创建节点
            try {
              var source = context.createMediaElementSource(audio);
              var analyser = context.createAnalyser();
              //连接：source → analyser → destination
              source.connect(analyser);
              analyser.connect(context.destination);
              //创建数据
              var output = new Uint8Array(100);
              (function drawSpectrum() {
                analyser.getByteFrequencyData(output);//获取频域数据
                cxt.clearRect(0, 0, wrap.width, wrap.height);
                //画线条
                /*var p2=Math.random()*10;    //获取随机数对应颜色
                      var n=Math.ceil(p2);*/
                for (var i = 0; i < 10; i++) {
                  var t=i%10;
                  var value = output[i] / 8;//<===获取数据
                  var heights=wrap.height-(value*2);
                  cxt.fillStyle=aee[t];  //定义颜色
                  cxt.fillRect(i*5,heights,4,value*2);
                }
                //请求下一帧
                requestAnimationFrame(drawSpectrum);
              })();
            }catch (e) {

            }
          }
        },
    }
</script>

<style scoped>
  *{
    margin: 0px;
    padding: 0px;
  }
  .sTitle{
    /*background-color: #fff;*/
    width: 24px;
  }
  .sTitle a{
     /*border: solid 1px red;*/
     width: 10px;
     padding: 7px;
  }
  .outer{
    border: solid 0px #fff;
    border-radius: 50%;
    width: 24px;
    height: 20px;
    padding-top: 1px;
    padding-bottom: 1px;
    transition:background-color 1s;
  }
  .heart{
    /*border: solid 1px red;*/
    border-radius: 50%;
    width: 10px;
    height: 10px;
    margin: 5px auto;
    background-color: aqua;
  }
  .dot{
    height: 20px;
    border-left:dotted  1px #000;
    margin:3px 46%;
  }
  .sTitle .jpgs .simgs{

  }
  .sTitle .jpgs .simgs img{
    width: 50px;
    height: 50px;
    margin-top: 5px;
    margin-left: -10px;
    border-radius: 50%;
    animation:myfirst 7s linear 0s infinite;
  }
  @keyframes myfirst
  {
    from{-webkit-transform: rotate(0deg)}
    to{-webkit-transform: rotate(360deg)}
  }
  #can{
    /*border: solid 1px red;*/
    height: 80px;
    width: 50px;
    margin-left: -10px;
  }

</style>
