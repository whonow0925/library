<template>
  <div class="homePage">
    <div class="navigationBar">
      <navigation></navigation>
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
                <a-dropdown>
                  <a-button style="border-radius:12px">书籍类型</a-button>
                  <a-menu slot="overlay">
                    <a-menu-item>
                      <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">在线阅读</a>
                    </a-menu-item>
                    <a-menu-item>
                      <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">借阅书籍</a>
                    </a-menu-item>
                  </a-menu>
                </a-dropdown>
                <a-input-search placeholder="input search text" enter-button style="width:500px;margin:0 10px" />
              </div>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide class="swiper-slide">
          <div class="secondPage">
            <!-- 新书推荐 -->
            <div class="secondPageContent">
              <div class="recommend">
                <swiper :options="bookSwiperOption" class="swiper-container">
                  <swiper-slide class="swiper-slide" v-for="(item, index) in bookList" :key="index">
                    <img style="width:180px;height:180px" :src="require(`./images/${index}.jpg`)" alt="" />
                  </swiper-slide>
                </swiper>
              </div>
              <!-- 书籍排行榜 -->
              <a-row :gutter="24" type="flex" justify="center">
                <a-col :span="8">
                  <div class="bookRank">
                    <p class="title">书籍热搜榜</p>
                    <a-list item-layout="horizontal" :data-source="rangList">
                      <a-list-item slot="renderItem" slot-scope="item">
                        <a-list-item-meta :description="item.description">
                          <a slot="title" href="https://www.antdv.com/">{{ item.title }}</a>
                          <img style="width:50px;height:50px" slot="avatar" src="./images/book1.jpg" />
                        </a-list-item-meta>
                      </a-list-item>
                    </a-list>
                  </div>
                </a-col>
                <a-col :span="8">
                  <div class="lover">
                    <a-card title="猜你喜欢">
                      <a slot="extra" href="#">更多</a>
                      <div class="loverDetail"></div>
                    </a-card>
                  </div>
                </a-col>
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
                      style="width:33.3%;text-align:center;height:166px"
                      v-for="(item, index) in optionList"
                      :key="index"
                      @click="goAbout(item.name)"
                    >
                      <div style="margin:10px 20px"><img :src="require(`./images/${item.src}.png`)" /></div>
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
  data() {
    return {
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
      rangList: [
        {
          title: '四代同堂',
          description: 'dsfvaedgerhrtehtr',
          writer: 'asdfcas'
        },
        {
          title: '西游记',
          description: 'dsfvaedgerhrtehtr54654',
          writer: 'asdfcas'
        },
        {
          title: '水浒传',
          description: 'dsfvaedgerhrtehtrdsfvd',
          writer: 'asdfcas'
        },
        {
          title: '三国演义',
          description: 'dsfvaedgerhrtehttgrhnytr',
          writer: 'asdfcas'
        }
      ],
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
        // centeredSlides: true,
        slidesPerView: 'auto',
        coverflowEffect: {
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true
        },
        pagination: {
          el: '.swiper-pagination'
        }
      }
    }
  },
  methods: {
    goAbout(optionName) {
      this.$router.push({
        path: '/detailPage',
        query: {
          name: optionName
        }
      })
      // console.log(optionName,'111')
    }
  }
}
</script>

<style lang="less" scoped>
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
        display: flex;
        justify-content: center;
        align-items: center;
        width: 1200px;
        font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
        font-size: 14px;
        color: #000;
        padding: 0;
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
        overflow: auto;
        .title {
          margin-left: 20px;
          font-size: 28px;
          padding-top: 20px;
          margin-bottom: 5px;
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
