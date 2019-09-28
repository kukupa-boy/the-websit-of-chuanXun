<!-- 搜索框组件 （基础，不可分）-->
<template>
  <div class="searchbox">
    <input type="text" :placeholder="hint">
    <i :class="classname" aria-hidden="true"></i>
  </div>
</template>

<script>

export default {
  name:"searchBox",
  data () {
    return {
    };
  },
  props:{
    hint:{default:'请输入信息'},
    classname:{default:'fa fa-search'}
  }
}


</script>

<style lang='less' scoped>
@placehoder-color:rgb(187, 187, 187);
@searchbox-height:30px;
.searchbox{
  display: flex;
  border-radius: 8px;
  line-height: @searchbox-height;
  height: @searchbox-height;
  padding: 0 4px 0 8px;
  background-color: #fff;
  min-width: 180px;
  max-width: 320px;
  >input{
    flex: 1;
    border: 0;
    outline: 0;
    height: @searchbox-height;
    color: rgb(121, 121, 121);
    &::-webkit-input-placeholder{
      color: @placehoder-color;
    }
  }
  >i{
    width: 20px;
    margin-top: 4px;
    margin-left: 6px;
    font-size: 20px;
    color: @placehoder-color;
    transition: 0.3s;
    &:hover{
      color:rgb(163, 163, 253);
      transform: rotate(10deg);
    }
  }
}
</style>
