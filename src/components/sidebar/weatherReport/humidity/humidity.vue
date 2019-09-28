<template>
  <div class="humidity">
    <!--这是温度-->
    <div class="right">
      <BrokenLineDiagram></BrokenLineDiagram>
      <AirTemperature></AirTemperature>
    </div>
  </div>
</template>

<script>
  import BrokenLineDiagram from "../../../common/common_t/BrokenLineDiagram.vue"
  import AirTemperature from "../../../common/common_t/AirTemperature.vue"
  export default {
    name: 'humidity',
    components:{
      BrokenLineDiagram,
      AirTemperature
    }
  }
</script>

<style scoped>
  .humidity{
    position: absolute;
    top: 32px;
    left: 225px;
    background-color: orange;
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
