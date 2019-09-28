<template>
  <div>

    <div class="tem_sun_moon_pre">
      <div class="tem_sun_moon">
        <!--温度ji-->
        <div class="temperature">
          <Thermometer></Thermometer>
        </div>
        <!--太阳-->
        <div class="sun">
          <div><span>2019/09/23</span> <span>白天</span></div>
          <div><img src="../../../../assets/weather_system/image/image_t/sun.png"></div>
          <h1>晴</h1>
          <p>50℃</p>
          <p>日出<span>6:</span><span>15</span> </p>
          <p>最高气温<span>50℃</span></p>
        </div>
        <!-- 夜晚-->
        <div class="moon">
          <div><span>2019/09/23</span> <span>白天</span></div>
          <div><img src="../../../../assets/weather_system/image/image_t/night_mode.png"></div>
          <h1>阴</h1>
          <p>50℃</p>
          <p>日出<span>6:</span><span>15</span> </p>
          <p>最高气温<span>50℃</span></p>
        </div>
      </div>
      <!-- 降水量-->
      <div class="precipitation">
        <BrokenLineDiagram type="Chart1"></BrokenLineDiagram>
      </div>
    </div>
  </div>
</template>

<script>
  import Thermometer from "../../../common/common_t/Thermometer.vue"
  import BrokenLineDiagram from "../../../common/common_t/BrokenLineDiagram.vue"
  export default {
    name: 'defualtComponnets',
    components:{
      Thermometer,
      BrokenLineDiagram
    }
  }
</script>

<style scoped>
  /*温度，sun，moon总体的布局*/
  .tem_sun_moon_pre{
    position: absolute;
    top: 32px;
    left: 225px;
  }
  .tem_sun_moon{
    height: 522px;
    overflow: hidden;
    width: 1316px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    align-content: center;
  }
  .tem_sun_moon>div{
    background-color: orange;
  }
  .temperature,.sun,.moon{
    width: 420px;
    height: 522px;
    background-color: #2364e4;
    border-radius:10px;
  }

  /* 降水量的排版*/
  .precipitation{
    height:328px;
    width: 1316px;
    border: 1px solid green;
    margin: 0 auto;
    margin-top: 38px;
    margin-bottom: 50px;
    background-color: blue;
    border-radius: 10px;
    position: relative;
  }

  /*SUNhemoon模块的颜色的渐变和里面的整体的布局*/
  .sun{
    height: 524px;
    background: -webkit-linear-gradient(rgb(234,235,218),rgb(235,208,208)); /* Safari 5.1 - 6.0 */
    background: -o-linear-gradient(rgb(234,235,218),rgb(235,208,208)); /* Opera 11.1 - 12.0 */
    background: -moz-linear-gradient(rgb(234,235,218),rgb(235,208,208)); /* Firefox 3.6 - 15 */
    background: linear-gradient(rgb(234,235,218),rgb(235,208,208)); /* 标准的语法 */
  }
  .moon{
    height: 524px;
    background: -webkit-linear-gradient(rgb(187,201,229),rgb(217,223,235)); /* Safari 5.1 - 6.0 */
    background: -o-linear-gradient(rgb(187,201,229),rgb(217,223,235)); /* Opera 11.1 - 12.0 */
    background: -moz-linear-gradient(rgb(187,201,229),rgb(217,223,235)); /* Firefox 3.6 - 15 */
    background: linear-gradient(rgb(187,201,229),rgb(217,223,235)); /* 标准的语法 */
  }
  .sun>div:nth-of-type(1),.moon>div:nth-of-type(1){
    margin-left: 28px;
    margin-top: 20px;
    font-weight: 300;
  }
  .sun>div:nth-of-type(1) span:nth-of-type(2),.moon>div:nth-of-type(1) span:nth-of-type(2){
    margin-left:38px;
  }
  .sun>div:nth-of-type(2),.moon>div:nth-of-type(2){
    width: 100%;
    text-align: center;
    margin-top: 60px;
  }
  .sun>h1,.moon>h1{
    text-align: center;
    margin-top: 10px;
    font-size: 22px;
    font-weight: 400;
  }
  .sun>p:nth-of-type(1),.moon>p:nth-of-type(1){
    width: 100%;
    font-size:40px;
    color: rgb(240,27,52);
    font-family: "Microsoft YaHei";
    text-align: center;
    margin-top: 50px;
  }
  .sun>p:nth-of-type(2),.sun>p:nth-of-type(3),.moon>p:nth-of-type(2),.moon>p:nth-of-type(3){
    overflow: hidden;
    margin-top: 30px;
    font-size: 16px;
    padding-left:160px;
    color: rgb(36,36,36);
  }
  .sun>p:nth-of-type(2)>span,.sun>p:nth-of-type(3)>span,.moon>p:nth-of-type(2)>span,.moon>p:nth-of-type(3)>span{
    display: inline-block;
    padding-left: 16px;
  }
</style>
