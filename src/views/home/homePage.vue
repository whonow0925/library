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
      <img class="image"
        :src="require(`./images/${imgIndex}.jpg`)">
      <!-- <img class="image"
        :src="require(`./images/2.jpg`)"> -->
    </div>
    <!-- 轮播图 end -->
    <!-- 推荐书目 start-->
    <div class="recommendBook">
      <div class="imgList">
        <ul>
          <li class="list1"><img src="./images/0.jpg"
              alt=""></li>
          <li class="list2"><img src="./images/1.jpg"
              alt=""></li>
          <li class="list3"><img src="./images/2.jpg"
              alt=""></li>
          <li class="list4"><img src="./images/3.jpg"
              alt=""></li>
          <li class="list5"><img src="./images/4.jpg"
              alt=""></li>
        </ul>
      </div>
      <div class="line">
        <span></span>
        <span style="margin:0 10px"></span>
        <span></span>
        <span style="margin:0 10px"></span>
        <span></span>
        <span style="margin:0 10px"></span>
      </div>
      <div class="btnleft">《</div>
      <div class="btnright">》</div>
    </div>
    <!-- 推荐书目 end-->
    <!-- 功能区 start -->
    <div class="module">
      <a-row>
        <a-col :span="8">
          <!-- 校园新闻 start -->
          <div class="news"></div>
          <!-- 校园新闻 end -->
        </a-col>
        <!-- 服务指南 start -->
        <div class="service">
        </div>
        <!-- 服务指南 end -->
      </a-row>
    </div>
    <!-- 功能区 end -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      aLiName: ['list1', 'list2', 'list3', 'list4', 'list5', 'list6'],
      index: 0,
      imgIndex: 0,
      timer: null,
      bookList: ['./images/0.jpg', './images/1.jpg', './images/2.jpg', './images/3.jpg', './images/4.jpg'],
      // images: ['./images/0.jpg', './images/1.jpg', './images/2.jpg', './images/3.jpg', './images/4.jpg'],
    }
  },
  mounted() {
    this.setLineColor()
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
    setLineColor() {
      var aSpan = document.querySelectorAll('span')
      for (var i = 0; i < aLi.length; i++) {
        aSpan[i].style.backgroundColor = '#ccc'
      }
      aSpan[this.index].style.backgroundColor = '#45c17c'
    },
    nextPic() {
      var aLi = document.querySelectorAll('li')
      this.aLiName.unshift(this.aLiName[5]) //把最后一个值放到第一的位置
      this.aLiName.pop() //删除最后一个值
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
  text-align: center;
  background-color: rgb(162, 24, 20);
  .image {
    width: 100%;
    height: 300px;
  }
}
.recommendBook {
  position: relative;
  width: 1200px;
  height: 367px;
  background-color: rgb(162, 24, 20);
  margin: 80px auto 0px;
  .btnleft {
    top: 50%;
    margin-top: -25px;
    left: 0;
    position: absolute;
    width: 50px;
    height: 50px;
    background-color: rgba(0, 0, 0, 0.3);
    font-size: 22px;
    //水平居中
    text-align: center;
    //垂直居中
    line-height: 50px;
    z-index: 3;
  }
  .btnright {
    top: 50%;
    margin-top: -25px;
    right: 0;
    position: absolute;
    width: 50px;
    height: 50px;
    background-color: #000;
    background-color: rgba(0, 0, 0, 0.3);
    font-size: 22px;
    //水平居中
    text-align: center;
    //垂直居中
    line-height: 50px;
    z-index: 3;
  }
}
.imgList {
  width: 1200px;
  height: 336px;
  // background-color: skyblue;
  ul {
    position: relative;
    overflow: hidden;
    width: 100%;
    height: 100%;
    li {
      position: absolute;
      width: 730px;
      height: 336px;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
}
.line {
  width: 1200px;
  height: 31px;
  // background-color: #00ff00;
  text-align: center;
  span {
    display: inline-block;
    width: 35px;
    height: 3px;
    background-color: #ccc;
  }
}
ul {
  margin: 0;
  padding-left: 0;
  list-style: none;
}
.list1 {
  z-index: 1;
  //元素缩小
  transform: scale(0.81);
  //变化圆点（移动中心）transform-origin: 横坐标 纵坐标;
  transform-origin: 0% 100%;
}
.list2 {
  transform: translateX(235px);
  z-index: 2;
}
.list3 {
  z-index: 1;
  transform: translateX(730px) scale(0.81);
  transform-origin: 100% 100%;
}
.list4 {
  transform: translateX(965px) scale(0.81);
  transform-origin: 100% 100%;
}
.list5 {
  transform: translateX(1200px) scale(0.81);
  transform-origin: 100% 100%;
}
.list6 {
  transform: translateX(1435px) scale(0.81);
  transform-origin: 100% 100%;
}
</style>
