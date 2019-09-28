<template>
  <!--这是气温-->
    <div class="AirTemperature">
      <div class="left iconfont" @click="upper">&#xe647;</div>
      <div class="timer-slot">
        <ul>
          <li v-for="(item,i) in list" :key="i">
            <div><img class="img" v-bind:src="item.url" alt=""></div>
            <div class="border">{{item.Centigrade}}℃</div>
            <div>{{item.time}}</div>
          </li>
        </ul>
      </div>
      <div class="right iconfont" @click="lower">&#xe666;</div>
    </div>
</template>

<script>
    export default {
        name: "air-temperature",
        data(){
          return {
            list:[
              {url:require("../../../assets/weather_system/image/image_t/temperature.png"), name:'气温',Centigrade:'38',time:'0:00'},
            ],
          }
        },
      computed: {
          // li默认显示哪个时间段
      },
      mounted(){
        let arr = this.list;
        for (let i=0;i<3;i++){
          let a=arr.shift();
          arr.push(a);
        }
      },
      methods:{
        lower(){
          let a=this.list.shift();
          this.list.push(a);
        },
        upper(){
          let a=this.list.pop();
          this.list.unshift(a);
        },
      },
    }
</script>

<style scoped>
.AirTemperature{
  width: 1180px;
  height: 360px;
  border-radius: 10px;
  border:1px solid rgb(248,248,248);
  background-color: rgb(248,248,248);
  box-sizing: border-box;
  padding: 20px;
  position: absolute;
  left: 20px;
  bottom: 50px;
}
@font-face {
  font-family: 'iconfont';
  src: url('../../../assets/weather_system/iconfont/iconfont_t/iconfont.eot');
  src: url('../../../assets/weather_system/iconfont/iconfont_t/iconfont.eot?#iefix') format('embedded-opentype'),
  url('../../../assets/weather_system/iconfont/iconfont_t/iconfont.woff2') format('woff2'),
  url('../../../assets/weather_system/iconfont/iconfont_t/iconfont.woff') format('woff'),
  url('../../../assets/weather_system/iconfont/iconfont_t/iconfont.ttf') format('truetype'),
  url('../../../assets/weather_system/iconfont/iconfont_t/iconfont.svg#iconfont') format('svg');
}
.iconfont{
  font-family: "iconfont" !important;
  font-size: 36px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
  .left{
    position: absolute;
    left: 20px;
    top: 160px;
    z-index: 999;
    cursor: pointer;
    color: rgb(103,103,103);
    /*border: 1px solid red;*/
  }
  .img{
    width: 80px;
    height: 80px;
  }
.timer-slot{
  width: 1135px;
  height: 280px;
  overflow: hidden;
  position: absolute;
  left: 25px;
  top: 40px;
  /*border: 1px solid red;*/
}
.timer-slot >ul{
  width: 3000px;
  height: 280px;
}
.timer-slot >ul >li{
  float: left;
  overflow: hidden;
  width: 100px;
  /*border: 1px solid red;*/
  box-sizing: border-box;
  margin:0  30px;
}
/*.border{*/
  /*border:1px solid aliceblue;*/
/*}*/
.timer-slot >ul >li>:nth-child(2){
   color: rgb(192,221,255);
}
.timer-slot >ul >li >:nth-child(1){
  margin-top: 20px;
}
.timer-slot >ul >li >*{
  width: 100%;
  height: auto;
  font-size: 20px;
  margin: 30px 0;
  clear: left;
  float: left;
  text-align: center;
}
.right{
  position: absolute;
  right: 20px;
  top: 160px;
  color: rgb(103,103,103);
  cursor: pointer;
  /*border: 1px solid red;*/
}
</style>
