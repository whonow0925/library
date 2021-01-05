<template>
  <div id="homePage">
    <!-- 表头start -->
    <header>
      <a-row class="header">
        <a-col :span="12">
          <img src="./images/head.jpg">
          <span class="name">数字图书馆 </span>
        </a-col>
        <a-col :span="12" class="option">
          <a-dropdown>
            <a class="ant-dropdown-link" @click="e => e.preventDefault()">
              首页
            </a>
          </a-dropdown>
          <a-dropdown>
            <a class="ant-dropdown-link" @click="e => e.preventDefault()">
              在线阅读
            </a>
          </a-dropdown>
          <a-dropdown>
            <a class="ant-dropdown-link" @click="e => e.preventDefault()">
              服务
            </a>
          </a-dropdown>
          <a-dropdown>
            <a class="ant-dropdown-link" @click="e => e.preventDefault()">
              关于我们
            </a>
          </a-dropdown>
        </a-col>
      </a-row>
    </header>
    <!-- 表头 end -->
    <!-- 轮播图 start -->
    <div class="slideshow">
      <img class="image" :src="require(`./images/${imgIndex}.jpg`)">
      <!-- <img class="image"
        :src="require(`./images/2.jpg`)"> -->
    </div>
    <!-- 轮播图 end -->
    <!-- 推荐书目 start-->
    <div class="recommendBook">
      <swiper :options="swiperOption" class="swiper-container">
        <swiper-slide class="swiper-slide" v-for="(item,index) in bookList" :key="index">
          <img :src="require(`./images/${index}.jpg`)" alt="">
        </swiper-slide>

      </swiper>

    </div>
    <!-- 推荐书目 end-->
    <!-- 功能区 start -->
    <div class="module">
      <a-row>
        <a-col :span="10">
          <!-- 书籍榜单 start -->
          <div class="rangList">
            <p class="title"><img style="width:50px;height:50px" src="./images/热门推荐.png">书籍热搜榜</p>
            <a-list item-layout="horizontal" :data-source="rangList">
              <a-list-item slot="renderItem" slot-scope="item">
                <a-list-item-meta :description="item.description">
                  <a slot="title" href="https://www.antdv.com/">{{ item.title }}</a>
                  <img style="width:50px;height:50px" slot="avatar" src="./images/book1.jpg" />
                </a-list-item-meta>
              </a-list-item>
            </a-list>
          </div>
          <!-- 书籍榜单 end -->
        </a-col>
        <!-- 服务指南 start -->
        <div class="service">
          <div class="title">读者服务</div>
          <div class="function">
            <span class="phone"><img style="width:50px;height:50px" src="./images/手机.png">联系电话</span>
            <span class="phone"><img style="width:50px;height:50px" src="./images/线性图书(1).png">图书推荐</span>
            <span class="phone"><img style="width:50px;height:50px" src="./images/本子.png">预约续借</span>
            <!-- <span class="phone"><img style="width:50px;height:50px" src="./images/电话.png">联系电话</span> -->
          </div>
          <div class="function">
            <span class="phone"><img style="width:50px;height:50px" src="./images/色块－联系人.png">联系我们</span>
            <span class="phone"><img style="width:50px;height:50px" src="./images/线性图书(1).png">图书推荐</span>
            <span class="phone"><img style="width:50px;height:50px" src="./images/本子.png">预约续借</span>
          </div>
          <!-- 服务指南 end -->
        </div>
      </a-row>
    </div>
    <!-- 功能区 end -->
  </div>
</template>

<script>

export default {
  data() {
    return {
      imgIndex: 0,
      timer: null,
      bookList: ['./images/0.jpg', './images/1.jpg', './images/2.jpg', './images/3.jpg', './images/4.jpg'],
      // images: ['./images/0.jpg', './images/1.jpg', './images/2.jpg', './images/3.jpg', './images/4.jpg'],
      //轮播图
      swiperOption: {
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        coverflowEffect: {
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        },
        pagination: {
          el: '.swiper-pagination',
        },
      },
      //书籍排行榜单
      rangList: [{
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
      },]
    }
  },
  mounted() {
    // this.setLineColor()
    this.imagePlay()
  },
  // watch() {},
  methods: {
    imagePlay() {
      if (this.timer != null) {
        setInterval(this.timer)
        this.timer = null
      } else {
        this.timer = setInterval(() => {
          this.imgIndex += 1
          if (this.imgIndex > 3) {
            this.imgIndex = 0
          }
        }, 4000)
      }
    },
  },
}
</script>
<style scoped lang="less">
.header {
  width: 1200px;
  height: 90px;
  margin: 0 auto;
  background-color: rgb(162, 24, 20);
  // background-color: skyblue;
}
img {
  height: 90px;
  width: 300px;
}
.name {
  font-size: 28px;
  color: white;
  margin-left: 20px;
  font-weight: 300;
  font-weight: 500;
  // border-left: #000 solid 2px;
}
.option {
  display: flex;
  flex-direction: row;
  // flex-wrap: wrap;
  justify-content: space-between;
  padding: 30px;
  font-size: 20px;
  a {
    color: white;
  }
}
.slideshow {
  width: 1200px;
  height: 300px;
  margin: 0 auto;
  text-align: center;
  background-color: rgb(162, 24, 20);
  .image {
    width: 100%;
    height: 300px;
  }
}
.recommendBook {
  width: 1200px;
  background: rgb(162, 24, 20);
  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 14px;
  color: #000;
  margin: 10px auto;
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
.rangList {
  width: 500px;
  height: 500px;
  margin: 0 auto 0 352px;
  .title {
    font-size: 28px;
  }
}
.service {
  width: 650px;
  height: 300px;
  background-color: rgb(162, 24, 20);
  margin: 0 auto 0 900px;
  text-align: center;
  color: white;
  .title {
    font-size: 28px;
  }
  .function {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: 50px 100px;
    .phone {
      display: flex;
      flex-direction: column;
    }
  }
}
</style>
