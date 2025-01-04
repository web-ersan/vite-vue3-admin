<template>
  <div class="tabbar_container">
    <div class="tabbar_left">
      <el-breadcrumb separator-icon="ArrowRight">
        <el-breadcrumb-item v-for="item in $route.matched"
          ><span>
            {{ item.meta.title }}
          </span></el-breadcrumb-item
        >
      </el-breadcrumb>
    </div>
    <div class="tabbar_right">
      <el-button icon="RefreshRight" circle />
      <el-button icon="Setting" circle @click="open" />
      <el-button icon="FullScreen" circle @click="fullScreen" />
      <el-dropdown class="dropdown">
        <span class="el-dropdown-link">
          admin
          <el-icon class="el-icon--right">
            <arrow-down />
          </el-icon>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>
              <el-button text>退出登录</el-button>
            </el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
  <el-drawer v-model="drawer" title="主题切换">
    <el-form label-width="auto">
      <el-form-item label="主题颜色">
        <el-color-picker v-model="color" @change="changeThem" />
      </el-form-item>
      <el-form-item label="暗黑模式">
        <el-switch v-model="dark" @change="changeDark" />
      </el-form-item>
    </el-form>
  </el-drawer>
</template>

<script setup>
import { useRoute } from "vue-router";
import { ref } from "vue";
let $route = useRoute();

// 全屏模式切换
const fullScreen = () => {
  // dom属性判断当前是否是全屏
  let full = document.fullscreenElement;
  if (!full) {
    document.documentElement.requestFullscreen();
  } else {
    document.exitFullscreen();
  }
};
// 主题切换
let drawer = ref(false);
const color = ref("#409EFF");
const open = () => {
  drawer.value = true;
};
const changeThem = () => {
  // document.documentElement 是全局变量时
  const el = document.documentElement;
  // const el = document.getElementById('xxx')

  // 获取 css 变量
  getComputedStyle(el).getPropertyValue(`--el-color-primary`);

  // 设置 css 变量
  el.style.setProperty("--el-color-primary", color.value);
};
// 暗黑模式
const dark = ref(false);
const changeDark = () => {
  let html = document.documentElement;
  dark.value ? (html.className = "dark") : (html.className = "");
};
</script>

<style scoped lang="scss">
.tabbar_container {
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .tabbar_left {
    padding-left: 20px;
  }
  .tabbar_right {
    display: flex;
    align-items: center;
    .dropdown {
      margin-left: 20px;
    }
  }
}
</style>
