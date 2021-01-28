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
              <div class="bookImage"><img :src="item.image" alt="" /></div>
              <div class="introduction">
                <ul>
                  <li class="name">{{ item.bookName }}</li>
                  <span class="writer">{{ item.writer }} </span>
                  <span class="writer">{{ item.press }}</span>
                  <span class="writer">{{ item.bookType }}</span>
                  <li>简介：{{ item.describe }}</li>
                  <li class="more" @click="toDetail(item, index)">
                    <span>{{ item.type }}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </a-col>
      </a-row>
    </div>
    <div v-if="bookList[bookId]">
      <a-modal v-model="visible" :title="`是否借阅 ${bookList[bookId].bookName}`" :footer="null">
        <a-form :form="form" :label-col="{ span: 8 }" :wrapper-col="{ span: 12 }" @submit="handleSubmit">
          <a-form-item label="用户名">
            <a-input
              v-decorator="['userName', { rules: [{ required: true, message: 'Please input your userName!' }] }]"
            />
          </a-form-item>
          <a-form-item label="电话号码">
            <a-input
              v-decorator="['phone', { rules: [{ required: true, message: 'Please input your phoneNumber!' }] }]"
            />
          </a-form-item>
          <a-form-item label="借阅时间">
            <a-range-picker @change="onChange" v-model="borrowedTime">
              <template slot="dateRender" slot-scope="current">
                <div class="ant-calendar-date" :style="getCurrentStyle(current)">
                  {{ current.date() }}
                </div>
              </template>
            </a-range-picker>
          </a-form-item>
          <a-form-item :wrapper-col="{ span: 12, offset: 10 }">
            <a-button type="primary" html-type="submit">
              确认借阅
            </a-button>
          </a-form-item>
        </a-form>
      </a-modal>
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
    // console.log(this.$store.getters,9999)
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
      bookId: 1,
      formLayout: 'horizontal',
      form: this.$form.createForm(this, { name: 'coordinated' }),
      visible: false,
      isActive: 0,
      isLogin: false,
      //书籍分类
      bookClassify: ['全部', '文学艺术', '科幻小说', '经典小说', '影视小说', '个人成长'],
      bookList: [],
      borrowedTime: [],
      //借阅信息
      bookName: '',
      userName: '',
      phone: '',
      startTime: '',
      endTime: ''
    }
  },
  methods: {
    //Modal的校验规则
    handleSubmit(e) {
      console.log(e, 111)
      e.preventDefault()
      this.form.validateFields((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values)
          this.userName = values.userName
          this.phone = values.phone
        }
      })
      //判断是否登录
      const userName = this.userName
      const phone = this.phone
      const startTime = this.startTime
      const endTime = this.endTime
      const borrowedBookName = this.bookName
      if (this.isLogin) {
        this.$axios
          .post('/api/book/borrowedBook', {
            userName: userName,
            phone: phone,
            startTime: startTime,
            endTime: endTime,
            borrowedBookName: borrowedBookName
          })
          .then(response => {
            console.log(response, 345)
            this.$message.success(response.data.msg)
            this.resetFrom()
            this.visible = false
          })
          .catch(error => {
            console.log(error)
          })
      }
    },
    //日期
    getCurrentStyle(current, today) {
      const style = {}
      if (current.date() === 1) {
        style.border = '1px solid #1890ff'
        style.borderRadius = '50%'
      }
      return style
    },
    onChange(date, dateString) {
      console.log(date, dateString, 555)
      this.startTime = dateString[0]
      this.endTime = dateString[1]
    },
    classify(bookClassify, index) {
      console.log(bookClassify, index)
      this.isActive = index
      const bookType = bookClassify
      if (bookType == '全部') {
        this.bookList = []
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
      } else {
        this.$axios
          .post('/api/book/bookSort', {
            bookType: bookType
          })
          .then(response => {
            // console.log(response.data.result, 22)
            this.bookList = response.data.result
          })
          .catch(error => {
            console.log(error)
          })
      }
    },
    toDetail(item, index) {
      if (this.isLogin) {
        if (item.type == '在线阅读') {
          this.$router.push({ path: '/bookDetail', query: { id: item.bookId, bookName: item.bookName } })
        } else if (item.type == '借阅') {
          console.log(this.isLogin, 111)
          this.borrowedTime = []
          this.visible = true
          this.bookId = index
          this.bookName = item.bookName
        }
      } else {
        this.$message.warning('请先去前往登录')
        this.$router.push({ path: '/login' })
      }
    },
    resetFrom() {
      this.form.resetFields()
    }
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
            width: 140px;
            height: 170px;
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
            font-size: 15px;
            margin-top: 10px;
            color: rgb(40, 125, 221);
            font-weight: 500;
            cursor: pointer;
            // &:hover {
            //   color: pink;
            // }
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
