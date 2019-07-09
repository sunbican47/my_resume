<template>
  <div style="background: aliceblue">
    <div id="tuxing"></div>
    <div id="heart"></div>
    <div
      id="fullPage"
      class="fullpage-wrapper"
      style="height: 100%; position: relative; touch-action: none; transform: translate3d(0px, 0px, 0px);"
    >
      <div
        class="section fp-section active fp-table fp-completely"
        style="height: 666px; background-color: rgb(27, 188, 155);"
      >
        <div class="fp-tableCell" style="height:666px;">
          <home></home>
        </div>
      </div>
      <div
        class="section fp-section fp-table"
        style="height: 666px; background-color: rgb(75, 191, 195);background: url(http://cnd.yinglingxuan.cn/17.jpg) no-repeat; background-size: 100%"
      >
        <div class="fp-tableCell" style="height:666px;">
          <div class="tow-title" id="tow">
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
        </div>
      </div>
      <div
        class="section fp-section fp-table"
        style="height: 666px; background-color: rgb(123, 170, 190);background: url(http://cnd.yinglingxuan.cn/22.jpg) no-repeat;background-size: 100%"
      >
        <div class="fp-tableCell" style="height:666px;">
          <div class="statistics">
            <div id="mountNode"></div>
          </div>
          <div class="txts">
            <h1 style="margin-bottom: 20px">技能栈</h1>
            <p>熟练使用JAVA 开发 Web服务器
              <br>熟练JavaWeb开发，理解MVC开发模式和熟练使用Spring Boot,Spring MVC，MyBatis 开发
              <br>熟练Web前端开发技术，熟悉前后端分离开发模式
              <br>可熟练使用Vue全家桶、HTML、CSS、JQuery、JavaScript、AJAX进行页面开发
              <br>熟悉多种前端框架如ElementUI、LayUI、Iview等
              <br>熟练使用Nginx、CND文件加速配置
              <br>熟悉Linux操作系统的使用
              <br>熟悉微信公众号小程序开发
              <br>熟悉Svn、Git管理代码
            </p>
          </div>
        </div>
      </div>
      <div
        class="section fp-section fp-table"
        style="height: 666px; background-color: rgb(255, 153, 0);background: url(http://cnd.yinglingxuan.cn/5.jpg) no-repeat;background-size: 100%"
      >
        <div class="fp-tableCell" style="height:666px;width: 100%">
          <div style="border: solid 0px red;position: absolute; top: 15%;left: 35%;right: 35%">
            <div style="height: 560px; ">
              <el-steps direction="vertical" :active="4" slot="reference">
                <h1
                  style="margin-left: -10%;position: absolute;z-index: 10;border: solid 3px #409EFF;border-radius: 50%;width: 100px;line-height: 100px;text-align: center;background: #fff"
                >2016</h1>
                <h2 style="position: absolute;top: 15%;left: 15%;color: #fff">我的经历</h2>
                <el-step title></el-step>
                <el-step title="毕业院校" description="2016-6月毕业于广东韶光学院"></el-step>
                <el-step title="第一家公司" description="2018-8月任职于汕头市明际软件开发有限公司，2018-12月离职"></el-step>
                <el-step title="第二家公司" description="2018-8月任职于广州医博技术有限公司，2019-7月离职"></el-step>
              </el-steps>
            </div>
          </div>
        </div>
      </div>
      <div
        class="section fp-section fp-table"
        style="height: 666px; background-color: rgb(255, 153, 0);background:url(http://cnd.yinglingxuan.cn/16.jpg) no-repeat;background-size: 100%;"
      >
        <div class="fp-tableCell" style="height:666px;">
          <pro></pro>
        </div>
      </div>

      <div
        class="section fp-section fp-table"
        style="height: 666px; background-color: rgb(255, 153, 0); background: url(http://cnd.yinglingxuan.cn/24.jpg) no-repeat;background-size: 100%"
      >
        <div class="fp-tableCell" style="height:666px;">
          <div style="width: 100%; position: absolute; top: 25%">
            <contact></contact>
          </div>
        </div>
      </div>
    </div>

    <div id="fp-nav" class="right" style="margin-top:-100px;">
      <ul>
        <li class="outer" v-bind:class="{out:$store.state.sizes==1}">
          <a>
            <span style="background: aqua;"></span>
          </a>
        </li>
        <li class="outer active" v-bind:class="{out:$store.state.sizes==2}">
          <a>
            <span style="background: aqua;"></span>
          </a>
        </li>
        <li class="outer" v-bind:class="{out:$store.state.sizes==3}">
          <a>
            <span style="background: aqua;"></span>
          </a>
        </li>
        <li class="outer" v-bind:class="{out:$store.state.sizes==4}">
          <a>
            <span style="background: aqua;"></span>
          </a>
        </li>
        <li class="outer" v-bind:class="{out:$store.state.sizes==5}">
          <a>
            <span style="background: aqua;"></span>
          </a>
        </li>
        <li class="outer" v-bind:class="{out:$store.state.sizes==6}">
          <a>
            <span style="background: aqua;"></span>
          </a>
        </li>

        <div class="jpgs">
          <div class="simgs">
            <img src="http://cnd.yinglingxuan.cn/13.jpg">
          </div>
        </div>

        <div class="mps" style="display: none">
          <audio autoplay="autoplay" controls="true" loop="loop" name="media" id="data5">
            <source id="data4" src="./横山克 - アゲイン.mp3" type="audio/mpeg">
          </audio>
          <!-- <audio autoplay="autoplay" loop="true" controls="controls" name="media" id="data5">
            <source id="data4" src="http://cnd.yinglingxuan.cn/横山克 - アゲイン.mp3" type="audio/mpeg">
          </audio>-->
        </div>
        <div id="can">
          <canvas id="wrap" height="80" width="50" style="border-bottom: solid 1px #000000;"></canvas>
        </div>
      </ul>
    </div>
  </div>
</template>

<script>
import home from "./Home";
import tow from "./Tow";
import pro from "./Experience/Production";

import contact from "./Experience/Contact";
export default {
  name: "Dome",
  components: {
    home,
    tow,
    contact,
    pro
  },
  methods: {
    test2() {
      var b = 3;
      var a = b;
      console.log("a defined?" + a !== "undefined");
      console.log("b defined?" + b !== "undefined");
      // console.log(c !== "undefined");
    }
  },
  mounted() {
    // this.test2();
    // var object = {
    //   foo: "1fang",
    //   name: function() {
    //     var self = this;
    //     console.info(self.foo);
    //     console.info(this.foo);
    //     (function() {
    //       console.info(self.foo);
    //       console.info(this.foo);
    //     })();
    //   }
    // };
    // object.name();
    // (function() {
    //   console.log(1);
    //   setTimeout(function() {
    //     console.log(2);
    //   }, 1000);
    //   setTimeout(function() {
    //     console.log(3);
    //   }, 0);
    //   console.log(4);
    // })();
    for (var i = 0; i < 5; i++) {
      setTimeout(function() {
        console.log(i);
      }, i * 1000);
    }
    var _this = this;
    var chart = new G2.Chart({
      container: "mountNode",
      forceFit: true,
      height: window.innerHeight
    });
    try {
      $(function() {
        $("#fullPage").fullpage({
          sectionsColor: ["#1bbc9b", "#4BBFC3", "#7BAABE", "#f90"],
          navigation: false,
          onLeave: function(index, nextIndex, direction) {
            /*console.info(nextIndex)*/
            _this.$store.state.sizes = nextIndex;
            if (nextIndex == 2) {
              setTimeout(function() {
                $(".tow-title .bor .imgs").show();
                $(".tow-title .bor .imgs").animate({ top: "20%" });
              }, 600);

              setTimeout(function() {
                $(".tow-title .bor .txt").show();
                $(".tow-title .bor .txt").animate({ top: "48%" });
              }, 1000);
            } else {
              $(".tow-title .bor .imgs").css({ top: 50 });
              $(".tow-title .bor .imgs").hide();
              $(".tow-title .bor .txt").css({ top: 50 });
              $(".tow-title .bor .txt").hide();
            }
            if (nextIndex == 3) {
              setTimeout(function() {
                chart.render();
              }, 400);
            }
          }
        });
      });
    } catch (e) {}
    var _this = this;
    var aee = [
      "red",
      "cyan",
      "green",
      "blue",
      "orange",
      "purple",
      "#557CC1",
      "#DA63FF",
      "#93F100",
      "#FECCE5"
    ];
    // 鼠标移动到上面
    $(".outer").mouseenter(function() {
      /*console.info(this);*/
      _this.styles = false;
      $(".outer").css({ backgroundColor: "" });
      $(this).css({ backgroundColor: "#fff" });
    });
    // 鼠标移开
    $(".outer").mouseleave(function() {
      /*console.info(this);*/
      _this.styles = true;
      $(this).css({ backgroundColor: "" });
    });
    //颜色的闪烁
    var count = 0;
    setInterval(function() {
      $(".outer").css({ backgroundColor: "" });
      if (_this.styles) {
        count++;
        if (count % 2 == 0) {
          count = 0;
          $(".out").css({ backgroundColor: "#fff" });
          return;
        }
        $(".out").css({ backgroundColor: "" });
      }
    }, 2000);

    //点击暂停和播放
    var count2 = 0;
    $(".simgs").click(function() {
      var music = document.getElementById("data5");
      if (count2 == 1) {
        music.pause();
        count2 = 0;
        return;
      }
      music.play();
      count2++;
      raised();
    });
    raised();

    //音频的波浪纹
    function raised() {
      var wrap = document.getElementById("wrap");
      var cxt = wrap.getContext("2d");
      //获取API
      var context = new AudioContext();
      //加载媒体
      /*var audio = new Audio("MP3/40㍍P - からくりピエロ (活动小丑).mp3");*/
      var audio = document.getElementById("data5");
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
          analyser.getByteFrequencyData(output); //获取频域数据
          cxt.clearRect(0, 0, wrap.width, wrap.height);
          //画线条
          /*var p2=Math.random()*10;    //获取随机数对应颜色
                      var n=Math.ceil(p2);*/
          for (var i = 0; i < 10; i++) {
            var t = i % 10;
            var value = output[i] / 8; //<===获取数据
            var heights = wrap.height - value * 2;
            cxt.fillStyle = aee[t]; //定义颜色
            cxt.fillRect(i * 5, heights, 4, value * 2);
          }
          //请求下一帧
          requestAnimationFrame(drawSpectrum);
        })();
      } catch (e) {}
    }
    /*第三页*/
    var data = [
      {
        question: "Redis",
        percent: 0.2,
        color: "red"
      },
      {
        question: "Linux",
        percent: 0.3
      },
      {
        question: "Spring MVC",
        percent: 0.6
      },
      {
        question: "MyBatis",
        percent: 0.8
      },
      {
        question: "Spring Boot",
        percent: 0.9
      },
      {
        question: "JAVA",
        percent: 1.0
      },
      {
        question: "JQuery",
        percent: 1.1
      },
      {
        question: "JavaScript",
        percent: 1.1
      },
      {
        question: "ElementUI/Iview/LayUI",
        percent: 1.2
      },
      {
        question: "Vue",
        percent: 1.3
      }
    ];

    chart.source(data, {
      percent: {
        min: 0,
        max: 2
      }
    });
    chart.tooltip({
      title: "question",
      color: "#fff"
    });
    chart.legend(false);
    chart
      .coord("polar", {
        innerRadius: 0.1
      })
      .transpose();
    chart
      .interval()
      .position("question*percent")
      .color("question", ["#00FF00", "#31FF00", "#00FFE3", "red"])
      .tooltip("percent", function(val) {
        return {
          name: "占比",
          value: val * 100 + "%"
        };
      })
      .label("percent", {
        offset: -5
      });

    data.map(function(obj) {
      chart.guide().text({
        position: [obj.question, 0],
        content: obj.question + " ",
        style: {
          textAlign: "right",
          fontSize: 15
        }
      });
    });
    chart.render();
  }
};
</script>

<style scoped>
.outer {
  border: solid 0px #fff;
  border-radius: 50%;
  width: 30px;
  height: 20px;
  /* padding-top: 1px;
    padding-bottom: 1px;*/
  margin-left: -1px;
  transition: background-color 1s;
}
.dot {
}
#fp-nav .jpgs .simgs {
}
#fp-nav .jpgs .simgs img {
  width: 50px;
  height: 50px;
  margin-top: 5px;
  margin-left: -10px;
  border-radius: 50%;
  animation: myfirst 7s linear 0s infinite;
}
@keyframes myfirst {
  from {
    -webkit-transform: rotate(0deg);
  }
  to {
    -webkit-transform: rotate(360deg);
  }
}
#can {
  /*border: solid 1px red;*/
  height: 80px;
  width: 50px;
  margin-left: -10px;
}

/*第二页*/

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
/*第三页*/
.statistics {
  width: 46%;
}
.txts {
  background: rgba(20, 20, 20, 0.2);
  padding: 30px 0px;
  position: absolute;
  top: 13%;
  right: 10%;
  left: 55%;
  line-height: 30px;
  text-align: center;
  color: #fff;
  text-shadow: 5px 5px 5px rgba(250, 250, 250, 1);
}
#tuxing {
  /* 上三角 */
  /* width: 0px;
  height: 0px;
  border-bottom: solid 100px red;
  border-left: solid 50px transparent;
  border-right: solid 50px transparent; */
  /* 右三角 */
  /* width: 0px;
  height: 0px;
  border-bottom: solid 50px transparent;
  border-top: solid 50px transparent;
  border-right: solid 100px red; */
  /* 左上角 */
  /* width: 0;
  height: 0; */
  /* border-left: 100px solid red;
  border-bottom: 100px solid transparent; */
  /* border-top: 100px solid red;
  border-right: 100px solid transparent; */
  /* 梯形 */
  /* border-bottom: 100px solid red;
  border-left: 25px solid transparent;
  border-right: 25px solid transparent;
  height: 0;
  width: 100px; */
  /* 平行四边形 */
  /* width: 150px;
  height: 100px;
  transform: skew(20deg);
  background: red; */
}
#heart {
  width: 0;
  height: 0;
  border-left: 180px solid transparent;
  border-right: 180px solid transparent;
  border-top: 120px solid red;
  border-radius: 50%;
}
</style>
