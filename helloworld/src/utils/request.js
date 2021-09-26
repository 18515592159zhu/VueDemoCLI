//引入axios
import axios from "axios";

//创建默认实例
const instance = axios.create({
  baseURL: 'http://localhost:8989',
  timeout: 5000,
})

//请求拦截器
instance.interceptors.request.use(config => {
  console.log("请求拦截器");
  return config;
})
//响应拦截器
instance.interceptors.response.use(response => {
  console.log("响应拦截器");
  return response;
})
//暴露instance实例对象
export default instance;
