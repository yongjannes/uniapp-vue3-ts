/**
 * 添加拦截器:
 *   拦截 request 请求
 *   拦截 uploadFile 文件上传
 *
 * TODO:
 *   1. 非 http 开头需拼接地址
 *   2. 请求超时
 *   3. 添加小程序端请求头标识
 *   4. 添加 token 请求头标识
 */
import { isVNode } from "vue"
import { useMemberStore } from '@/stores'

// 请求基地址
const baseURL = 'https://pcapi-xiaotuxian-front-devtest.itheima.net'


const httpInterceptor={
    invoke(options:UniApp.RequestOptions){
        // 1. 非 http 开头需拼接地址
        if(!options.url.startsWith('http')){
            options.url= baseURL+options.url
        }
         // 2. 请求超时
         options.timeout= 10000
         console.log( options)
          // 3. 添加小程序端请求头标识
          options.header = {
            'source-client': 'miniapp',
            ...options.header,
          }
          // 4. 添加 token 请求头标识
          const memberStore = useMemberStore()
          const token = memberStore.profile?.token
          if (token) {
            options.header.Authorization = token
          }

    },
}
uni.addInterceptor('request',httpInterceptor)
uni.addInterceptor('uploadFile',httpInterceptor)