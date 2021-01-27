<template>
  <div class="homePage">
    <div class="navigationBar">
      <navigation :isLogin="isLogin"></navigation>
    </div>
    <div class="swiper-container">
      <swiper class="swiper-wrapper" :options="swiperOption">
        <swiper-slide class="swiper-slide">
          <!-- 轮播图第一页（首页） -->
          <div class="firstPage">
            <!-- 导航栏 -->
            <div class="logo">
              <div class="logo-title">
                <span class="logo-img">
                  <img src="./images/JIZHUlogo.png" alt="" />
                </span>
                <div class="logo-text">
                  <!-- <p>吉林大学珠海学院 数字图书馆</p>
                  <p>JLZHUNIVERSITY LIBRARY</p> -->
                  <img src="./images/title.png" alt="" />
                </div>
              </div>
              <div class="search">
                <div class="icons-list">
                  <a-icon type="smile" theme="twoTone" />
                  <a-icon type="heart" theme="twoTone" two-tone-color="#eb2f96" />
                  <a-icon type="check-circle" theme="twoTone" two-tone-color="#52c41a" />
                </div>
                <div class="search-box" style="width: 500px; margin: 0 10px">
                  <a-input-search
                    placeholder="输入想要查找的书籍"
                    v-model="searchBookName"
                    @search="onSearch"
                    @change="pressChange"
                  />
                  <div class="searchResult" v-if="searchResult.length > 0">
                    <ul v-if="searchResult.length > 0">
                      <li @click="toDetail(item)" v-for="item in searchResult" :key="item.bookId">
                        {{ item.bookName }}
                      </li>
                    </ul>
                  </div>
                  <div v-if="searchResultMessage" class="searchResultMessage">
                    <ul>
                      <li>{{ searchResultMessage }}</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide class="swiper-slide">
          <div class="secondPage">
            <!-- 新书推荐 -->
            <div class="secondPageContent">
              <div class="recommend">
                <!-- <swiper :options="bookSwiperOption" class="swiper-container">
                  <swiper-slide class="swiper-slide" v-for="(item, index) in bookList" :key="index">
                    <img style="width:180px;height:180px" :src="require(`./images/${index}.jpg`)" alt="" />
                  </swiper-slide>
                </swiper> -->
                <swiper :options="bookSwiperOption" class="swiper-container">
                  <swiper-slide class="swiper-slide"><img src="./images/recommend1.png" alt=""/></swiper-slide>
                  <swiper-slide class="swiper-slide"><img src="./images/recommend2.png" alt=""/></swiper-slide>
                  <swiper-slide class="swiper-slide"><img src="./images/recommend3.png" alt=""/></swiper-slide>
                  <swiper-slide class="swiper-slide"><img src="./images/recommend4.png" alt=""/></swiper-slide>
                  <swiper-slide class="swiper-slide"><img src="./images/recommend1.png" alt=""/></swiper-slide>
                  <swiper-slide class="swiper-slide"><img src="./images/recommend2.png" alt=""/></swiper-slide>
                  <swiper-slide class="swiper-slide"><img src="./images/recommend3.png" alt=""/></swiper-slide>
                  <swiper-slide class="swiper-slide"><img src="./images/recommend4.png" alt=""/></swiper-slide>
                </swiper>
              </div>
              <!-- 书籍排行榜 -->
              <a-row :gutter="24" type="flex" justify="center">
                <a-col :span="18">
                  <div class="bookRank">
                    <div class="title">
                      <a-icon type="like" />
                      <a class="title">书籍热搜榜</a>
                    </div>
                    <!-- <a-list item-layout="horizontal" :data-source="rankList">
                      <a-list-item slot="renderItem" slot-scope="item">
                        <a-list-item-meta :description="item.description">
                          <a slot="title" href="https://www.antdv.com/">{{ item.title }}</a>
                          <img style="width:50px;height:50px" slot="avatar" src="./images/book1.jpg" />
                        </a-list-item-meta>
                      </a-list-item>
                    </a-list> -->
                    <div class="book">
                      <div id="content">
                        <ul v-for="(item, index) in rankList" :key="index">
                          <li>
                            <span>{{ index + 1 }}</span>
                            <span class="bookName">{{ item.bookName }}</span>
                            <span>{{ item.writer }}</span>
                            <span
                            >简介：{{
                              item.describe.length > 38 ? item.describe.slice(0, 38) + '...' : item.describe
                            }}</span
                            >
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </a-col>
                <!-- <a-col :span="8">
                  <div class="lover">
                    <a-card title="猜你喜欢">
                      <a slot="extra" href="#">更多</a>
                      <div class="loverDetail"></div>
                    </a-card>
                  </div>
                </a-col> -->
              </a-row>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide class="swiper-slide">
          <div class="thirdPage">
            <div class="thirdPageContent">
              <a-row :gutter="24" type="flex" justify="center">
                <a-col :span="12">
                  <a-card title="关于我们" class="about">
                    <a slot="extra" href="#">more</a>
                    <img class="aboutImage" src="./images/首页.jpg" alt="" />
                    <p>
                      吉林大学珠海学院（Zhuhai College of Jilin
                      University），简称“吉珠”，坐落于经济特区广东省珠海市，处于粤港澳大湾区腹地，是由吉林大学与珠海市华政教育投资有限公司合作建设的独立学院
                    </p>
                    <p>
                      吉林大学珠海学院图书馆的前身为吉林大学珠海校区图书馆，随着吉林大学珠海软件学院于2003年9月成立于9月8日正式开馆.吉林大学珠海学院新图书馆在学院董事长和学院领导的高度重视下，在全院读者的期盼下，于2009年9月正式投入使用。建筑面积54000平方米。
                    </p>
                  </a-card>
                </a-col>
                <a-col :span="12">
                  <a-card class="optionCard">
                    <a-card-grid
                      style="width: 33.3%; text-align: center; height: 166px"
                      v-for="(item, index) in optionList"
                      :key="index"
                      @click="goAbout(item.name)"
                    >
                      <div style="margin: 10px 20px"><img :src="require(`./images/${item.src}.png`)" /></div>
                      <p>{{ item.name }}</p>
                    </a-card-grid>
                  </a-card>
                </a-col>
              </a-row>
            </div>
          </div>
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
      <!-- Add Pagination -->
    </div>
  </div>
</template>

<script>
import navigation from '@/components/Navigation/navigation'
export default {
  components: {
    navigation
  },
  watch: {
    rankTop(val) {
      // console.log(val,55)
      // document.getElementById('content').style.top = `${val}px`
      if (val < this.rankList.length * -35) {
        // console.log('该停止啦')
        clearInterval(this.timer)
        this.timer = null
        this.rankTop = 0
        this.setTimer(this.timer)
      }
    }
  },
  mounted() {
    // console.log(this.$store.getters)
    if (this.$store.getters.token) {
      this.isLogin = true
    }
    this.$axios
      .get('/api/book/bookRank')
      .then(response => {
        // console.log(response.data.result,22)
        for (var i = 0; i < response.data.result.length; i++) {
          this.rankList.push(response.data.result[i])
        }
      })
      .catch(error => {
        console.log(error)
      })
    this.setTimer(this.timer)
  },
  data() {
    return {
      searchResultMessage: '',
      //查询结果
      searchResult: [],
      searchBookName: '',
      //定时器参数
      timer: null,
      //列表滚动top值
      rankTop: 0,
      isLogin: false,
      //被选中服务的index下标数
      // optionNumber: 1,
      // 服务列表
      optionList: [
        {
          name: '开放时间',
          src: '时间'
        },
        {
          name: '交通指南',
          src: '交通(1)'
        },
        {
          name: '馆舍平面',
          src: '平面图设计'
        },
        {
          name: '入馆须知',
          src: '须知'
        },
        {
          name: '项目服务',
          src: '服务'
        },
        {
          name: '借阅规则',
          src: '规则'
        },
        {
          name: '吉珠新闻',
          src: '新闻报纸，new'
        },
        {
          name: '发展规划',
          src: '规划'
        },
        {
          name: '联系我们',
          src: '媒体报道'
        }
      ],
      //书籍排行榜单
      rankList: [],
      bookList: [
        './images/0.jpg',
        './images/1.jpg',
        './images/2.jpg',
        './images/3.jpg',
        './images/4.jpg',
        './images/5.jpg',
        './images/6.jpg',
        './images/7.jpg'
      ],
      //猜你喜欢的书籍
      loverList: [],
      swiperOption: {
        direction: 'vertical',
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        }
      },
      bookSwiperOption: {
        autoplay: true,
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        coverflowEffect: {
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true
        },
        // pagination: {
        //   el: '.swiper-pagination'
        // }
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      }
    }
  },
  methods: {
    toDetail(item) {
      this.$router.push({ path: '/bookDetail', query: { id: item.bookId, bookName:item.bookName}  })
    },
    goAbout(optionName) {
      this.$router.push({
        path: '/detailPage',
        query: {
          name: optionName
        }
      })
      // console.log(optionName,'111')
    },
    // 书籍查找
    onSearch(value) {
      this.searchResultMessage = ''
      this.searchResult = []
      console.log(value)
      if (value) {
        const bookName = value
        this.$axios
          .post('/api/book/searchBook', {
            bookName: bookName
          })
          .then(response => {
            console.log(response.data.result, 4444)
            if (response.data.result) {
              for (var i = 0; i < response.data.result.length; i++) {
                this.searchResult.push(response.data.result[i])
              }
            } else {
              // this.$message.warning(response.data.msg)
              this.searchResultMessage = response.data.msg
              // console.log( this.searchResultMessage)
            }
            this.searchBookName = ''
          })
          .catch(error => {
            console.log(error)
          })
      }
    },
    pressChange() {
      this.searchResult = []
      this.searchResultMessage = ''
    },
    setTimer() {
      if (this.timer == null) {
        this.timer = setInterval(() => {
          this.rankTop -= 5
        }, 500)
      }
    }
  },
  destroyed() {
    clearInterval(this.timer)
    this.timer = null
  }
}
</script>

<style lang="less" scoped>
.icons-list /deep/ .anticon {
  margin-right: 6px;
  font-size: 24px;
}
.ant-btn-primary {
  background-color: skyblue;
  border-radius: 10px;
}
.ant-list-item-meta {
  margin-left: 20px;
}
img {
  display: block;
  width: 100%;
  height: auto;
}
.homePage {
  position: relative;
  height: 100%;
}
.homePage {
  background: #eee;
  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 14px;
  color: #000;
  margin: 0;
  padding: 0;
}
.swiper-pagination {
  position: absolute;
  top: 300px;
  right: 50px;
}
.swiper-container {
  width: 100%;
  height: 100%;
  position: relative;
}
.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;

  /* Center slide text vertically */
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
  .firstPage {
    width: 100%;
    height: 100%;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    // background-attachment:fixed;
    // opacity: 0.5;
    background-image: url(./images/首页2.png);
    .logo {
      position: relative;
      top: 50%;
      transform: translateY(-50%);
      p {
        font-size: 24px;
        font-weight: 500;
        color: white;
        margin: 0;
      }
      .logo-title {
        display: flex;
        flex-direction: row;
        margin-bottom: 40px;
        justify-content: center;
        .logo-img {
          display: block;
          width: 130px;
          margin-right: 20px;
        }
        .logo-text {
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
      }
    }
    .search {
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      .search-box {
        position: relative;
        .searchResult::-webkit-scrollbar {
          width: 0;
          height: 0;
        }
        .searchResult {
          margin: 10px auto;
          width: 100%;
          // height: 108px;
          overflow: auto;
          position: absolute;
          top: 26px;
          left: 0;
          background-color: #fff;
          display: flex;
          opacity: 0.7;
          // justify-content: center;
          // align-items: center;
          border-radius: 12px;
          ul {
            margin: 0;
            padding: 0;
          }
          li {
            // margin-top: 12px;
            // width: 100%;
            // height: 100px;
            margin-left: 10px;
            background-color: white;
            // border-radius: 5px;
            // color: white;
            display: flex;
            justify-content: space-around;
            cursor: pointer;
            &:hover {
              color: blue;
            }
          }
        }
        .searchResultMessage {
          margin: 10px auto;
          width: 100%;
          // height: 108px;
          overflow: auto;
          position: absolute;
          top: 26px;
          left: 0;
          background-color: #fff;
          display: flex;
          opacity: 0.7;
          justify-content: center;
          align-items: center;
          border-radius: 12px;
          ul {
            margin: 0;
            padding: 0;
          }
          li {
            margin-left: 10px;
            background-color: white;
            display: flex;
            justify-content: space-around;
            cursor: pointer;
          }
        }
      }
    }
  }
  .secondPage {
    width: 100%;
    height: 100%;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    // background-attachment:fixed;
    // opacity: 0.5;
    background-image: url(./images/首页2.png);
    .secondPageContent {
      position: relative;
      top: 50%;
      transform: translateY(-50%);
      .recommend {
        // display: flex;
        // justify-content: center;
        // align-items: center;
        // width: 1200px;
        // font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
        // font-size: 14px;
        // color: #000;
        // padding: 0;
        margin: 0 auto;
        width: 80%;
        .swiper-container {
          overflow: hidden;
          width: 100%;
          // height: 300px;
          padding-top: 40px;
          padding-bottom: 40px;
        }
        .swiper-slide {
          width: 300px;
          height: 200px;
          img {
            width: 100%;
            height: 100%;
            overflow: hidden;
          }
        }
      }
      .bookRank {
        background-color: white;
        opacity: 0.9;
        border-radius: 12px;
        width: 100%;
        // height: 380px;
        text-align: left;
        height: 250px;
        // height: calc(100%-10px);
        // position: relative;
        // overflow: hidden;
        // position: absolute;
        .title {
          margin-left: 20px;
          font-size: 28px;
          padding-top: 20px;
          margin-bottom: 5px;
          color: skyblue;
          font-weight: 800;
        }
        .book {
          font-size: 15px;
          height: 180px;
          position: relative;
          overflow: hidden;
          #content {
            position: relative;
            top: 0px;
            // transition: 0.3s all ease-in-out;
            //动画
            animation: slide 7s infinite;
            @keyframes slide {
              0% {
                top: 0px;
              }
              100% {
                top: -40%;
              }
            }
            span {
              margin: 5px 10px;
            }
            .bookName {
              background: pink;
              border-radius: 10px;
            }
          }
        }
      }
      .lover {
        width: 100%;
        margin-top: 10px;
        border-radius: 12px;
        opacity: 0.8;
      }
    }
  }
  .thirdPage {
    width: 100%;
    height: 100%;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    // background-attachment:fixed;
    // opacity: 0.5;
    background-image: url(./images/首页2.png);
    .thirdPageContent {
      display: flex;
      justify-content: center;
      align-items: center;
      padding-top: 58px;
      .about {
        width: 500px;
        height: 500px;
        // margin: 200px 0 auto 400px;
        border-radius: 16px;
        .aboutImage {
          width: 400px;
          height: 200px;
          margin-bottom: 10px;
          margin-left: 25px;
        }
      }
      .optionCard {
        width: 500px;
        height: 500px;
        // margin: 200px 0 auto 10px;
        p {
          font-size: 14px;
          font-weight: 600;
        }
        img {
          width: 70px;
          height: 70px;
        }
      }
    }
  }
}
// .navigationBar {
//   width: 100%;
//   height: 50px;
//   background-color: white;
//   // opacity: 0.8;
//   // display: inline-block;
//   display: flex;
//   justify-content: space-between;
//   flex-direction: inherit;
//   position: fixed;
//   top: 0;
//   z-index: 3;
//   .btn {
//     margin: 10px;
//   }
// }
</style>
