<template>
  <div class="onlineReading">
    <navigation></navigation>
    <div class="bookCard">
      <a-card hoverable style="width: 300px;margin:40px 5px" v-for="item in bookList" :key="item.id">
        <img slot="cover" alt="example" :src="require(`./images/${item.imageName}.jpg`)" />
        <template slot="actions" class="ant-card-actions">
          <div @click="readingDetail(item)">在线阅读</div>
          <div>借阅</div>
          <div >评价</div>
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
  components: {
    navigation
    // Navigation
  },
  data() {
    return {
      bookList: [
        {
          id: 1,
          imageName: 'book1',
          bookName: '断舍离',
          author:'[日] 山下英子 著，贾耀平 译',
          description: '断舍离（新版，全新修订50%以上内容）宫崎骏、张德芬、李冰冰的减法哲学，陈数推荐'
        },
        {
          id: 2,
          imageName: 'JavaScript',
          bookName: 'JavaScript',
          author:'[日] 山下英子 著，贾耀平 译',
          description: 'dsgfdzcxvfdhbf'
        },
        {
          id: 3,
          imageName: '天才在左疯子在右',
          bookName: '天才在左 疯子在右',
          author:'[日] 山下英子 著，贾耀平 译',
          description: 'dsgfdzcxvfdhbf'
        },
        {
          id: 4,
          imageName: 'JavaScript',
          bookName: 'JavaScript',
          author:'[日] 山下英子 著，贾耀平 译',
          description: 'dsgfdzcxvfdhbf'
        },
        {
          id: 5,
          imageName: '数据结构',
          bookName: '数据机构',
          author:'[日] 山下英子 著，贾耀平 译',
          description: 'sdfvgsdafgbdah'
        },
        {
          id: 6,
          imageName: '数据结构',
          bookName: '数据机构',
          author:'[日] 山下英子 著，贾耀平 译',
          description: 'sdfvgsdafgbdah'
        },
        {
          id: 7,
          imageName: '数据结构',
          bookName: '数据机构',
          author:'[日] 山下英子 著，贾耀平 译',
          description: 'sdfvgsdafgbdah'
        },
        {
          id: 8,
          imageName: '数据结构',
          bookName: '数据机构',
          author:'[日] 山下英子 著，贾耀平 译',
          description: 'sdfvgsdafgbdah'
        },
        {
          id: 9,
          imageName: '数据结构',
          bookName: '数据机构',
          author:'[日] 山下英子 著，贾耀平 译',
          description: 'sdfvgsdafgbdah'
        },
        {
          id: 10,
          imageName: '数据结构',
          bookName: '数据机构',
          author:'[日] 山下英子 著，贾耀平 译',
          description: 'sdfvgsdafgbdah'
        },
        {
          id: 11,
          imageName: '数据结构',
          bookName: '数据机构',
          author:'[日] 山下英子 著，贾耀平 译',
          description: 'sdfvgsdafgbdah'
        }
      ]
    }
  },
  methods: {
    readingDetail(item) {
      this.$router.push({
        path: './bookDetail',
        query: {
          id: item.id,
          name: item.bookName,
          description: item.description,
          author:item.author
        }
      })
    }
  }
}
</script>

<style lang="less" scoped>
.onlineReading {
  // position: absolute;
  height: 100vh;
  background-image: url('./images/background.jpg');
  background-repeat: no-repeat;
  background-size: 100% 100%;
  margin-top: 20px;
  .bookCard {
    opacity: 0.9;
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
