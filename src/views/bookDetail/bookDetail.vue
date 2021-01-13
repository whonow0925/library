<template>
  <div class="bookDetail">
    <div class="title">{{ this.bookName }}</div>
    <div class="author">{{ this.author }}</div>
    <div class="introduction">{{ this.introduction }}</div>
    <div class="content">
      <a-row>
        <a-col :span="12">
          <div class="player">
            <!-- <button @click="playVoice">播放语音</button>
            <button @click="handleStop">停止播放</button>
          </div>
          <div class="radioPlayer">
            <div class="button">
              <div class="icon"></div>
            </div>
            <div class="progressBar">
              <div class="progress"></div>
            </div>
          </div> -->
            <div class="voice">
              <!-- <div @click="playVoice" class="bg voicePlay"></div> -->
              <!-- <div @click="handleStop">停止播放</div> -->
              <div class="playIcon" @click="playVoice" :style="{'backgroundImage':`url(${require(isPlaying?'./images/stop.png':'./images/start.png')})` }"></div>
              <!-- <div class="stopIcon" @click="handleStop"></div> -->
            </div>
            <!-- <audio src="/i/horse.ogg" controls="controls">
            Your browser does not support the audio element.
          </audio> -->
            <div class="text">{{ this.bookContent }}</div>
          </div></a-col
          >
        <a-col :span="12">
          <div class="cover">
            <img src="./images/1.jpg" alt="" />
          </div>
        </a-col>
      </a-row>
    </div>
  </div>
</template>

<script>
const synth = window.speechSynthesis
const msg = new SpeechSynthesisUtterance()
export default {
  data() {
    return {
      isPlaying: false,
      bookId: '',
      bookName: '',
      introduction: '',
      bookContent:
        '断舍离是不收拾的收拾法从关系轴和时间轴看物品为了维持好心情而收拾与整理术、收纳术有什么不一样筛减物品带来的自我察觉夺回被占据的空间和能量从衣柜开始，来一场自我改革吧！从不穿的衣服着手，去除自己的执念筛减物品的同时，也改变了人际关系由实践到意识的转变过程和物品成为好朋友磨砺内在的感应力东西要用才有价值',
      author: ''
    }
  },
  mounted() {
    this.bookId = this.$route.query.id
    this.bookName = this.$route.query.name
    this.introduction = this.$route.query.description
    this.author = this.$route.query.author
  },
  destroyed () {
      if(this.isPlaying){
          this.handleStop()
      }
  },
  methods: {
    playVoice() {
      if (this.isPlaying) {
        this.handleStop()
        this.isPlaying = false
       
      } else {
        this.handleSpeak(this.bookContent) // 传入需要播放的文字
        this.isPlaying = true
        
      }
    },
    // 语音播报的函数
    handleSpeak(text) {
      msg.text = text // 文字内容: 小朋友，你是否有很多问号
      msg.lang = 'zh-CN' // 使用的语言:中文
      msg.volume = 1 // 声音音量：1
      msg.rate = 1 // 语速：1
      msg.pitch = 1 // 音高：1
      synth.speak(msg) // 播放 
    },
    // 语音停止
    handleStop(e) {
      msg.text = e
      msg.lang = 'zh-CN'
      synth.cancel(msg)
    }
  }
}
</script>

<style lang="less" scoped>
.bookDetail {
  // text-align: center;
  margin: 10px auto;
  width: 80%;
  // background-color: rosybrown;
  .title {
    font-size: 40px;
    font-weight: 600;
  }
  .content {
    .voice {
      height: 62px;
      background: #fa8919;
      padding-left: 22px;
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
      margin: 20px auto;
      border-radius: 6px;
      border: 1px solid #e7e6e5;
    }
    .playIcon {
      width: 50px;
      height: 50px;
      background-image: url('./images/start.png');
      background-size: 100% 100%;
    }
    .stopIcon {
      width: 50px;
      height: 50px;
      background-image: url('./images/stop.png');
      background-size: 100% 100%;
    }
    .bg {
      background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAAAYCAYAAAAF6fiUAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NzlFRDZDRDNENzlFMTFFNkJDN0NFMjA2QTFFRTRDQkIiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NzlFRDZDRDJENzlFMTFFNkJDN0NFMjA2QTFFRTRDQkIiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MTAxQkEzQ0RENzM2MTFFNjgyMEI5MTNDRkQ0OTM5QUEiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MTAxQkEzQ0VENzM2MTFFNjgyMEI5MTNDRkQ0OTM5QUEiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4K4iKVAAACUUlEQVR42uSazytEURTHvTHjR4kaU8xsSDZSdmbjx4oSK8XGQrJlpSwYTSmxEWWhUIpsZK3kD7DRNBuSBZFCNjZ+JPKcV6ecXu/d3sy7595bc+vbfXPue5/749z77o83lm3bZYYFC8RZqAbQAigP2tXNj5aZF7gdkAZNk9+7WvnOCCgxRUCb9n/o1sk3pUH6QDHF/GNsoM+QeYfiy6qkFeLZDBb0GlTB4AAR/xXT9nXxZVa0WCekQd9Y0HOJjg3CHySviiZmfjO3AyIhnu0gBc0wjAIR/wLtW8z87aAOWAI9gqaYRoAff4ZUoi7EKCiUP462j4CdSCrfK4N1Ahpi6I0i/hPa50M4oFB+Dbm/SzXfL5MD4rUogxP8+Itozynm59E+q5ovyuQdHxphWh568XvR5kxq1SEn40L4e0XMA1L4EcEe7RTjLqYdqRf/gezQUwr5LxjXq+aLHPCFcTmTA7z4tutIQhXfLiJPKXyRA/oxzgW8v9DgxU+S62eF/ATGr6r5fg26Corj9RHD4Z0fvwfjS9CbQn4bxrfK+R6TyzxZNk260solTL4i/g3al10TsMXIryA72T7VfK8MnJO8X9CKy14lafXjxx8jFUsSeyUzfxhtPwHPoqTy/TJJMJzJiPgNpJdsuNJizPwztB/q4JtwHN2KW3sn3HuMOouR30l6bbsOvgkOyGIBnaPbRldalJl/h2knuvgmOKAWNAFKMUz4Iv4O6Z1xXXxTPxtazHy6khnVyS/Fb8IDpHGyuvmWgX9L4Q4toDnQFWhNN/9PgAEAR4w1ULjdCbEAAAAASUVORK5CYII=)
        right 0 no-repeat;
      width: 24px;
      height: 24px;
      background-size: 400%;
    }

    .voicePlay {
      animation-name: voicePlay;
      animation-duration: 1s;
      animation-direction: normal;
      animation-iteration-count: infinite;
      animation-timing-function: steps(3);
    }

    @keyframes voicePlay {
      0% {
        background-position: 0;
      }
      100% {
        background-position: 100%;
      }
    }
    // .radioPlayer {
    //   height: 62px;
    //   background: #fefdfc;
    //   padding-left: 22px;
    //   display: -webkit-box;
    //   display: -ms-flexbox;
    //   display: flex;
    //   -webkit-box-align: center;
    //   -ms-flex-align: center;
    //   align-items: center;
    //   margin-top: 33px;
    //   border-radius: 6px;
    //   border: 1px solid #e7e6e5;
    //   .button {
    //     border-radius: 50%;
    //     width: 38px;
    //     height: 38px;
    //     border: 1px solid #fa8919;
    //     position: relative;
    //     cursor: pointer;
    //     overflow: hidden;
    //   }
    //   .progressBar {
    //     -webkit-box-flex: 1;
    //     -ms-flex: 1 1 auto;
    //     flex: 1 1 auto;
    //     margin-left: 22px;
    //     height: 62px;
    //     border-radius: 3px;
    //     .progress {
    //       margin-top: 18px;
    //       padding-right: 61px;
    //       position: relative;
    //     }
    //   }
    // }
    .cover {
      text-align: right;
    }
  }
}
</style>
