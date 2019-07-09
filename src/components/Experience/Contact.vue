<template>
  <div>
    <div style="text-align: center;line-height: 30px; width: 100%">
      <h2 style="margin-bottom: 10px">联系我</h2>
      <span style="color:#FF0000; font-weight: bolder; font-size: 20px; margin: 10px">灵感</span>
      <span style="color:#33CCFF; font-weight: bolder; font-size: 20px;margin: 10px">代码</span>
      <span style="color:#83C800; font-weight: bolder; font-size: 20px;margin: 10px">梦想</span>
      <span style="color:#FF6633; font-weight: bolder; font-size: 20px;margin: 10px">未来</span>
      <p>注重效率，偏爱敏捷开发</p>
      <p>喜欢尝试，期待新鲜事物</p>
      <p>技术即兴趣，兴趣即未来</p>
      <p>行路有良友，便是捷径</p>
      <p>带上我吧，一起看到更大的世界</p>
      <div class="touch">
        <ul>
          <li>
            <el-popover
              placement="top-start"
              width="200"
              height="200"
              trigger="hover"
              slot="reference"
              content
            >
              <img style="width: 200px;height: 200px" src="../../assets/images/weixin.jpg">
              <el-button
                style="border:solid 1px #000; border-radius: 50%;padding: 0;background: url(http://cnd.yinglingxuan.cn/1226626.png) 3px no-repeat;background-size:90%;"
                slot="reference"
              >
                <div style="width: 40px;height: 40px;"></div>
              </el-button>
            </el-popover>
          </li>
          <li>
            <el-popover
              placement="top-start"
              width="200"
              height="200"
              trigger="hover"
              slot="reference"
              content
            >
              <img style="width: 200px;height: 200px" src="../../assets/images/qq.jpg">
              <el-button
                style="border:solid 1px #000; border-radius: 50%;padding: 0;background: url(http://cnd.yinglingxuan.cn/1188698.png) 2px no-repeat;background-size:90%;"
                slot="reference"
              >
                <div style="width: 40px;height: 40px;"></div>
              </el-button>
            </el-popover>
          </li>
          <li>
            <!-- ../../assets/images/qq.jpg -->
            <el-popover
              placement="top-start"
              width="200"
              height="200"
              trigger="hover"
              slot="reference"
              content="406563314@qq.com"
            >
              <el-button
                style="border:solid 1px #000; border-radius: 50%;padding: 0;background: url(http://cnd.yinglingxuan.cn/22577.png) 4px no-repeat;background-size:80%;"
                slot="reference"
              >
                <div style="width: 40px;height: 40px;"></div>
              </el-button>
            </el-popover>
          </li>
          <li>
            <el-popover
              placement="top-start"
              width="200"
              height="200"
              trigger="hover"
              slot="reference"
              content="15018373963"
            >
              <el-button
                style="border:solid 1px #000; border-radius: 50%;padding: 0;background: url(http://cnd.yinglingxuan.cn/1172981.png) 7px no-repeat;background-size:60%;"
                slot="reference"
              >
                <div style="width: 40px;height: 40px;"></div>
              </el-button>
            </el-popover>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Contact"
};
</script>

<style scoped>
.touch {
}
.touch ul {
  width: 280px;
  /*border: solid 1px red;*/
  margin: auto;
  margin-top: 20px;
  clear: both;
}
.touch li {
  list-style-type: none;
  float: left;
  margin: 0px 10px;
}
</style>
