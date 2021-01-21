<template>
  <div class="register">
    <div class="registerDialog">
      <div class="title">吉林大学珠海学院数字图书馆</div>
      <div class="input">
        <div class="userName">
          <span style="color:red;marging-right:-5px">*</span>
          <span class="name">用户名：</span>
          <a-input v-model="userName" class="nameInput" placeholder="请输入用户名/学号" allow-clear />
        </div>
        <div class="userPassword">
          <span style="color:red">*</span>
          <span class="pwd">密码：</span>
          <a-input-password v-model="password" class="passwordInput" placeholder="请输入密码" />
        </div>
        <div class="confirmPassword">
          <span style="color:red">*</span>
          <span class="pwdConfirm">再次确认密码：</span>
          <a-input-password
            v-model="confirmPwd"
            class="passwordConfirm"
            placeholder="请再次确认密码"
            style="width:80%"
          />
        </div>
      </div>
      <div class="registerButton">
        <a-button class="aButton" type="primary" @click="register">
          注册
        </a-button>
      </div>
    </div>
  </div>
</template>
<script>
// const axios = require('axios')
export default {
  data() {
    return {
      userName: '',
      password: '',
      confirmPwd: ''
    }
  },
  methods: {
    register() {
      const username = this.userName
      const password = this.password
      const confirmPwd = this.confirmPwd
      if (password == confirmPwd) {
        this.$axios
          .post('/api/auth/register', {
            name: username,
            password: password
          })
          .then(response => {
            console.log(response)
            if(response.data=='账号已被注册，请前往登录'){
            }
          })
          .catch(error => {
            console.log(error)
          })
      } else {
        this.$message.warning('两次密码输入不一致，请重新输入')
      }
    }
  }
}
</script>

<style lang="less" scoped>
.register {
  background-image: url('./images/backgroundImage.png');
  background-size: 100% 100%;
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
  .registerDialog {
    width: 470px;
    height: 300px;
    background-color: white;
    border-radius: 20px;
    // opacity: 0.6;
    text-align: center;
    .title {
      color: skyblue;
      font-size: 20px;
      font-weight: 800;
      margin: 20px auto;
    }
    // .input {
    //   input {
    //     width: 300px;
    //   }
    //   .userName {
    //     display: flex;
    //     justify-content: center;
    //     align-items: center;
    //     text-align: center;
    //   }
    //   .userPassword {
    //     display: flex;
    //     justify-content: center;
    //     align-items: center;
    //     margin-right: -14px;
    //     margin-top: 20px;
    //   }
    //   .confirmPassword {
    //     display: flex;
    //     justify-content: center;
    //     align-items: center;
    //     margin-right: 43px;
    //     margin-top: 20px;
    //   }
    // }
    .input {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-flow: column;
      .userName {
        display: flex;
        justify-content: center;
        align-items: center;
        .name {
          width: 100px;
        }
      }
      .userPassword {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 20px;
        .pwd {
          width: 100px;
        }
      }
      .confirmPassword {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 20px;
        // margin-left: -10px;
        margin-left: -47px;
        .pwdConfirm {
          width: 150px;
        }
      }
    }
    .registerButton {
      margin: 20px auto;
      .aButton {
        width: 200px;
        border-radius: 12px;
      }
    }
  }
}
</style>
