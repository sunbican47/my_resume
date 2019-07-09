<template>
  <div class="proTitle">
    <ul>
      <h1 style="text-align: center;padding-bottom: 40px">作品集</h1>
      <li>
        <h2>机器人聊天</h2>
        <p>可通过@机器人实现机器人回复功能
          <br>和双击用户id和实现私聊功能
          <br>拖拽图片发送
          <br>
          <a href="http://shendaren.yinglingxuan.cn:40/">点击前往</a>
        </p>
      </li>
      <li>
        <h2>简单俄罗斯方块</h2>
        <p>通过电脑上下左右键控制方块
          <br>通过空格快速下降
          <br>方块凑齐一整行消除
          <br>
          <a href="http://sunbican.cn/game">点击前往</a>
          <!-- <a
            href="http://lin.yinglingxuan.cn/%E4%BF%84%E7%BD%97%E6%96%AF%E6%96%B9%E5%9D%97.html"
          >点击前往</a>-->
        </p>
      </li>
      <li>
        <h2>音视频播放器</h2>
        <p>点击播放对应的歌曲
          <br>播放对应的音波图
          <br>点击旋转的图片显示歌词
          <br>点击切换视频播放器
          <br>
          <a href="http://sunbican.cn/music">点击前往</a>
          <!-- <a href="http://lin.yinglingxuan.cn/%E9%9F%B3%E4%B9%90%E6%92%AD%E6%94%BE%E5%99%A83.html">点击前往</a> -->
        </p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Production",
  mounted() {
    //浮动的闪烁
    var count = 0;
    setInterval(function() {
      count++;
      if (count % 2 == 0) {
        count = 0;
        $(".proTitle ul").css({ top: "15%" });
        return;
      }
      $(".proTitle ul").css({ top: "20%" });
    }, 1500);

    $(".proTitle ul li").mouseenter(function() {
      $(this).css({
        border: "solid 2px red",
        background: "rgba(252,3,46,0.2)"
      });
    });

    // 鼠标移开
    $(".proTitle ul li").mouseleave(function() {
      $(this).css({
        border: "solid 2px #2CD3FC",
        background: "rgba(44,211,252,0.2)"
      });
    });
  }
};
</script>

<style scoped>
* {
  padding: 0;
  margin: 0;
}
.proTitle ul {
  clear: both;
  /*border: solid 1px red;*/
  width: 64%;
  position: absolute;
  left: 20%;
  right: 13%;
  top: 20%;
  transition: top 2s;
  color: #fff;
}
.proTitle ul a {
  color: red;
}
.proTitle ul li {
  padding-top: 20px;
  float: left;
  list-style-type: none;
  width: 30%;
  height: 240px;
  text-align: center;
  line-height: 35px;
  border: solid 2px #2cd3fc;
  margin: 0 1%;
  margin-bottom: 30px;
  transition: border, background 2s;
  /*text-shadow: 5px 5px 5px rgba(250,250,250,1);*/
  background: rgba(44, 211, 252, 0.2);
}
</style>
