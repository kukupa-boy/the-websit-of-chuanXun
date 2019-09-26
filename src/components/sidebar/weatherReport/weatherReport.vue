<template>
  <div id="wetherReporter">
    <!--侧边导航栏-->
      <div class="functionControl">
      <div class="functionControl_bigBox">
        <div class="smallfunction">
          <router-link to="/sidebar/weatherReport/temperature">气温</router-link>
        </div>
        <div class="smallfunction">
          <router-link to="/sidebar/weatherReport/humidity">湿度</router-link>
        </div>
        <div class="smallfunction">
          <router-link to="/sidebar/weatherReport/precipitation">降水量</router-link>
        </div>
        <div class="smallfunction">
          <router-link to="/sidebar/weatherReport/windDirection">风向</router-link>
        </div>
        <div class="smallfunction">
          <router-link to="/sidebar/weatherReport/visibility">能见度</router-link>
        </div>
        <div class="smallfunction">
          <router-link to="/sidebar/weatherReport/thunder">雷电</router-link>
        </div>
        <div class="smallfunction">
          <router-link to="/weatherReport/airPressure">气压</router-link>
        </div>
        <div class="smallfunction">
          <router-link to="/weatherReport/haze">雾霾</router-link>
        </div>
        <div class="smallfunction">
          <router-link to="/sidebar/weatherReport/waveHeight">浪高</router-link>
        </div>
      </div>
      <div class="functionControl_smallBox">
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>
<script>
  export default {
    name: 'wetherReport',
    data(){
      return {
        //这个是默认的路由的地址,当进行点击的时候，用户，就可以进行切换路由
        routerData:"/weatherReport/defaultComponents"
      }
    }
  }
</script>

<style scoped>
  #wetherReporter{
    width: 1670px;
    height:1233px;
    position: fixed;
    top: 60px;
    left: 250px;
  }
  /* functionControl */
  #wetherReporter .functionControl{
    height: 860px;
    width: 64px;
    position: fixed;
    top: 92px;
    left: 370px;
    z-index: 99;
  }
  .functionControl_bigBox{
    height: 832px;
    width: 64px;
    background-color:rgb(222,222,222);
    border-radius: 6px;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    flex-wrap: nowrap;
    align-items: center;
  }
  .functionControl_smallBox{
    height:22px;
    width: 65px;
    margin-top:6px;
    background-color:rgb(222,222,222);
    border-radius: 8px;
  }
  .smallfunction{
    height: 70px;
    line-height:70px;
    background-color: #2364e4;
  }
  .smallfunction a{
    text-align: center;
    display: block;
    width: 65px;
    height: 100%;
    text-decoration: none;
  }
</style>
