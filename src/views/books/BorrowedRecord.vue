<template>
  <div class="BorrowRecord">
    <a-table v-if="data" :columns="columns" :data-source="data" bordered rowKey="id">
      <template slot-scope="record">
        <span>{{ record }}</span>
      </template>
      <!-- <template slot="operation" slot-scope="text, record"> -->
      <div slot="operation" class="operation" slot-scope="text, record">
        <a-button type="primary" class="open" @click="openRecord(record)">查看</a-button>
        <a-button type="primary" class="edit" @click="editRecord(record)">编辑</a-button>
        <a-button type="primary" class="danger" @click="deleteRecord(record.id)">删除</a-button>
      </div>
    </a-table>
    <div class="Modal">
      <a-modal :title="`${this.title}借阅书籍的信息`" :visible="visible" :footer="null" @cancel="handleCancel">
        <a-form :form="form" :label-col="{ span: 5 }" :wrapper-col="{ span: 17 }" @submit="handleSubmit">
          <a-form-item label="id">
            <a-input
              :disabled="this.isDisabled"
              v-decorator="['id', { rules: [{ required: true }], initialValue: this.currentData.id }]"
            />
          </a-form-item>
          <a-form-item label="用户名">
            <a-input
              :disabled="this.isDisabled"
              v-decorator="[
                'userName',
                { rules: [{ required: true, message: '请输入用户名' }], initialValue: this.currentData.userName }
              ]"
            />
          </a-form-item>
          <a-form-item label="用户电话">
            <a-input
              :disabled="this.isDisabled"
              v-decorator="[
                'phone',
                { rules: [{ required: true, message: '请输入用户电话' }], initialValue: this.currentData.phone }
              ]"
            />
          </a-form-item>
          <a-form-item label="用户电话">
            <a-input
              :disabled="this.isDisabled"
              v-decorator="[
                'phone',
                { rules: [{ required: true, message: '请输入用户电话' }], initialValue: this.currentData.phone }
              ]"
            />
          </a-form-item>
          <a-form-item label="借阅开始时间">
            <a-input
              :disabled="this.isDisabled"
              v-decorator="[
                'startTime',
                { rules: [{ required: true, message: '请输入借阅开始时间' }], initialValue: this.currentData.startTime }
              ]"
            />
          </a-form-item>
          <a-form-item label="借阅结束时间">
            <a-input
              :disabled="this.isDisabled"
              v-decorator="[
                'endTime',
                { rules: [{ required: true, message: '请输入借阅结束时间' }], initialValue: this.currentData.endTime }
              ]"
            />
          </a-form-item>
          <a-form-item label="借阅书籍">
            <a-input
              :disabled="this.isDisabled"
              v-decorator="[
                'borrowedBookName',
                { rules: [{ required: true, message: '请输入借阅书籍' }], initialValue: this.currentData.borrowedBookName }
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
    title: '用户名',
    dataIndex: 'userName',
    width: '10%',
    scopedSlots: { customRender: 'userName' }
  },
  {
    title: '电话号码',
    dataIndex: 'phone',
    width: '20%',
    scopedSlots: { customRender: 'phone' }
  },
  {
    title: '开始借阅时间',
    dataIndex: 'startTime',
    width: '20%',
    scopedSlots: { customRender: 'startTime' }
  },
  {
    title: '结束借阅时间',
    dataIndex: 'endTime',
    width: '20%',
    scopedSlots: { customRender: 'endTime' }
  },
  {
    title: '借阅书籍',
    dataIndex: 'borrowedBookName',
    width: '20%',
    scopedSlots: { customRender: 'borrowedBookName' }
  },
  {
    title: '操作',
    dataIndex: 'operation',
    scopedSlots: { customRender: 'operation' }
  }
]
export default {
  mounted() {
    this.showBorrowRecord()
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
    showBorrowRecord() {
      this.$axios
        .get('/api/borrowed/borrowedBooks')
        .then(response => {
          console.log(response.data.result, 22)
          this.data = response.data.result
        })
        .catch(error => {
          console.log(error)
        })
    },
    deleteRecord(key) {
      console.log(key, 123)
      this.$axios
        .post('/api/borrowed/borrowedRecordDelete', {
          id: key
        })
        .then(response => {
          console.log(response.data.result, 22)
          // this.data = response.data.result
          this.$message.success('删除成功')
          this.showBorrowRecord()
        })
        .catch(error => {
          console.log(error)
        })
    },
    openRecord(record) {
      console.log(record, 1234)
      this.title = '查看'
      this.isDisabled = true
      this.currentData = record
      this.showModal()
    },
    editRecord(record) {
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
          this.$axios
            .post('/api/borrowed/borrowedRecordUpdate', {
              id: values.id,
              userName: values.userName,
              phone: values.phone,
              startTime: values.startTime,
              endTime: values.endTime,
              borrowedBookName: values.borrowedBookName
            })
            .then(response => {
              console.log(response.data.result, 22)
              // this.data = response.data.result
              this.$message.success('编辑成功')
              this.visible = false
              this.form.resetFields()
              this.showBorrowRecord()
            })
            .catch(error => {
              console.log(error)
            })
        }
      })
    }
  }
}
</script>

<style scoped lang="less">
.editable-row-operations a {
  margin-right: 5px;
}
.BorrowRecord {
  .operation {
    .edit {
      margin: 10px auto;
    }
  }
}
</style>