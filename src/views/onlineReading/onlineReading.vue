<template>
  <div class="onlineReading">
    <div class="bookCard">
      <a-card
        hoverable
        style="width: 300px;margin:40px;border-radius:36px;"
        v-for="(item, index) in bookList"
        :key="index"
      >
        <img slot="cover" alt="example" :src="require(`./images/${item.imageName}.jpg`)" />
        <template slot="actions" class="ant-card-actions">
          <div @click="showModal">在线阅读</div>
          <div>借阅</div>
          <div @click="showEvaluate">评价</div>
        </template>
        <a-card-meta :title="item.bookName" :description="item.description"> </a-card-meta>
      </a-card>
    </div>
    <!-- 在线阅读弹窗 -->
    <div class="reading">
      <a-modal v-model="visible" title="Basic Modal" @ok="handleOk" mask>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </a-modal>
    </div>
    <!-- 借阅弹窗 -->
    <div class="borrow">
      <a-modal v-model="visible" title="Basic Modal" @ok="handleOk" mask>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </a-modal>
    </div>
    <!-- 评价弹窗 -->
    <div class="evaluate">
      <a-modal v-model="isEvaluate" title="Basic Modal" @ok="handleOk" mask>
        <a-comment>
          <template slot="actions">
            <span key="comment-basic-like">
              <a-tooltip title="Like">
                <a-icon type="like" :theme="action === 'liked' ? 'filled' : 'outlined'" @click="like" />
              </a-tooltip>
              <span style="padding-left: '8px';cursor: 'auto'">
                {{ likes }}
              </span>
            </span>
            <span key="comment-basic-dislike">
              <a-tooltip title="Dislike">
                <a-icon type="dislike" :theme="action === 'disliked' ? 'filled' : 'outlined'" @click="dislike" />
              </a-tooltip>
              <span style="padding-left: '8px';cursor: 'auto'">
                {{ dislikes }}
              </span>
            </span>
            <span key="comment-basic-reply-to">Reply to</span>
          </template>
          <a slot="author">Han Solo</a>
          <a-avatar
            slot="avatar"
            src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
            alt="Han Solo"
          />
          <p slot="content">
            We supply a series of design principles, practical patterns and high quality design resources (Sketch and
            Axure), to help people create their product prototypes beautifully and efficiently.
          </p>
          <!-- <a-tooltip slot="datetime" :title="moment().format('YYYY-MM-DD HH:mm:ss')">
            <span>{{ moment().fromNow() }}</span>
          </a-tooltip> -->
        </a-comment>
      </a-modal>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isEvaluate: false,
      likes: 0,
      dislikes: 0,
      action: null,
      // moment,
      visible: false,
      bookList: [
        {
          imageName: '数据结构',
          bookName: '数据机构',
          description: 'sdfvgsdafgbdah'
        },
        {
          imageName: 'JavaScript',
          bookName: 'JavaScript',
          description: 'dsgfdzcxvfdhbf'
        },
        {
          imageName: '天才在左疯子在右',
          bookName: '天才在左 疯子在右',
          description: 'dsgfdzcxvfdhbf'
        },
        {
          imageName: 'JavaScript',
          bookName: 'JavaScript',
          description: 'dsgfdzcxvfdhbf'
        },
        {
          imageName: '数据结构',
          bookName: '数据机构',
          description: 'sdfvgsdafgbdah'
        },
        {
          imageName: '数据结构',
          bookName: '数据机构',
          description: 'sdfvgsdafgbdah'
        },
        {
          imageName: '数据结构',
          bookName: '数据机构',
          description: 'sdfvgsdafgbdah'
        },
        {
          imageName: '数据结构',
          bookName: '数据机构',
          description: 'sdfvgsdafgbdah'
        },
        {
          imageName: '数据结构',
          bookName: '数据机构',
          description: 'sdfvgsdafgbdah'
        },
        {
          imageName: '数据结构',
          bookName: '数据机构',
          description: 'sdfvgsdafgbdah'
        },
        {
          imageName: '数据结构',
          bookName: '数据机构',
          description: 'sdfvgsdafgbdah'
        }
      ]
    }
  },
  methods: {
    showModal() {
      this.visible = true
    },
    showEvaluate() {
      this.isEvaluate = true
    },
    like() {
      this.likes = 1
      this.dislikes = 0
      this.action = 'liked'
    },
    dislike() {
      this.likes = 0
      this.dislikes = 1
      this.action = 'disliked'
    },
    handleOk() {
      ;(this.visible = false), (this.isEvaluate = false)
    }
  }
}
</script>

<style lang="less" scoped>
.onlineReading {
  // position: absolute;
  height: 100vh;
  // background-image: url('./images/首页2.png');
  background-repeat: no-repeat;
  background-size: 100% 100%;
  .bookCard {
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
