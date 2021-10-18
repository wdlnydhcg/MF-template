/*
 * @Author: MrAlenZhong
 * @Date: 2020-10-14 10:14:48
 * @LastEditors: MrAlenZhong
 * @LastEditTime: 2021-10-17 22:40:01
 * @Description: 
 */
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';

Vue.use(Antd);

new Vue({
    router,
    el: '#app',
    render: h => h(App)
  })