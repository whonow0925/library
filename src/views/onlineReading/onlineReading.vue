<template>
  <div class="onlineReading">
    <navigation :isLogin="isLogin"></navigation>
    <div class="content">
      <a-row>
        <a-col :span="4">
          <div class="bookClassify">
            <ul v-for="(item, index) in bookClassify" :key="index">
              <span @click="classify(item, index)" :class="{ active: index == isActive }">{{ item }}</span>
            </ul>
          </div>
        </a-col>
        <a-col :span="20">
          <div class="bookContent">
            <div class="book" v-for="(item, index) in bookList" :key="index">
              <div class="bookNumber">{{ index + 1 }}</div>
              <div class="bookImage"><img src="./images/天才在左疯子在右.jpg" alt="" /></div>
              <div class="introduction">
                <ul>
                  <li class="name">{{ item.bookName }}</li>
                  <span class="writer">{{ item.writer }} </span>
                  <span class="writer">{{ item.press }}</span>
                  <span class="writer">{{ item.bookType }}</span>
                  <li>简介：{{ item.describe }}</li>
                  <li class="more" @click="toDetail(item)">
                    <span>{{ item.type }}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </a-col>
      </a-row>
    </div>
    <div>
      <a-modal v-model="visible" title="Basic Modal">
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </a-modal>
    </div>
  </div>
</template>

<script>
import navigation from '@/components/Navigation/navigation'
// import Navigation from '@/components/Navigation/navigation.vue'
export default {
  components: {
    navigation,
    // Navigation
  },
  mounted() {
    if (this.$store.getters.token) {
      this.isLogin = true
    }
    this.$axios
      .get('/api/book/bookRank')
      .then((response) => {
        // console.log(response.data.result,22)
        for (var i = 0; i < response.data.result.length; i++) {
          this.bookList.push(response.data.result[i])
        }
      })
      .catch((error) => {
        console.log(error)
      })
  },
  data() {
    return {
      visible: false,
      isActive: 0,
      isLogin: false,
      //书籍分类
      bookClassify: ['全部', '文学艺术', '科幻小说', '经典小说', '影视小说', '个人成长'],
      bookList: [],
    }
  },
  methods: {
    classify(bookClassify, index) {
      console.log(bookClassify, index)
      this.isActive = index
      const bookType = bookClassify
      if (bookType == '全部') {
        this.bookList = []
        this.$axios
          .get('/api/book/bookRank')
          .then((response) => {
            // console.log(response.data.result,22)
            for (var i = 0; i < response.data.result.length; i++) {
              this.bookList.push(response.data.result[i])
            }
          })
          .catch((error) => {
            console.log(error)
          })
      } else {
        this.$axios
          .post('/api/book/bookSort', {
            bookType: bookType,
          })
          .then((response) => {
            // console.log(response.data.result, 22)
            this.bookList = response.data.result
          })
          .catch((error) => {
            console.log(error)
          })
      }
    },
    toDetail(item) {
      if (item.type == '在线阅读') {
        this.$router.push({ path: '/bookDetail', query: { bookName: item.bookName } })
      } else if (item.type == '借阅') {
        console.log(this.isLogin, 111)
        if (this.isLogin) {
          this.visible = true
        } else {
          this.$router.push({ path: '/login' })
        }
      }
    },
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
  },
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
      span {
        font-size: 18px;
        // background-color: pink;
        border-radius: 16px;
        padding: 2px 12px;
        cursor: pointer;
        margin-bottom: 12px;
        display: block;
        &:hover {
          background-color: rgb(179, 220, 236);
        }
        &.active {
          background-color: rgb(179, 220, 236);
         
        }
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
        .bookNumber {
          margin: auto 20px;
        }
        .bookImage {
          margin: 20px 20px;
          img {
            width: 150px;
            height: 150px;
          }
        }
        .introduction {
          // margin-right: 20px;
          margin: 10px 20px 10px 0;
          .name {
            font-size: 20px;
            font-weight: 700;
          }
          .writer {
            background-color: pink;
            border-radius: 14px;
            margin: 0 10px;
          }
          .more {
            margin-top: 10px;
            color: rgb(40, 125, 221);
            font-weight: 500;
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
