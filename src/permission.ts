// 路由鉴权
import router from "@/router/index";
//导入进度条插件\js与css
import Nprogress from "nprogress";
import "nprogress/nprogress.css";
// 判断用户是否登录成功

// 全局前置守卫
router.beforeEach((to, form, next) => {
  Nprogress.start();
  const token = localStorage.getItem("TOKEN");
  if (!token) {
    //没有登陆成功
    if (to.path == "/login") {
      next();
    } else {
      next({ path: "/login", query: { redirect: to.path } });
    }
  } else {
    // 登录成功并且有用户信息渲染左侧菜单
    if (to.path == "/login") {
      next({ path: "/" });
    } else {
      // 有用户信息直接放行，没有需要发起请求
      next();
    }
  }
  //
});
// 全局后置守卫
router.afterEach((to, form) => {
  Nprogress.done();
});

// 解决进度条
