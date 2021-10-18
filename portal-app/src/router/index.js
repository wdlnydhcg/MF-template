/*
 * @Author: MrAlenZhong
 * @Date: 2021-10-17 22:35:13
 * @LastEditors: MrAlenZhong
 * @LastEditTime: 2021-10-18 09:29:56
 * @Description: 
 */
/*
 * @Author: MrAlenZhong
 * @Date: 2021-09-06 10:56:11
 * @LastEditors: MrAlenZhong
 * @LastEditTime: 2021-10-09 11:10:07
 * @Description: 
 */
import Vue from 'vue';
import VueRouter from 'vue-router';


Vue.use(VueRouter);

const routes = [
  {
    //首页
    path: '/',
    name:'layout',
    component: () => import ('@/components/Layout.vue'),
  },
  {
    path: '/home',
    name:'home',
    component: () => import ('@/components/Header.vue'),
  },
  {
    path: '/404',
    name: '404',
    component: () => import('@/components/404.vue')},
];


// // 当前应用配置
// router.beforeEach((to, from, next) => {
//   next();
// });
export default new VueRouter({
    mode: 'history',
    // base: '/',
    routes:routes,
});;