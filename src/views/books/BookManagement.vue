<template>
  <div class="BookManagement">
    <a-button type="primary" class="addBooks" @click="addBooks">新增</a-button>
    <a-table class="booksTable"
             v-if="data"
             :columns="columns"
             :data-source="data"
             bordered
             rowKey="id">
      <template slot="content" slot-scope="record">
        <span>{{ record.length > 40 ? record.slice(0, 40) + '...' : record }}</span>
      </template>
      <template slot="describe" slot-scope="record">
        <span>{{ record.length > 20 ? record.slice(0, 20) + '...' : record }}</span>
      </template>
      <!-- <template slot="operation" slot-scope="text, record"> -->
      <div slot="operation" class="operation" slot-scope="text, record">
        <a-button type="primary" class="open" @click="openBooks(record)">查看</a-button>
        <a-button type="primary" class="edit" @click="editBooks(record)">编辑</a-button>
        <a-button type="primary" class="danger" @click="deleteBooks(record.id)">删除</a-button>
      </div>
    </a-table>
    <div class="Modal">
      <a-modal :title="`${this.title}书籍`" :visible="visible" :footer="null" @cancel="handleCancel">
        <a-form :form="form" :label-col="{ span: 5 }" :wrapper-col="{ span: 17 }" @submit="handleSubmit">
          <a-form-item label="id">
            <a-input
              :disabled="this.isDisabled"
              v-decorator="['id', { rules: [{ required: true }], initialValue: this.currentData.id }]"
            />
          </a-form-item>
          <a-form-item label="书籍名称">
            <a-input
              :disabled="this.isDisabled"
              v-decorator="[
                'bookName',
                { rules: [{ required: true, message: '请输入书籍名称' }], initialValue: this.currentData.bookName }
              ]"
            />
          </a-form-item>
          <a-form-item label="作者">
            <a-input
              :disabled="this.isDisabled"
              v-decorator="[
                'writer',
                { rules: [{ required: true, message: '请输入作者' }], initialValue: this.currentData.writer }
              ]"
            />
          </a-form-item>
          <a-form-item label="简介">
            <a-input
              type="textarea"
              :disabled="this.isDisabled"
              v-decorator="[
                'describe',
                { rules: [{ required: true, message: '请输入简介' }], initialValue: this.currentData.describe }
              ]"
            />
          </a-form-item>
          <a-form-item label="出版社">
            <a-input
              :disabled="this.isDisabled"
              v-decorator="[
                'press',
                { initialValue: this.currentData.press }
              ]"
            />
          </a-form-item>
          <a-form-item label="借阅类型">
            <a-input
              :disabled="this.isDisabled"
              v-decorator="[
                'type',
                { rules: [{ required: true, message: '请输入借阅类型' }], initialValue: this.currentData.type }
              ]"
            />
          </a-form-item>
          <a-form-item label="书籍类型">
            <a-input
              :disabled="this.isDisabled"
              v-decorator="[
                'bookType',
                { rules: [{ required: true, message: '请输入书籍类型' }], initialValue: this.currentData.bookType }
              ]"
            />
          </a-form-item>
          <a-form-item label="书籍内容">
            <a-input
              type="textarea"
              :disabled="this.isDisabled"
              v-decorator="[
                'content',
                { rules: [{ required: true, message: '请输入内容' }], initialValue: this.currentData.content }
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
    width: '5%',
    scopedSlots: { customRender: 'id' }
  },
  {
    title: '书名',
    dataIndex: 'bookName',
    width: '15%',
    scopedSlots: { customRender: 'bookName' }
  },
  {
    title: '作者',
    dataIndex: 'writer',
    width: '10%',
    scopedSlots: { customRender: 'writer' }
  },
  {
    title: '简介',
    dataIndex: 'describe',
    width: '20%',
    scopedSlots: { customRender: 'describe' }
  },
  {
    title: '出版社',
    dataIndex: 'press',
    width: '10%',
    scopedSlots: { customRender: 'press' }
  },
   {
    title: '内容',
    dataIndex: 'content',
    width: '30%',
    scopedSlots: { customRender: 'content' }
  },
   {
    title: '书籍类型',
    dataIndex: 'bookType',
    width: '10%',
    scopedSlots: { customRender: 'bookType' }
  },
   {
    title: '类型',
    dataIndex: 'type',
    width: '10%',
    scopedSlots: { customRender: 'type' }
  },
  {
    title: '操作',
    dataIndex: 'operation',
    scopedSlots: { customRender: 'operation' }
  }
]
export default {
    mounted() {
    this.showBooksRecord()
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
    showBooksRecord() {
      this.$axios
        .get('/api/book/bookRank')
        .then(response => {
          console.log(response.data.result, 22)
          this.data = response.data.result
        })
        .catch(error => {
          console.log(error)
        })
    },
    addBooks() {
      this.visible = true
      this.title = '新增'
    },
    deleteBooks(key) {
      console.log(key, 123)
      this.$axios
        .post('/api/books/booksDelete', {
          id: key
        })
        .then(response => {
          console.log(response.data.result, 22)
          // this.data = response.data.result
          this.$message.success('删除成功')
          this.showBooksRecord()
        })
        .catch(error => {
          console.log(error)
        })
    },
    openBooks(record) {
      console.log(record, 1234)
      this.title = '查看'
      this.isDisabled = true
      this.currentData = record
      this.showModal()
    },
    editBooks(record) {
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
      this.form.resetFields()
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
              .post('/api/books/booksUpdate', {
                id: values.id,
                bookName: values.bookName,
                writer: values.writer,
                describe: values.describe,
                press: values.press,
                content: values.content,
                type: values.type,
                bookType: values.bookType
              })
              .then(response => {
                console.log(response.data.result, 22)
                // this.data = response.data.result
                this.$message.success('编辑成功')
                this.visible = false
                this.form.resetFields()
                this.showBooksRecord()
              })
              .catch(error => {
                console.log(error)
              })
          } else if (this.title == '新增') {
            console.log(values, 123456)
            this.$axios
              .post('/api/books/booksAdd', {
                id: values.id,
                bookName: values.bookName,
                writer: values.writer,
                describe: values.describe,
                press: values.press,
                content: values.content,
                type: values.type,
                bookType: values.bookType
              })
              .then(response => {
                console.log(response, 22111)
                // this.data = response.data.result
                this.$message.success('新增成功')
                this.visible = false
                this.form.resetFields()
                this.showBooksRecord()
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
.BookManagement {
  .addBooks {
    margin-bottom: 10px;
  }
  .operation {
    .edit {
      margin: 10px auto;
    }
  }
}
</style>
