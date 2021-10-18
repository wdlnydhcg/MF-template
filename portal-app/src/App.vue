<!--
 * @Author: MrAlenZhong
 * @Date: 2020-10-14 10:14:48
 * @LastEditors: MrAlenZhong
 * @LastEditTime: 2021-10-18 19:53:27
 * @Description: 
-->
<template>
  <div id="app">
    <!-- <Layout/> -->
    <!-- <Header name="portalApp"/> -->
    <div class="ant-layout nh-default-layout">
      <div class="ant-layout nh-layout-has-sider">
        <router-view></router-view>
      </div>
    </div>

  </div>
</template>
<script>
import Header from './components/Header.vue'
import Layout from './components/Layout.vue'
export default {
  components: {
    Header,
    Layout
  }
}

</script>
<style>
body, html {
  width: 100%;
  height: 100%;
  overflow: visible!important;
  overflow-x: hidden!important;
}
#app{
  width: 100%;
  height: 100%;  
}

.ant-layout{
  display: flex;
  flex: auto;
  flex-direction: column;
  min-height: 0;
  background: #f0f2f5;
}
.nh-default-layout,.ant-layout.nh-default-layout{
  display: flex;
  width: 100%;
  min-height: 100%;
  background-color: #f4f7f9;
  flex-direction: column;
}
.nh-default-layout>.ant-layout{
  min-height: 100%;
}
.ant-layout, .ant-layout *{
  box-sizing: border-box;
}

</style>
