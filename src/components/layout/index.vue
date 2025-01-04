<!-- 页面布局 -->
<template>
  <div class="layout_container">
    <!-- 左侧菜单 -->
    <div class="layout_slider">
      <logo></logo>
      <el-scrollbar class="scrollbar">
        <el-menu
          text-color="#fff"
          active-text-color="#ffd04b"
          background-color="#001529"
          :default-active="$route.path"
        >
          <menus :menuList="menuList"></menus>
        </el-menu>
      </el-scrollbar>
    </div>
    <!-- 右侧内容 -->
    <div class="layout_content">
      <div class="header">
        <tabbar></tabbar>
      </div>
      <div class="content">
        <RouterView />
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive } from "vue";
import logo from "./logo/index.vue";
import menus from "./menu/index.vue";
import tabbar from "./tabbar/index.vue";
import { BaseRoutes } from "@/router/route";
import { useRoute } from "vue-router";
const $route = useRoute();

const menuList = reactive(BaseRoutes);
</script>

<style scoped lang="scss">
.layout_container {
  width: 100%;
  height: 100vh;
  display: flex;
  .layout_slider {
    width: $base_slider_width;
    height: 100vh;
    display: flex;
    flex-direction: column;
    background-color: #001529;
    .scrollbar {
      flex: 1;
    }
  }
  .layout_content {
    display: flex;
    flex: 1;
    overflow-x: hidden;
    height: 100vh;
    flex-direction: column;
    .header {
      height: $base_tabber_height;
      border: 1px solid #ccc;
    }
    .content {
      flex: 1;
      padding: 20px;
      overflow: auto;
    }
  }
}
</style>
