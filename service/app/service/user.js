'use strict';

const Service = require('egg').Service;

class UserService extends Service {
  async addUser() {
  // "users" 为test数据库数据表名
  const result = await this.app.mysql.insert('user', { username: 'lily', password:'123' });
    return { result };
  }
}

module.exports = UserService;