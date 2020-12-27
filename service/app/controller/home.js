'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'hi, egg';
  }
  async login() {
    const { ctx } = this;
    console.log(ctx)
    ctx.body =  
    {
      message: '',
      timestamp: 0,
      result: null,
      code: 0,
      result: {
        'id': '1',
      'name': 'tango',
      'username': 'admin',
      'password': '',
      'avatar': 'https://gw.alipayobjects.com/zos/rmsportal/jZUIxmJycoymBprLOUbT.png',
      'status': 1,
      'telephone': '',
      'lastLoginIp': '27.154.74.117',
      'lastLoginTime': 1534837621348,
      'creatorId': 'admin',
      'createTime': 1497160610259,
      'deleted': 0,
      'roleId': 'admin',
      'lang': 'zh-CN',
      'token': '4291d7da9005377ec9aec4a71ea837f'
      }
    };
    ctx.status = 200
  }
}

module.exports = HomeController;
