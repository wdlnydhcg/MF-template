/*
 * @Author: MrAlenZhong
 * @Date: 2021-10-18 09:36:09
 * @LastEditors: MrAlenZhong
 * @LastEditTime: 2021-10-18 09:43:22
 * @Description: 
 */
'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  BASE_API: '"http://localhost:8080"'
})
