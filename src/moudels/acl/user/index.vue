<template>
  <el-card>
    <el-form class="user_form">
      <el-form-item label="用户名">
        <el-input v-model="username" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary">搜索</el-button>
        <el-button type="primary">重置</el-button>
      </el-form-item>
    </el-form>
  </el-card>
  <el-card style="margin: 20px 0">
    <el-button type="primary">用户添加</el-button>
    <el-button type="primary">用户删除</el-button>
    <el-table border style="margin-top: 20px">
      <el-table-column type="selection" width="55" align="center" />
      <el-table-column label="序号" width="120" align="center" />
      <el-table-column label="ID" width="120" align="center" />
      <el-table-column label="用户角色" align="center" />
      <el-table-column label="创建时间" align="center" />
      <el-table-column label="更新时间" align="center" />
      <el-table-column label="操作" width="260" align="center">
        <template #default>
          <el-button type="primary" size="small"> 分类角色 </el-button>
          <el-button type="primary" size="small">编辑</el-button>
          <el-button type="primary" size="small">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </el-card>
</template>

<script setup>
import { ref } from "vue";

let username = ref("");
</script>

<style scoped lang="scss">
.user_form {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
