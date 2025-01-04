// 用户登录仓库
import { defineStore } from "pinia";
import { LoginApi } from "@/api/user/index";

export const userLoginStore = defineStore("userLogin", () => {
  let token = localStorage.getItem("TOKEN");
  const login = async (data) => {
    const result: any =await LoginApi(data);
    if (result.code === 200) {
      localStorage.setItem("TOKEN", result.data.token);
    } else {
      console.log(res.data.message);
    }
  };
  return { login };
});
