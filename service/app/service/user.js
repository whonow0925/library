'use strict';

const Service = require('egg').Service;

class UserService extends Service {
  async addUser() {
  // "users" 为test数据库数据表名
  const result = await this.app.mysql.insert('user', { username: 'lily', password:'123' });
    return { result };
  }

  async find() {
    // 假如 我们拿到用户 id 从数据库获取用户详细信息
    const user = await this.app.mysql.get('user', { name: '张三' });
    return { user };
  }
}

module.exports = UserService;