'use strict';

const Service = require('egg').Service;

class UserService extends Service {
  async addUser({name:username, password}) {
  // "users" 为test数据库数据表名
  const result = await this.app.mysql.insert('user', { username,password});
    return { result };
  }

  async find({name:username, password}) {
    console.log(username, password)
    // 假如 我们拿到用户 id 从数据库获取用户详细信息
    const user = await this.app.mysql.get('user', { username,password } );
    return { user };
  }

  async searchBook({bookName}){
    const result = await this.app.mysql.get('books',{bookName})
    return {result}
  }

  async bookRank(){
    const result = await this.app.mysql.select('bookRank')
    return {result}
  }
}

module.exports = UserService;