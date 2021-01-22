<template>
  <div class="onlineReading">
    <navigation :isLogin="isLogin"></navigation>
    <!-- <div class="bookCard">
      <a-card hoverable style="width: 300px;margin:40px 5px" v-for="item in bookList" :key="item.id">
        <img slot="cover" alt="example" :src="require(`./images/${item.imageName}.jpg`)" />
        <template slot="actions" class="ant-card-actions">
          <div @click="readingDetail(item)">在线阅读</div>
          <div>借阅</div>
          <div>评价</div>
        </template>
        <a-card-meta :title="item.bookName" :description="item.description"> </a-card-meta>
      </a-card>
    </div> -->
    <div class="content">
      <a-row>
        <a-col :span="4">
          <div class="bookClassify">
            <ul v-for="(item, index) in bookClassify" :key="index">
              <span>{{ item }}</span>
            </ul>
          </div>
        </a-col>
        <a-col :span="20">
          <div class="bookContent">
            <div class="book" v-for="item in bookList" :key="item.bookId">
              <div class="bookNumber">{{ item.bookId }}</div>
              <div class="bookImage"><img src="./images/天才在左疯子在右.jpg" alt="" /></div>
              <div class="introduction">
                <ul>
                  <li class="name">{{ item.bookName }}</li>
                  <span class="writer">{{ item.writer }} </span>
                  <span class="writer">{{ item.press }}</span>
                  <span class="writer">{{ item.bookType }}</span>
                  <li>简介：{{ item.describe }}</li>
                  <li class="more"><a href="">{{ item.type }}</a></li>
                </ul>
              </div>
            </div>
          </div>
        </a-col>
      </a-row>
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
  mounted() {
    if (this.$store.getters.token) {
      this.isLogin = true
    }
    this.$axios
      .get('/api/book/bookRank')
      .then(response => {
        // console.log(response.data.result,22)
        for (var i = 0; i < response.data.result.length; i++) {
          this.bookList.push(response.data.result[i])
        }
      })
      .catch(error => {
        console.log(error)
      })
  },
  data() {
    return {
      isLogin: false,
      //书籍分类
      bookClassify: ['全部','文学艺术', '科幻小说', '经典小说', '影视小说','个人成长'],
      bookList: []
    }
  },
  methods: {
    // readingDetail(item) {
    //   this.$router.push({
    //     path: './bookDetail',
    //     query: {
    //       id: item.id,
    //       name: item.bookName,
    //       description: item.description,
    //       author: item.author
    //     }
    //   })
    // },
  }
}
</script>

<style lang="less" scoped>
.onlineReading {
  height: 100%;
  // background-image: url('./images/首页2.png');
  background-repeat: no-repeat;
  background-size: 100% 100%;
  overflow: hidden;
  .content {
    .bookClassify {
      width: 90%;
      height: 100vh;
      // background-color: white;
      position: absolute;
      margin-top: 70px;
      border-radius: 20px;
      // margin:60px 10px;
      span{
        font-size: 20px;
        // background-color: pink;
        border-radius: 10px;
      }
    }
    .bookContent {
      width: 100%;
      height: 100vh;
      overflow: scroll;
      margin: 50px auto;
      .book {
        display: flex;
        align-items: center;
        text-align: left;
        background-color: rgb(247, 245, 243);
        border-radius: 20px;
        margin: 10px;
        .bookNumber{
          margin: auto 20px;
        }
        .bookImage {
          margin: 20px 20px;
          img {
            width: 150px;
            height: 150px;
          }
        }
        .introduction{
          // margin-right: 20px;
          margin: 10px 20px 10px 0;
          .name{
            font-size: 20px;
            font-weight: 700;
          }
          .writer{
            background-color: pink;
            border-radius: 14px;
            margin: 0 10px;
          }
          .more{
            margin-top: 10px;
          }
        }
      }
    }
  }
}
// margin-top: 20px;
// }
// .bookCard {
//   opacity: 0.9;
//   height: 100vh;
//   overflow-y: auto;
//   position: relative;
//   display: flex;
//   flex-direction: row;
//   flex-wrap: wrap;
//   // overflow: auto;
//   width: 100%;
//   justify-content: left;
//   z-index: 2;
//   text-align: center;
//   font-size: 200px;
//   font-weight: 600;
//   img {
//     width: 200px;
//     height: 200px;
//     margin: 20px auto 0 50px;
//   }
// }
</style>
