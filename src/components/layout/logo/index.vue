<template>
  <div class="logo_container">
    <img src="@/assets/images/logo.png" alt="" />
    <span class="title">蛇年大吉</span>
  </div>
</template>

<script setup></script>

<style scoped lang="scss">
.logo_container {
  height: 100px;
  width: 260px;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    height: 50px;
    width: 50px;
    margin-right: 30px;
    border-radius: 50%;
  }
  .title {
    font-size: 30px;
    color: white;
  }
}
</style>
