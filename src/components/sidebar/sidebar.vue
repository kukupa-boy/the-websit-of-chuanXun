<template>
    <div id="sidebar">
        <div class="zhanWeiBox"></div>
        <el-row class="tac">
          <el-col :span="24">
            <el-menu
              default-active="2"
              class="el-menu-vertical-demo"
              @open="handleOpen"
              @close="handleClose"
              background-color="rgb(232,232,232)"
              text-color="rgb(36,36,36)"
              active-text-color="#2364e4">
              <el-menu-item index="1">
                <i  style="height: 30px; width: 25px;" class="el-icon-menu iconSize"></i>
<!--                <span slot="sidebar/wetherReport">     </span>-->
                   <router-link to="/weatherReport/defaultComponents">气象报告</router-link>
              </el-menu-item>
              <el-submenu index="2">
                <template slot="title">
                  <i class="el-icon-location"></i>
                  <span>视频监控</span>
                </template>
                <el-menu-item-group>
                  <template slot="title">分组一</template>
                  <el-menu-item index="1-1">选项1</el-menu-item>
                  <el-menu-item index="1-2">选项2</el-menu-item>
                </el-menu-item-group>
                <el-menu-item-group title="分组2">
                  <el-menu-item index="1-3">选项3</el-menu-item>
                </el-menu-item-group>
                <el-submenu index="1-4">
                  <template slot="title">选项4</template>
                  <el-menu-item index="1-4-1">选项1</el-menu-item>
                </el-submenu>
              </el-submenu>
              <el-submenu index="3">
                <template slot="title">
                  <i class="el-icon-location iconSize"></i>
                  <span>船舶管理</span>
                </template>
                <el-menu-item-group>
                  <template slot="title">分组一</template>
                  <el-menu-item index="1-1">选项1</el-menu-item>
                  <el-menu-item index="1-2">选项2</el-menu-item>
                </el-menu-item-group>
                <el-menu-item-group title="分组2">
                  <el-menu-item index="1-3">选项3</el-menu-item>
                </el-menu-item-group>
                <el-submenu index="1-4">
                  <template slot="title">选项4</template>
                  <el-menu-item index="1-4-1">选项1</el-menu-item>
                </el-submenu>
              </el-submenu>
              <el-submenu index="4">
                <template slot="title">
                  <i class="el-icon-location iconSize"></i>
                  <span>权限管理</span>
                </template>
                <el-menu-item-group>
                  <template slot="title">分组一</template>
                  <el-menu-item index="1-1">选项1</el-menu-item>
                  <el-menu-item index="1-2">选项2</el-menu-item>
                </el-menu-item-group>
                <el-menu-item-group title="分组2">
                  <el-menu-item index="1-3">选项3</el-menu-item>
                </el-menu-item-group>
                <el-submenu index="1-4">
                  <template slot="title">选项4</template>
                  <el-menu-item index="1-4-1">选项1</el-menu-item>
                </el-submenu>
              </el-submenu>
            </el-menu>
          </el-col>
      </el-row>
    </div>
</template>

<script>
  export default {
    name: 'sidebar',
    data(){
      return {

     }
    },
    created(){
    // 当元素加载成功的时候，进行元素的伪类元素的替换
      $('.el-icon-location').addClass('green');
      console.log($('.el-submenu__icon-arrow'))
    },
    methods: {
        handleOpen(key, keyPath) {
          console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
          console.log(key, keyPath);
        }
    }
  }
</script>

<style scoped>
  /*侧边栏的样式的修改*/
  #sidebar{
    position: fixed;
    top:60px;
    left: 0;
    background-color: rgb(232,232,232);
    width:13.14%;
    height: 1918px;
  }
  .zhanWeiBox{
    width: 100%;
    height: 60px;
  }
  .el-menu-item>a{
    width: 100%;
    height: 100%;
    text-decoration: none;
    font-size: 20px;
    font-family: "Microsoft YaHei";
    line-height: 70px;
    color: rgb(36,52,195);
  }
  .router-link-active{
    color: #2364e4;
  }
  .el-submenu > .el-submenu__title{
    display: inline-block;
    height:70px!important;
    line-height: 70px;
  }
  /*字体大小小修改*/
  .el-menu-item span,.el-submenu span{
    font-size: 20px;
    font-family: "Microsoft YaHei";
  }
  /*箭头样式修改*/
   .iconSize,.el-icon-location{
     font-size: 24px;
    line-height: 30px;
  }
    /*导航栏中的div的边距的修改*/

</style>
