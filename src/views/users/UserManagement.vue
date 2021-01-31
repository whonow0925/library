<template>
  <div class="UserManagement">
    <a-table v-if="data" :columns="columns" :data-source="data" bordered rowKey="id">
      <template slot-scope="text">
        <div>
          <div>
            {{ text }}
          </div>
        </div>
      </template>
      <!-- <template slot="operation" slot-scope="text, record"> -->
      <div slot="operation" class="operation" slot-scope="text, record">
        <a-button type="primary" class="open" @click="openNews(record)">查看</a-button>
        <a-button type="primary" class="edit" @click="editNews(record)">编辑</a-button>
        <a-button type="primary" class="danger" @click="deleteNews(record.id)">删除</a-button>
      </div>
    </a-table>
    <div class="Modal">
      <a-modal :title="`${this.title}用户信息`" :visible="visible" :footer="null" @cancel="handleCancel">
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
                'username',
                { rules: [{ required: true, message: '请输入用户名' }], initialValue: this.currentData.username }
              ]"
            />
          </a-form-item>
          <a-form-item label="用户密码">
            <a-input
              :disabled="this.isDisabled"
              v-decorator="[
                'password',
                { rules: [{ required: true, message: '请输入密码' }], initialValue: this.currentData.password }
              ]"
            />
          </a-form-item>
          <a-form-item label="是否管理员">
            <a-input
              :disabled="this.isDisabled"
              v-decorator="[
                'isAdmin',
                {
                  rules: [{ required: true, message: '请输入该用户是否为管理员（0/1）' }],
                  initialValue: this.currentData.isAdmin
                }
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
    dataIndex: 'username',
    width: '20%',
    scopedSlots: { customRender: 'username' }
  },
  {
    title: '用户密码',
    dataIndex: 'password',
    width: '20%',
    scopedSlots: { customRender: 'password' }
  },
  {
    title: '是否管理员',
    dataIndex: 'isAdmin',
    width: '20%',
    scopedSlots: { customRender: 'isAdmin' }
  },
  {
    title: '操作',
    dataIndex: 'operation',
    scopedSlots: { customRender: 'operation' }
  }
]
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
        .get('/api/user/userInfo')
        .then(response => {
          console.log(response.data.result, 22)
          this.data = response.data.result
        })
        .catch(error => {
          console.log(error)
        })
    },
    deleteNews(key) {
      console.log(key, 123)
      this.$axios
        .post('/api/user/userDelete', {
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
          this.$axios
            .post('/api/user/userUpdate', {
              id: values.id,
              username: values.username,
              password: values.password,
              isAdmin: values.isAdmin
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
.UserManagement {
  .operation {
    .edit {
      margin: auto 10px;
    }
  }
}
</style>
