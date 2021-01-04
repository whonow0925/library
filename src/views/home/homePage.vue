<template>
  <div id="homePage">
    <!-- 表头start -->
    <header>
      <a-row class="header">
        <a-col :span="12">
          <img src="./images/head.jpg">
        </a-col>
        <a-col :span="12">
        </a-col>
      </a-row>
    </header>
    <!-- 表头 end -->
    <!-- 轮播图 start -->
    <div class="slideshow">
      <!-- <img class="image"
        :src="require(`./images/${imgIndex}.jpg`)"> -->
      <img class="image"
        :src="require(`./images/2.jpg`)">
    </div>
    <!-- 轮播图 end -->
    <!-- 功能区 start -->
    <div class="module">
      <a-row>
        <a-col :span="8">
          <!-- 校园新闻 start -->
          <div class="news"></div>
          <!-- 校园新闻 end -->
        </a-col>
        <a-col :span="16">
          <!-- 推荐书目 start-->
          <div class="recommendBook">
            2222
          </div>
          <!-- 推荐书目 end-->
          <!-- 服务指南 start -->
          <div class="service">
            11111
          </div>
          <!-- 服务指南 end -->
        </a-col>
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
      // images: ['./images/0.jpg', './images/1.jpg', './images/2.jpg', './images/3.jpg', './images/4.jpg'],
    }
  },
  mounted() {
    // this.imagePlay()
  },
  watch() {},
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
        }, 5000)
      }
    },
  },
}
</script>

<style scoped lang="less">
.header {
  height: 90px;
  background-color: rgb(162, 24, 20);
}
img {
  height: 90px;
  width: 600px;
}
.slideshow {
  width: 100%;
  height: 300px;
  .image {
    width: 100%;
    height: 300px;
  }
}
.news {
  width: 350px;
  height: 500px;
  border: 1px solid black;
  margin: 20px 20px;
}
.recommendBook {
  width: 700px;
  height: 280px;
  border: 1px solid black;
  margin: 20px 20px;
}
.service {
  width: 700px;
  height: 200px;
  border: 1px solid black;
  margin: 20px 20px;
}
</style>
