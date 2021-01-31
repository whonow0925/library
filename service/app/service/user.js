'use strict'

const Service = require('egg').Service

class UserService extends Service {
  async addUser({ name: username, password }) {
    // "users" 为test数据库数据表名
    const result = await this.app.mysql.insert('user', { username, password })
    return { result }
  }

  async find({ name: username, password }) {
    console.log(username, password)
    // 假如 我们拿到用户 id 从数据库获取用户详细信息
    const user = await this.app.mysql.get('user', { username, password })
    return { user }
  }

  async searchBook({ bookName }) {
    //解决模糊查找
    let sql = `select * from bookRank where bookName like "%${bookName}%"`
    const result = await this.app.mysql.query(sql)
    console.log(result)
    return { result }
  }

  async bookRank() {
    const result = await this.app.mysql.select('bookRank')
    return { result }
  }

  async bookClassify({ bookType }) {
    //where解决返回不到全部符合条件的数据
    const result = await this.app.mysql.select('bookRank', { where: { bookType } })
    return { result }
  }

  async news() {
    const result = await this.app.mysql.select('news')
    return { result }
  }

  async borrowedBook({ userName, phone, startTime, endTime, borrowedBookName }) {
    const result = await this.app.mysql.insert('borrowedRecord', {
      userName,
      phone,
      startTime,
      endTime,
      borrowedBookName
    })
    return { result }
  }

  async newsDelete({ id }) {
    const result = await this.app.mysql.delete('news', { id })
    return { result }
  }

  async newsUpdate({ id, date, type, title, content }) {
    const result = await this.app.mysql.update('news', { id, date, type, title, content })
    return { result }
  }

  async newsAdd({ id, date, type, content, title }) {
    const result = await this.app.mysql.insert('news', { id, date, type, content, title })
    console.log(result, 1111)
    return { result }
  }
}

module.exports = UserService
