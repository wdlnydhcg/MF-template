<!--
 * @Author: MrAlenZhong
 * @Date: 2020-10-14 10:14:48
 * @LastEditors: MrAlenZhong
 * @LastEditTime: 2021-10-17 21:25:48
 * @Description: 
-->
<template>
  <div id="app">
       <a-button type="primary">
      Primary
    </a-button>
    <Header name="portalApp"/>
  </div>
</template>
<script>
import Header from './components/Header.vue'
export default {
  components: {
    Header
  }
}

</script>
