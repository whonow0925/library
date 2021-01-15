<template>
  <div class="login">
    <div class="loginDialog">
      <div class="title">吉林大学珠海学院数字图书馆</div>
      <div class="input">
        <div class="userName"><span style="color:red">*</span>用户名：<a-input placeholder="Basic usage" /></div>
        <div class="userPassword"><span style="color:red">*</span>密码：<a-input placeholder="Basic usage" /></div>
      </div>
      <div class="loginButton">
        <a-button class="aButton" type="primary">
          登录
        </a-button>
      </div>
      <div class="toRegiater">
        <a @click="toRegister">还没有账号？？快去注册吧</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    methods: {
        toRegister() {
            this.$router.push({path:'/register'})
        }
    },
}
</script>

<style scoped lang="less">
.login {
  background-image: url('./images/backgroundImage.png');
  background-size: 100% 100%;
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
  .loginDialog {
    width: 450px;
    height: 270px;
    background-color: white;
    border-radius: 20px;
    // opacity: 0.6;
    text-align: center;
    .title {
      font-size: 20px;
      font-weight: 400;
      margin: 20px auto;
    }
    .input {
      input {
        width: 300px;
      }
      .userName {
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
      }
      .userPassword {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-right: -14px;
        margin-top: 20px;
      }
    }
    .loginButton {
        margin: 20px auto;
      .aButton {
        width: 200px;
        border-radius: 12px;
      } 
    }
  }
}
</style>
