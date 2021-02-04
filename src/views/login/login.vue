<template>
  <div class="login">
    <div class="loginDialog">
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
          <a-input-password v-model="userPassword" class="passwordInput" placeholder="请输入密码(英文和数字)" />
        </div>
      </div>
      <div class="loginButton">
        <a-button class="aButton" type="primary" @click="login">
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
import { mapActions } from 'vuex'
export default {
  data() {
    return {
      userName: '',
      userPassword: ''
    }
  },
  methods: {
    ...mapActions(['Login']),
    toRegister() {
      this.$router.push({ path: '/register' })
    },
    // pwdValidate(val){
    //   const ipRegex = /[^\w]/g
    //   if (ipRegex.test(val) === false) {
    //     this.$message.error('输入格式有误，请重新输入！！！')
    //   } else {
    //   }
    // },
    login() {
      const username = this.userName
      const password = this.userPassword
      this.Login({ username, password }).then(response => {
        console.log(response, 123)
        if (response.result && response.result.isAdmin == 1) {
          this.$router.push({ path: '/dashboard' })
        } else if (response.result && response.result.isAdmin == 0) {
          this.$router.push({ path: '/homePage' })
        } else {
          this.$message.warning(response.error.msg)
        }
        console.log(this.$store.getters.roles, 222)
      })
      // this.$axios
      //   .post('/api/auth/login', {
      //     username: username,
      //     password: password
      //   })
      //   .then(response => {
      //     if (response.data.result) {
      //       localStorage.setItem('token',response.data.result.token)
      //       if (response.data.result.isAdmin == 1) {
      //         this.$router.push({ path: '/dashboard' })
      //       } else {
      //         this.$router.push({ path: '/homePage' })
      //       }
      //     } else {
      //       this.$message.warning(response.data.error.msg)
      //     }
      //   })
      //   .catch(error => {
      //     console.log(error)
      //   })
    }
  }
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
    width: 410px;
    height: 270px;
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
