<template>
  <div class="register">
    <div class="registerDialog">
      <div class="title">吉林大学珠海学院数字图书馆</div>
      <div class="input">
        <div class="userName"><span style="color:red">*</span>用户名：<a-input placeholder="Basic usage" /></div>
        <div class="userPassword"><span style="color:red">*</span>密码：<a-input placeholder="Basic usage" /></div>
        <div class="confirmPassword"><span style="color:red">*</span>再次确认密码：<a-input placeholder="Basic usage" /></div>
      </div>
      <div class="registerButton">
        <a-button class="aButton" type="primary">
          注册
        </a-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
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
      .confirmPassword {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-right: 43px;
        margin-top: 20px;
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
