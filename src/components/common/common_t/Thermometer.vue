<template>
    <div>
      <div class="thermometer gradient">
        <!--这是时间-->
        <div>
          <span>2018/01/30</span>
          <span class="time">13:50实况</span>
        </div>
        <!--这是中间的部分-->
        <div class="middle">
          <div>
            <div class="centigrade-num">
              <ul>
                <li>50</li>
                <li>25</li>
                <li>0</li>
                <li>-25</li>
              </ul>
            </div>
            <img class="middle-img" src="../../../assets/weather_system/image/image_t/thermometer.png" alt="">
            <span class="centigrade">℃</span>
          </div>
          <div class="centigrade1">
            <span>50℃</span>
          </div>
        </div>
        <!--这是下边部分-->
        <div class="bottom">
          <ul class="bottom-left">
            <li>
              <span>相对湿度</span>
              <span class="green">56.6%</span>
            </li>
            <li>
              <span>风向</span>
              <span class="yellow">北风&nbsp;&nbsp;1级</span>
            </li>
          </ul>
          <ul class="bottom-right">
            <li>
              <span>降水量</span>
              <span class="blue">0~4mm</span>
            </li>
            <li>
              <span>能见度</span>
              <!--<span>降水量</span>-->
            </li>
          </ul>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "thermometer"
    }
</script>

<style scoped>
  .thermometer{
  width: 420px;
  height: 520px;
  border-radius: 10px;
  padding: 30px;
  position: relative;
    box-sizing: border-box;
}
  .gradient{
  background: -moz-linear-gradient(top, rgb(238,216,231) 0%, rgb(238,232,211) 100%);
  background: -webkit-gradient(linear, left top, left bottom, color-stop(0%, rgb(238,216,231)), color-stop(100%,rgb(238,232,211)));
  background: -webkit-linear-gradient(top,  rgb(238,216,231) 0%,rgb(238,232,211) 100%);
  background: -o-linear-gradient(top,  rgb(238,216,231) 0%,rgb(238,232,211) 100%);
  background: -ms-linear-gradient(top,  rgb(238,216,231) 0%,rgb(238,232,211) 100%);
  background: linear-gradient(to bottom,  rgb(238,216,231) 0%,rgb(238,232,211) 100%);
}
  .time{
    margin-left: 20px;
  }

  /*这是中间*/
  .middle{
    width: 300px;
    height: 420px;
    /*border: 1px solid red;*/
    position: absolute;
    left: 60px;
    top: 100px;
  }
  .middle > :nth-child(1){
    width: 120px;
    height: 320px;
    /*border: 1px solid black;*/
    position: absolute;
  }
  .centigrade-num{
    position: absolute;
    top: 48px;
    left: 0px;
    text-align: right;
  }
  .centigrade-num >ul >li{
    margin-bottom: 25px;
  }
  .middle-img{
    position: absolute;
    left: 28px;
    top: 0;
  }
  .centigrade{
    position: absolute;
    top: 0px;
    right: 0px;
  }
  .centigrade1{
    position: absolute;
    top: 0;
    right: 0;
    height: 320px;
    color: red;
    line-height: 320px;
    margin-left: 100px;
    font-size: 50px;
  }

  /*这是底部*/
  .bottom{
    width: 420px;
    height: 100px;
    position: absolute;
    bottom: 0px;
    left: 20px;
  }
  .bottom > ul > li >:nth-child(1){
    margin-right: 20px;
  }
  .bottom > ul > li{
    margin-bottom: 30px;
  }
  ul li{
    list-style: none;
  }
  .bottom-left{
    position: absolute;
    left: 0px;
    top: 0px;
  }
  .bottom-right{
  position: absolute;
  right: 50px;
  top: 0px;
}
  .green{
    color: #5db446;
  }
  .blue{
    color: #40a6e7;
  }
  .yellow{
    color: #e88b2f;
  }
</style>
