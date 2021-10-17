/*
 * @Author: MrAlenZhong
 * @Date: 2020-10-14 10:14:48
 * @LastEditors: MrAlenZhong
 * @LastEditTime: 2021-10-17 21:16:45
 * @Description: 
 */
import Vue from "vue";
import App from "./App.vue";
import { Button } from 'ant-design-vue';

Vue.use(Button);

new Vue({
    el: '#app',
    render: h => h(App)
  })