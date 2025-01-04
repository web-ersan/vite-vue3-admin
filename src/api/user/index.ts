// 用户相关接口
import request from "@/utils/request";
import type { loginForm } from "./type";
// 统一接管理
enum  API {
    LOGIN_URl='/user/login',
    USERINFO_URL='/user/info'
}
//接口封装
export const LoginApi =(data:loginForm)=>{
    return request.post(
     API.LOGIN_URl,
     data
    )
}