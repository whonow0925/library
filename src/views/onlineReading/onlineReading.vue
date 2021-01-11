<template>
  <div class="onlineReading">
    <navigation></navigation>
    <div class="bookCard">
      <a-card
        hoverable
        style="width: 300px;margin:40px;border-radius:36px;"
        v-for="(item, index) in bookList"
        :key="index"
      >
        <img slot="cover" alt="example" :src="require(`./images/${item.imageName}.jpg`)" />
        <template slot="actions" class="ant-card-actions">
          <div @click="showModal">在线阅读</div>
          <div>借阅</div>
          <div @click="showEvaluate">评价</div>
        </template>
        <a-card-meta :title="item.bookName" :description="item.description"> </a-card-meta>
      </a-card>
    </div>
  </div>
</template>

<script>

import navigation from '@/components/Navigation/navigation'
// import Navigation from '@/components/Navigation/navigation.vue'
export default {
  components:{
    navigation
    // Navigation
  },
  data() {
    return {
      bookList: [
        {
          imageName: '数据结构',
          bookName: '数据机构',
          description: 'sdfvgsdafgbdah'
        },
        {
          imageName: 'JavaScript',
          bookName: 'JavaScript',
          description: 'dsgfdzcxvfdhbf'
        },
        {
          imageName: '天才在左疯子在右',
          bookName: '天才在左 疯子在右',
          description: 'dsgfdzcxvfdhbf'
        },
        {
          imageName: 'JavaScript',
          bookName: 'JavaScript',
          description: 'dsgfdzcxvfdhbf'
        },
        {
          imageName: '数据结构',
          bookName: '数据机构',
          description: 'sdfvgsdafgbdah'
        },
        {
          imageName: '数据结构',
          bookName: '数据机构',
          description: 'sdfvgsdafgbdah'
        },
        {
          imageName: '数据结构',
          bookName: '数据机构',
          description: 'sdfvgsdafgbdah'
        },
        {
          imageName: '数据结构',
          bookName: '数据机构',
          description: 'sdfvgsdafgbdah'
        },
        {
          imageName: '数据结构',
          bookName: '数据机构',
          description: 'sdfvgsdafgbdah'
        },
        {
          imageName: '数据结构',
          bookName: '数据机构',
          description: 'sdfvgsdafgbdah'
        },
        {
          imageName: '数据结构',
          bookName: '数据机构',
          description: 'sdfvgsdafgbdah'
        }
      ]
    }
  },
  methods: {
  }
}
</script>

<style lang="less" scoped>
.onlineReading {
  // position: absolute;
  height: 100vh;
  // background-image: url('./images/首页2.png');
  background-repeat: no-repeat;
  background-size: 100% 100%;
  .bookCard {
    height: 100vh;
    overflow-y: auto;
    position: relative;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    // overflow: auto;
    width: 100%;
    justify-content: left;
    z-index: 2;
    text-align: center;
    font-size: 200px;
    font-weight: 600;
    img {
      width: 200px;
      height: 200px;
      margin: 20px auto 0 50px;
    }
  }
}
</style>
