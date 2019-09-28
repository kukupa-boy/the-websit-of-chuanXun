<template>
  <div class="nav">
    <div class="item-left">
      <span class="title">航线</span>
      <span class="title-spell">HUANGXIAN</span>
    </div>
    <div class="item-center">
      <div>
        <searchBox hint="请输入航线"></searchBox>
      </div>
    </div>
    <div class="item-right">
      <div class="btnbox">
        <div>
          <i class="fa fa-cog" aria-hidden="true"></i>
          <span>设置</span>
        </div>
        <div>
          <i class="fa fa-question-circle" aria-hidden="true"></i>
          <span>帮助</span>
        </div>
        <div>
          <i class="fa fa-bell-o" aria-hidden="true"></i>
          <span>消息</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import searchBox from '../common/common_l/searchBox'

  export default {
    name:"headerBar",
    data () {
      return {
      };
    },
    components: {
      searchBox:searchBox
    },
  }

</script>
<style lang='less' scoped>
  @nav-bgcolor:rgb(222, 222, 222);
  @nav-height: 60px;
  *{
    margin: 0;
    padding: 0
  }
  .nav{
    width: 100%;
    display: flex;
    display: -webkit-flex;
    height: @nav-height;
    line-height: @nav-height;
    background-color: @nav-bgcolor;
    >.item-left{
      width: 240px;
      padding-left: 30px;
      vertical-align: bottom;
      >.title{
        font-size: 28px;
      }
      >.title-spell{
        font-size: 14px;
        color: rgb(102, 102, 102);
      }
    }
    >.item-center{
      flex: 1;
      >div{
        display: inline-block;
        width: 100%;
      }

    }
    >.item-right{
      width: 300px;
      >.btnbox{
        width: 100%;
        display: flex;
        display: -webkit-flex;
        justify-content: space-around;
        >div{
          cursor: pointer;
          color:rgb(141, 141, 141);
          padding: 0 12px;
          >i{
            font-size: 22px;
          }
          >span{
            font-size: 16px;
          }
          &:hover{
            color:rgb(135, 135, 236);
            background-color: #fff;
          }
        }
      }
    }
  }
</style>
