<template>
  <div class="NewsManagement">
    <a-button type="primary" class="addNews" @click="addNews">新增</a-button>
    <a-table class="newsTable"
             v-if="data"
             :columns="columns"
             :data-source="data"
             bordered
             rowKey="id">
      <template slot="content" slot-scope="record">
        <span>{{ record.length > 40 ? record.slice(0, 40) + '...' : record }}</span>
      </template>
      <!-- <template slot="operation" slot-scope="text, record"> -->
      <div slot="operation" class="operation" slot-scope="text, record">
        <a-button type="primary" class="open" @click="openNews(record)">查看</a-button>
        <a-button type="primary" class="edit" @click="editNews(record)">编辑</a-button>
        <a-button type="primary" class="danger" @click="deleteNews(record.id)">删除</a-button>
      </div>
    </a-table>
    <div class="Modal">
      <a-modal :title="`${this.title}新闻/公告`" :visible="visible" :footer="null" @cancel="handleCancel">
        <a-form :form="form" :label-col="{ span: 5 }" :wrapper-col="{ span: 17 }" @submit="handleSubmit">
          <a-form-item label="id">
            <a-input
              :disabled="this.isDisabled"
              v-decorator="['id', { rules: [{ required: true }], initialValue: this.currentData.id }]"
            />
          </a-form-item>
          <a-form-item label="日期">
            <a-input
              :disabled="this.isDisabled"
              v-decorator="[
                'date',
                { rules: [{ required: true, message: '请输入日期' }], initialValue: this.currentData.date }
              ]"
            />
          </a-form-item>
          <a-form-item label="类型">
            <a-input
              :disabled="this.isDisabled"
              v-decorator="[
                'type',
                { rules: [{ required: true, message: '请输入类型' }], initialValue: this.currentData.type }
              ]"
            />
          </a-form-item>
          <a-form-item label="标题">
            <a-input
              :disabled="this.isDisabled"
              v-decorator="[
                'title',
                { rules: [{ required: true, message: '请输入标题' }], initialValue: this.currentData.title }
              ]"
            />
          </a-form-item>
          <a-form-item label="内容">
            <a-input
              type="textarea"
              :disabled="this.isDisabled"
              v-decorator="[
                'content',
                { rules: [{ required: true, message: '新输入内容' }], initialValue: this.currentData.content }
              ]"
            />
          </a-form-item>
          <a-form-item v-if="this.title !== '查看'" :wrapper-col="{ span: 12, offset: 10 }">
            <a-button type="primary" html-type="submit">
              Submit
            </a-button>
          </a-form-item>
        </a-form>
      </a-modal>
    </div>
  </div>
</template>

<script>
const columns = [
  {
    title: 'id',
    dataIndex: 'id',
    width: '10%',
    scopedSlots: { customRender: 'id' }
  },
  {
    title: '日期',
    dataIndex: 'date',
    width: '15%',
    scopedSlots: { customRender: 'date' }
  },
  {
    title: '类型',
    dataIndex: 'type',
    width: '10%',
    scopedSlots: { customRender: 'type' }
  },
  {
    title: '新闻/公告内容',
    dataIndex: 'content',
    width: '30%',
    scopedSlots: { customRender: 'content' }
  },
  {
    title: '新闻标题',
    dataIndex: 'title',
    width: '25%',
    scopedSlots: { customRender: 'title' }
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
      isDisabled: false,
      //modal 的标题
      title: '',
      currentData: [],
      data: [],
      columns,
      ModalText: 'Content of the modal',
      visible: false,
      confirmLoading: false,
      formLayout: 'horizontal',
      form: this.$form.createForm(this, { name: 'coordinated' })
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
    addNews() {
      this.visible = true
      this.title = '新增'
    },
    deleteNews(key) {
      console.log(key, 123)
      this.$axios
        .post('/api/news/newsDelete', {
          id: key
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
    },
    openNews(record) {
      console.log(record, 1234)
      this.title = '查看'
      this.isDisabled = true
      this.currentData = record
      this.showModal()
    },
    editNews(record) {
      this.title = '编辑'
      this.isDisabled = false
      this.currentData = record
      this.showModal()
    },
    //Modal弹窗
    showModal() {
      this.visible = true
    },
    handleCancel(e) {
      this.visible = false
      this.currentData = ''
    },
    //表单
    handleSubmit(e) {
      e.preventDefault()
      this.form.validateFields((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values)
          if (this.title == '编辑') {
            this.$axios
              .post('/api/news/newsUpdate', {
                id: values.id,
                date: values.date,
                type: values.type,
                title: values.title,
                content: values.content
              })
              .then(response => {
                console.log(response.data.result, 22)
                // this.data = response.data.result
                this.$message.success('编辑成功')
                this.visible = false
                this.form.resetFields()
                this.showNewsRecord()
              })
              .catch(error => {
                console.log(error)
              })
          } else if (this.title == '新增') {
            console.log(values, 123456)
            this.$axios
              .post('/api/news/newsAdd', {
                id: values.id,
                date: values.date,
                type: values.type,
                content: values.content,
                title: values.title
              })
              .then(response => {
                console.log(response, 22111)
                // this.data = response.data.result
                this.$message.success('新增成功')
                this.visible = false
                this.form.resetFields()
                this.showNewsRecord()
              })
              .catch(error => {
                console.log(error)
              })
          }
        }
      })
    }
  }
}
</script>

<style scoped lang="less">
.editable-row-operations a {
  margin-right: 8px;
}
.NewsManagement {
  .addNews {
    margin-bottom: 10px;
  }
  .operation {
    .edit {
      margin: 10px auto;
    }
  }
}
</style>
