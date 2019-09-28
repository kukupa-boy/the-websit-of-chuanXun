<template>
  <div id="app">
    <headerBar></headerBar>

    <sidebar></sidebar>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
  import sidebar from '@/components/sidebar/sidebar.vue'
  import headerBar from '@/components/header/header.vue'
export default {
  name: 'App',
  data(){
    return {

    }
  },
  components:{
    sidebar,
    headerBar
  },
  created() {
     // 获取浏览器可视区域高度
      this.clientHeight =   `${document.documentElement.clientHeight}`          //document.body.clientWidth;
      window.onresize = function temp() {
        this.clientHeight = `${document.documentElement.clientHeight}`;
      };

      this.$store.screenHeight=parseInt(this.clientHeight);
  },
  methods: {
  }
  }
</script>

<style>

</style>
