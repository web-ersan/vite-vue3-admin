<template>
  <template v-for="item in menuList" :key="item.path">
    <!-- 没有子路由的 -->
    <el-menu-item
      :index="item.path"
      v-if="!item.children && item.meta.hidden"
      @click="goRoute(item.path)"
    >
      <template #title>
        <span>{{ item.meta.title }}</span>
      </template>
    </el-menu-item>
    <!-- 只用一个子路由 -->
    <el-menu-item
      :index="item.path"
      v-if="
        item.children &&
        item.children.length === 1 &&
        item.children[0].meta.hidden
      "
       @click="goRoute(item.path)"
    >
      <template #title>
        <span>{{ item.children[0].meta.title }}</span>
      </template>
    </el-menu-item>
    <!-- 有两个以上子路由 -->
    <el-sub-menu
      :index="item.path"
      v-if="item.children && item.children.length > 1"
    >
      <template #title>
        <span>{{ item.meta.title }}</span>
      </template>
      <menus :menuList="item.children"></menus>
    </el-sub-menu>
  </template>
</template>

<script setup>
import { useRouter } from "vue-router";
let router = useRouter();
const { menuList } = defineProps(["menuList"]);
const goRoute = (path) => {
  router.push(path);
};
</script>
<script>
export default {
  name: "menus",
};
</script>

<style scoped lang="scss"></style>
