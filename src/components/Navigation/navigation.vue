<template>
  <div class="navigation">
    <!-- 导航栏左侧功能按钮 -->
    <div class="btn">
      <a-button type="primary" @click="login">
        登录
      </a-button>
      <a-button type="primary" style="margin:0 20px" @click="register">
        注册
      </a-button>
      <a-button type="dashed">
        续借
      </a-button>
    </div>
    <a-menu v-model="current" mode="horizontal">
      <a-menu-item key="mail" @click="goHome"> <a-icon type="bank" />首页 </a-menu-item>
      <a-menu-item key="app">
        <div @click="onlineReading"><a-icon type="appstore" />在线阅读</div>
      </a-menu-item>
      <a-sub-menu>
        <span slot="title" class="submenu-title-wrapper"> <a-icon type="setting" />服务 </span>
        <a-menu-item-group title="Item 1">
          <a-menu-item key="setting:1">
            Option 1
          </a-menu-item>
          <a-menu-item key="setting:2">
            Option 2
          </a-menu-item>
        </a-menu-item-group>
        <a-menu-item-group title="Item 2">
          <a-menu-item key="setting:3">
            Option 3
          </a-menu-item>
          <a-menu-item key="setting:4">
            Option 4
          </a-menu-item>
        </a-menu-item-group>
      </a-sub-menu>
      <a-menu-item key="alipay" @click="goAbout">
        <a target="_blank" rel="noopener noreferrer">关于吉珠数字图书馆</a>
      </a-menu-item>
    </a-menu>
  </div>
</template>

<script>
export default {
  name: 'Navigation',
  data() {
    return {
      current: ['bank']
    }
  },
  methods: {
    onlineReading() {
      console.log(1111)
      this.$router.push({ path: '/onlineReading' })
    },
    login() {
      this.$router.push({ path: '/user/Login' })
    },
    register() {
      this.$router.push({ path: '/user/Register' })
    },
    goAbout() {
      this.$router.push({
        path: '/detailPage',
        query: {
          name: '开放时间'
        }
      })
    },
    goHome() {
      this.$router.push({ path: '/homePage' })
    }
  }
}
</script>

<style lang="less" scoped>
.navigation {
  width: 100%;
  height: 50px;
  background-color: white;
  // opacity: 0.8;
  // display: inline-block;
  display: flex;
  justify-content: space-between;
  flex-direction: inherit;
  position: fixed;
  top: 0;
  z-index: 3;
  .btn {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px;
  }
}
</style>
