import axios from "axios";
import { ElLoading } from 'element-plus'
import { ElMessage } from 'element-plus'

const NETWORK_ERROR = '网络请求异常, 请稍后重试OoO'

let loadingOBJ = null

const Service = axios.create({
    timeout:6000,
    baseURL: "/api",
    headers:{
        'Content-Type':'application/json;charset=utf-8'
    }
})
// 请求拦截器，内部根据返回值，重新组装，统一管理。
Service.interceptors.response.use((req) =>{
    loadingOBJ = ElLoading.service({
        lock: true,
        text: '加载中...',
        background: 'rgba(0, 0, 0, 0.7)',
    })
    setTimeout(() => {
        loadingOBJ.close()
      }, 233)
    // jwt token
    return req
})
// 响应拦截器
Service.interceptors.response.use((res) =>{
    const { code, data, messsage } = res.data
    if( code == 200 ) {
      return res.data
    } else {
      // 请求出错
      ElMessage.error(messsage || NETWORK_ERROR)
      return Promise.reject(messsage || NETWORK_ERROR)
    }
})

// post请求
export const post=config=>{
    return Service({
        ...config,
        method:"post",
        data:config.data
    })
}
// get请求
export const get=config=>{
    return Service({
        ...config,
        method:"get",
        params:config.data
    })
}
// put请求
export const put=config=>{
    return Service({
        ...config,
        method:"put",
        data:config.data
    })
}
export default Service