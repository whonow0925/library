<template>
  <div class="NewsManagement">
    <a-table v-if="data" :columns="columns" :data-source="data" bordered rowKey="id">
      <template slot-scope="text">
        <div >
          <div>
            {{ text }}
          </div>
        </div>
      </template>
      <!-- <template slot="operation" slot-scope="text, record"> -->
      <div slot="operation" class="operation" slot-scope="text, record">
        <a-button type="primary" class="open">查看</a-button>
        <a-button type="primary" class="edit">编辑</a-button>
        <a-button type="primary" class="danger" @click="deleteNews(record.id)">删除</a-button>
      </div>
    </a-table>
  </div>
</template>

<script>
const columns = [
  {
    title: 'id',
    dataIndex: 'id',
    width: '10%'
    // scopedSlots: { customRender: 'name' }
  },
  {
    title: '日期',
    dataIndex: 'date',
    width: '15%'
    // scopedSlots: { customRender: 'age' }
  },
  {
    title: '类型',
    dataIndex: 'type',
    width: '10%'
    // scopedSlots: { customRender: 'address' }
  },
  {
    title: '新闻/公告内容',
    dataIndex: 'content',
    width: '30%'
    // scopedSlots: { customRender: 'address' }
  },
  {
    title: '新闻标题',
    dataIndex: 'title',
    width: '25%'
    // scopedSlots: { customRender: 'address' }
  },
  {
    title: '操作',
    dataIndex: 'operation',
    scopedSlots: { customRender: 'operation' }
  }
]

// const data = []
export default {
  mounted() {
    this.showNewsRecord()
  },
  data() {
    return {
      data: [],
      columns
    }
  },
  methods: {
    showNewsRecord() {
      this.$axios
        .get('/api/news/news')
        .then(response => {
          console.log(response.data.result, 22)
          this.data = response.data.result
        })
        .catch(error => {
          console.log(error)
        })
    },
    deleteNews(key){
      console.log(key,123)
      this.$axios
        .post('/api/news/newsDelete',{
          id:key
        })
        .then(response => {
          console.log(response.data.result, 22)
          // this.data = response.data.result
          this.$message.success('删除成功')
          this.showNewsRecord()
        })
        .catch(error => {
          console.log(error)
        })
    }
  }
}
</script>

<style scoped lang="less">
.editable-row-operations a {
  margin-right: 8px;
}
.NewsManagement{
  .operation{
    .edit{
      margin: 10px auto;
    }
  }
}
</style>
