<template>
  <div ref="echarts" :class="type == 'Chart'?'Chart':'Chart1'"></div>
</template>

<script>
    export default {
        name: 'broken-line-diagram',
        props:{
          type:{
            type:String,
            default:"Chart"
          },
          toSonData: {
            type: String,
            default: function () {
              return ""
            }
          }
        },
      mounted () {
        this.drawLine()
      },
      methods: {
        drawLine () {
          let b;
          // console.log(a);
          console.log(this.toSonData);
          if(this.type == 'Chart1'){
            b = '3%';
          }else {
            b = '1%';
            // console.log(b);
          }

          // 基于准备好的dom，初始化echarts实例
          let myChart = this.$echarts.init(this.$refs.echarts);
          //option
         let option = {
            title: {
              text: '',
              subtext: ''
            },
           grid: {
             left: '6%',
             right: b,//chart  1  chart1   3
             containlabel: true
           },
            tooltip: {
              trigger: 'axis'
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
            xAxis: {
              type: 'category',
              boundaryGap: false,
              data: ['0:00','2:00', '4:00', '6:00', '8:00', '10:00', '12:00', '14:00', '16:00', '18:00', '20:00', '22:00'],
              axisTick: {//坐标轴刻度相关设置。
                show: false
              },
              axisLine: { //坐标轴轴线相关设置。
                show: true,
                lineStyle: {//设置粗细和颜色
                  color:' rgb(154, 154, 154)',
                  width:2,//这里是为了突出显示加上的
                }
              },
              axisLabel:{ //调整x轴的lable
                textStyle:{
                  fontSize:16 // 让字体变大
                }
              },
              splitLine: { //坐标轴在 grid 区域中的分隔线
                show: false
              },
            },
            yAxis: {
              type: 'value',
              axisLabel: {
                formatter: '{value} °C',
                fontSize:16
              },
              axisTick: {//坐标轴刻度相关设置。
                show: false
              },
              axisLine: { //坐标轴轴线相关设置。
                show: true,
                lineStyle: {//设置轴线颜色和粗细
                  color:' rgb(154, 154, 154)',
                  width:2,//这里是为了突出显示加上的
                }
              },
              splitLine: { //坐标轴在 grid 区域中的分隔线
                show: false
              },
            },
            series: [
              {
                name: '最高气温',
                type: 'line',
                symbol: 'circle',     //设定为实心点
                symbolSize: 15,
                itemStyle : {
                  normal : {
                  label : {
                    show: true,
                    // position: 'bottom', //设置折点处文字显示位置
                    formatter: '{c}℃'
                  },
                    color: 'rgb(109,148,226)',
                    lineStyle: {
                      color: 'rgb(185,185,185)',
                      width: 4
                    }
                  }
                },
                data: [11, 11, 15, 13, 12, 13, 10, 50, 30, 50, 21, 22]
              }
            ],
            backgroundColor: 'rgb(232, 232, 232)'
          };
          // 绘制图表
          myChart.setOption(option);
        }
      }
    }
</script>

<style scoped>
.Chart{
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 10px;
  width: 1180px;
  height: 360px;
}
.Chart1{
  position: absolute;
  border-radius: 10px;
  top: 0;
  left: 0;
  width: 1316px;
  height: 328px;
}
</style>
