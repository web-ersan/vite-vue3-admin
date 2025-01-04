// 常量一级路由
export const BaseRoutes = [
  {
    path: "/login",
    component: () => import("@/moudels/login/index.vue"),
    name: "Login",
    meta: {
      title: "登录",
      hidden: false,
    },
  },
  {
    path: "/",
    component: () => import("@/components/layout/index.vue"),
    name: "Layout",
    redirect: "/home",
    children: [
      {
        path: "/home",
        component: () => import("@/moudels/home/index.vue"),
        name: "Home",
        meta: {
          title: "首页",
          hidden: true,
        },
      },
    ],
  },
  {
    path: "/404",
    component: () => import("@/moudels/404/index.vue"),
    name: "404",
    meta: {
      title: "404",
      hidden: false,
    },
  },
  {
    path: "/screen",
    component: () => import("@/moudels/screen/index.vue"),
    name: "Screen",
    meta: {
      title: "数据大屏",
      hidden: true,
    },
  },
  {
    path: "/acl",
    component: () => import("@/components/layout/index.vue"),
    name: "Acl",
    meta: {
      title: "权限管理",
      hidden: true,
    },
    children: [
      {
        path: "/acl/role",
        component: () => import("@/moudels/acl/role/index.vue"),
        name: "Role",
        meta: {
          title: "角色管理",
          hidden: true,
        },
      },
      {
        path: "/acl/user",
        component: () => import("@/moudels/acl/user/index.vue"),
        name: "User",
        meta: {
          title: "用户管理",
          hidden: true,
        },
      },
      {
        path: "/acl/promision",
        component: () => import("@/moudels/acl/promision/index.vue"),
        name: "Promision",
        meta: {
          title: "菜单管理",
          hidden: true,
        },
      },
    ],
  },
  {
    path: "/:pathMatch(.*)*",
    redirect: "/404",
    name: "Any",
    meta: {
      title: "Any",
      hidden: false,
    },
  },
];
