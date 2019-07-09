<template>
  <div class="skill-title" v-bind:style="{height:heigths+'px'}" id="skill">
    <div id="main" style="width: 80%;height:500px;"></div>
  </div>
</template>

<script>
export default {
  name: "Skill",
  data() {
    return {
      heigths: "",
      styles: ""
    };
  },
  created() {
    //获取到当前浏览器的高度
    this.heigths = window.screen.availHeight - 20;
    this.$store.state.sizes = 3;
    setTimeout(function() {
      // 基于准备好的dom，初始化echarts实例
      var myChart = echarts.init(document.getElementById("main"));
      // 指定图表的配置项和数据
      var option = {
        title: {
          text: "技能栈",
          textStyle: {
            color: "#fff",
            fontSize: "35"
          },
          x: "center"
        },
        legend: {
          x: "center",
          y: "bottom",
          data: [
            "rose1",
            "rose2",
            "rose3",
            "rose4",
            "rose5",
            "rose6",
            "rose7",
            "rose8"
          ]
        },
        calculable: true,
        series: [
          {
            name: "半径模式",
            type: "pie",
            radius: [70, 150],
            center: ["30%", "50%"],
            roseType: "radius",
            label: {
              normal: {
                show: false
              },
              emphasis: {
                show: true
              }
            },
            lableLine: {
              normal: {
                show: false
              },
              emphasis: {
                show: true
              }
            },
            data: [
              { value: 500, name: "JAVA", itemStyle: { color: "#2CFF00" } },
              { value: 400, name: "Spring Boot" },
              {
                value: 300,
                name: "Spring MVC",
                itemStyle: { color: "#1AF7DE" }
              },
              { value: 400, name: "MyBatis", itemStyle: { color: "#F0FF00" } },
              { value: 600, name: "Vue", itemStyle: { color: "#1739F0" } },
              { value: 550, name: "JQuery", itemStyle: { color: "#BFF017" } },
              {
                value: 500,
                name: "JavaScript",
                itemStyle: { color: "#F06417" }
              },
              { value: 540, name: "LayUI", itemStyle: { color: "#F0FF00" } },
              {
                value: 580,
                name: "ElementUI",
                itemStyle: { color: "#F0FF00" }
              },
              { value: 600, name: "LayUI", itemStyle: { color: "#F0FF00" } },
              { value: 200, name: "Redis", itemStyle: { color: "#FC21DE" } },
              { value: 300, name: "Linux", itemStyle: { color: "red" } }
            ]
          },
          {
            name: "面积模式",
            type: "pie",
            radius: [70, 150],
            center: ["75%", "50%"],
            roseType: "area",
            data: [
              { value: 500, name: "JAVA", itemStyle: { color: "#2CFF00" } },
              { value: 400, name: "Spring Boot" },
              {
                value: 300,
                name: "Spring MVC",
                itemStyle: { color: "#1AF7DE" }
              },
              { value: 400, name: "MyBatis", itemStyle: { color: "#F0FF00" } },
              { value: 600, name: "Vue", itemStyle: { color: "#1739F0" } },
              { value: 550, name: "JQuery", itemStyle: { color: "#BFF017" } },
              {
                value: 500,
                name: "JavaScript",
                itemStyle: { color: "#F06417" }
              },
              { value: 540, name: "LayUI", itemStyle: { color: "#F0FF00" } },
              {
                value: 580,
                name: "ElementUI",
                itemStyle: { color: "#F0FF00" }
              },
              { value: 600, name: "LayUI", itemStyle: { color: "#F0FF00" } },
              { value: 200, name: "Redis", itemStyle: { color: "#FC21DE" } },
              { value: 300, name: "Linux", itemStyle: { color: "red" } }
            ]
          }
        ]
      };
      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option);
    }, 600);
  },
  mounted() {}
};
</script>

<style scoped>
* {
  padding: 0px;
  margin: 0px;
}
.skill-title {
  width: 100%;
  background: url("http://cnd.yinglingxuan.cn/5.jpg") no-repeat;
  background-size: 100%;
  padding-top: 100px;
}
#main {
  /*border: solid 1px red;*/
  margin: auto;
}
</style>
