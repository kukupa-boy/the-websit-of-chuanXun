<template>
  <div>
    <ul ref="h" id="h" class="meteorological">
      <li v-for="(item) in list">
        <img class="meteorologicalFont" v-bind:src="item.url" alt="">
        <div>{{item.name}}</div>
      </li>
    </ul>
    <div class="retract" @click="shrink">123</div>
  </div>
</template>

<script>
    export default {
        name: "meteorological-type",
        data(){
          return{
            list:[
              {url:require("../../../assets/weather_system/image/image_t/temperature.png"), name:'气温'},
              {url:require("../../../assets/weather_system/image/image_t/temperature.png"), name:'气温1'},
              {url:require("../../../assets/weather_system/image/image_t/temperature.png"), name:'气温2'},
              {url:require("../../../assets/weather_system/image/image_t/temperature.png"), name:'气温3'},
              {url:require("../../../assets/weather_system/image/image_t/temperature.png"), name:'气温4'},
              ],
          }
        },
      methods:{
        shrink(){
          let a=parseInt(window.getComputedStyle(this.$refs.h).height);
          console.log(a);
          let d=this.list.length;
          console.log(d);
          // let tt = document.body.clientHeight || document.documentElement.clientHeight;
          let b=85;
          d=b*5;
          if(a >= d){
            let c = a > b ? b :a;
            this.$refs.h.style.height = c + 'px';
          }else {
            this.$refs.h.style.height = d + 'px';
          }
        }
      }
    }
</script>

<style scoped>
  ul li{
    list-style: none;
    margin-top: 20px;
  }
  .meteorological{
    width: 60px;
    background-color: rgb(222,222,222);
    text-align: center;
    padding-left: 0px;
    padding-bottom: 20px;
    /*border: 1px solid rgb(222,222,222);*/
    border-radius: 5px;
    overflow: hidden;
  }
  .meteorologicalFont{
    width: 40px;
    height: 40px;
  }
  .retract{
    width: 64px;
    height: 22px;
    text-align: center;
    line-height: 22px;
    background-color: rgb(222,222,222);
    border-radius: 11px;
    margin-top: 6px;
  }
</style>
