<template>
  <div class="temperature">
    <!--这是气温-->
    <div class="right">
      <BrokenLineDiagram :toSonData="toSonData"></BrokenLineDiagram>
      <AirTemperature></AirTemperature>
    </div>
  </div>
</template>

<script>
  import BrokenLineDiagram from "../../../common/common_t/BrokenLineDiagram.vue"
  import AirTemperature from "../../../common/common_t/AirTemperature.vue"
  export default {
    name: 'temperatrue',
    components:{
      BrokenLineDiagram,
      AirTemperature
    },
    data (){
      return{
        toSonData:'temperature',//给子组件的值
      }
    },
    methods:{

    }
  }
</script>

<style scoped>
  .temperature{
    position: absolute;
    top: 32px;
    left: 225px;
    background-color: white;
    /*width: 1316px;*/
    /*height: 522px;*/
    width: 100%;
    height: 100%;
  }
  .right{
    position: relative;
    width: 1220px;
    height: 765px;
    background-color: rgb(232,232,232);
    padding: 20px 20px;
    box-sizing: border-box;
  }
</style>
