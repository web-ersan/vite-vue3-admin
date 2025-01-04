// 定义登录相关的参数类型
export interface loginForm{
    username:string,
    password:string
}
// 全部接口都返回的数据类型
export interface responseData{
    code:number,
    message:string,
    ok:boolean
}
// 登录返回参数
export interface loginResponseData extends responseData{
    data:string
}