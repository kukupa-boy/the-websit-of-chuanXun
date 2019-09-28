<template>
  <div class="precipitation">
    <div class="precipitation_innerBox">
      <div class="precipitation_chart" id="precipitation_chart">

      </div>
      <div class="precipitation_sum" id="precipitation_sum">

      </div>
    </div>
    <div>

    </div>
  </div>
</template>

<script>
  // 引入基本模板
  let echarts = require('echarts');
  // 引入柱状图组件
  require('echarts/lib/chart/bar');
  // 引入提示框和title组件
  require('echarts/lib/component/tooltip');
  require('echarts/lib/component/title');
  export default {
    name: 'precipitation',
    data:()=>{
      return{
        msg: 'Welcome to Your Vue.js App'
      }
    },
    mounted(){
      this.drawLine();
      this.drawLine1();
    },
    methods:{
      drawLine(){
        // 基于准备好的dom，初始化echarts实例
        let myChart = this.$echarts.init(document.getElementById('precipitation_chart'));
        // 绘制图表
        myChart.setOption({
          title: {
            text: '降雨量分布图',
            subtext: '降雨量分布图'
          },
          tooltip: {
            trigger: 'axis'
          },
          legend: {
            data:['最高','最低']
          },
          toolbox: {
            show: true,
            feature: {
                dataZoom: {
                yAxisIndex: 'none'
              },
              dataView: {readOnly: false},
              magicType: {type: ['line', 'bar']},
              restore: {},
              saveAsImage: {}
            }
          },
          xAxis:  {
            type: 'category',
            boundaryGap: false,
            data: ['2019-02-25','2019-03-04','2019-03-18','2019-03-26','2019-04-16','2019-04-26','2019-05-04']
          },
          yAxis: {
            type: 'value',
            axisLabel: {
              formatter: '{value}'
            }
          },
          series: [
            {
              name:'最高',
              type:'line',
              data:[11, 11, 15, 13, 12, 13, 10],
              markPoint: {
                data: [
                  {type: 'max', name: '最大值'},
                  {type: 'min', name: '最小值'}
                ]
              },
              markLine: {
                data: [
                  {type: 'average', name: '平均值'}
                ]
              }
            },
            {
              name:'最低',
              type:'line',
              data:[1, -2, 2, 5, 3, 2, 0],
              markPoint: {
                data: [
                  {name: '周最低', value: 2, xAxis: 1, yAxis: 1.5}
                ]
              },
              markLine: {
                data: [
                  {type: 'average', name: '平均值'},
                  [{
                    symbol: 'none',
                    x: '90%',
                    yAxis: 'max'
                  }, {
                    symbol: 'circle',
                    label: {
                      normal: {
                        position: 'start',
                        formatter: '最大值'
                      }
                    },
                    type: 'max',
                    name: '最高点'
                  }]
                ]
              }
            }
          ]
        })
      },
      drawLine1(){
        // 基于准备好的dom，初始化echarts实例
        let myChart = this.$echarts.init(document.getElementById('precipitation_sum'));
        // 绘制图表
        myChart.setOption({
          title: {
            text: '降雨量分布图',
            subtext: '降雨量分布图'
          },
          tooltip: {
            trigger: 'axis'
          },
          legend: {
            data:['最高','最低']
          },
          toolbox: {
            show: true,
            feature: {
              dataZoom: {
                yAxisIndex: 'none'
              },
              dataView: {readOnly: false},
              magicType: {type: ['line', 'bar']},
              restore: {},
              saveAsImage: {}
            }
          },
          xAxis:  {
            type: 'category',
            boundaryGap: false,
            data: ['2019-02-25','2019-03-04','2019-03-18','2019-03-26','2019-04-16','2019-04-26','2019-05-04']
          },
          yAxis: {
            type: 'value',
            axisLabel: {
              formatter: '{value}'
            }
          },
          series: [
            {
              name:'最高',
              type:'line',
              data:[11, 11, 15, 13, 12, 13, 10],
              markPoint: {
                data: [
                  {type: 'max', name: '最大值'},
                  {type: 'min', name: '最小值'}
                ]
              },
              markLine: {
                data: [
                  {type: 'average', name: '平均值'}
                ]
              }
            },
            {
              name:'最低',
              type:'line',
              data:[1, -2, 2, 5, 3, 2, 0],
              markPoint: {
                data: [
                  {name: '周最低', value: 2, xAxis: 1, yAxis: 1.5}
                ]
              },
              markLine: {
                data: [
                  {type: 'average', name: '平均值'},
                  [{
                    symbol: 'none',
                    x: '90%',
                    yAxis: 'max'
                  }, {
                    symbol: 'circle',
                    label: {
                      normal: {
                        position: 'start',
                        formatter: '最大值'
                      }
                    },
                    type: 'max',
                    name: '最高点'
                  }]
                ]
              }
            }
          ]
        })
      }

     }
  }
</script>

<style scoped>
  .precipitation{
    position: absolute;
    top: 32px;
    left: 225px;
    background-color: rgb(231,231,231);
    border-radius:10px ;
    width: 1316px;
    /*height: 522px;*/
    /*width: 100%;*/
    height: 832px;
}
.precipitation_innerBox{
  margin-top: 40px;
  margin-left: 20px;
  margin-right: 20px;
  margin-bottom: 55px;
}
.precipitation_chart{
  border: 1px solid green;
  margin-bottom: 35px;
  width:1274px;
  height: 320px;
}
  .precipitation_sum{
    border: 1px solid red;
    height: 385px;
    width: 1274px;
  }
</style>
