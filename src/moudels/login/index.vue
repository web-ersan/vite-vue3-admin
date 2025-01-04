<template>
  <div class="login_container">
    <el-row>
      <el-col :span="12" :xs="0"></el-col>
      <el-col :span="12" :xs="24">
        <el-form class="login_content" :model="loginData" :rules="rules">
          <p>hello</p>
          <p>智慧城市</p>
          <el-form-item prop="username">
            <el-input v-model="loginData.username" />
          </el-form-item>
          <el-form-item prop="password">
            <el-input
              v-model="loginData.password"
              type="password"
              show-password
            />
          </el-form-item>
          <el-form-item>
            <el-button
              :loading="loading"
              type="primary"
              class="login_btn"
              @click="loginSys"
              >登录</el-button
            >
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>

<script setup>
import { reactive, ref } from "vue";
import { getTime } from "@/utils/time";
const loginData = reactive({
  username: "admin",
  password: "123456789",
});
import { userLoginStore } from "@/store/index";
import { useRouter } from "vue-router";
import { ElNotification } from "element-plus";
let router = useRouter();
let loading = ref(false);
const loginStore = userLoginStore();
const loginSys = () => {
  loading.value = true;
  loginStore
    .login(loginData)
    .then(() => {
      router.push("/");
      ElNotification({
        title: `HI!${getTime()}好`,
        message: "登陆成功",
        type: "success",
      });
    })
    .finally(() => {
      loading.value = false;
    });
};
// 自定义校验规则
const validateUsername = (rule, value, callback) => {
  if (value.length >5) {
    callback();
  } else {
    callback(new Error("用户名必须至少五位"));
  }
};
const rules = {
  username: [{ validator: validateUsername, trigger: "change" }],
  password: [],
};
</script>

<style scoped lang="scss">
.login_container {
  width: 100%;
  height: 100vh;
  background: url("@/assets/images/login.png") no-repeat;
  background-size: cover;
  .login_content {
    position: relative;
    top: 30vh;
    padding: 20px;
    width: 50%;
    height: 30vh;
    background: url("@/assets/images/login-form.png");
    background-size: cover;
    P:nth-child(1) {
      font-size: 30px;
    }
    P:nth-child(2) {
      font-size: 20px;
      margin: 20px 0;
    }
    .login_btn {
      width: 100%;
    }
  }
}
</style>
