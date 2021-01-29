'use strict'

//实现 Controller

const Controller = require('egg').Controller

class HomeController extends Controller {
  async index() {
    const { ctx } = this
    ctx.body = 'hi, egg'
  }
  //注册接口
  async register() {
    const { ctx } = this
    const result = await ctx.service.user.find(ctx.request.body)
    console.log(result, 'aaa')
    if (result.user) {
      ctx.body = { msg: '账号已被注册，请前往登录' }
    } else {
      console.log(ctx.request, 111)
      const result = await ctx.service.user.addUser(ctx.request)
      //接口返回的数据
      ctx.body = { msg: '账号注册成功' }
    }

    ctx.status = 200
  }
  //登录接口
  async login() {
    const { ctx } = this
    const result = await ctx.service.user.find(ctx.request.body)
    console.log(result)
    //接口返回的数据
    if (result.user) {
      ctx.body = {
        result: {
          username: result.user.username,
          id: result.user.userid,
          token: 'sadasdasda',
          isAdmin:result.user.isAdmin
        }
      }
    } else {
      ctx.body = {
        error: { msg: '用户不存在,请注册' }
      }
    }
    ctx.status = 200
  }

  //homePage -> pageOne 查找书籍
  async searchBook() {
    const { ctx } = this
    const result = await ctx.service.user.searchBook(ctx.request.body)
    if (result.result.length>0) {
      ctx.body = result
    } else {
      ctx.body = { msg: '暂时没有找到你想要的书籍哦~' }
    }
    ctx.status = 200
  }

  //热搜书籍排行榜
  async bookRank() {
    const { ctx } = this
    const result = await ctx.service.user.bookRank()
    // console.log(result,111);
    ctx.body = result
    ctx.status = 200
  }

  //在线阅读页面书籍分类接口
  async bookSort() {
    const { ctx } = this
    // console.log(ctx.request,'aaa');
    const result = await ctx.service.user.bookClassify(ctx.request.body)
    console.log(result,1111);
    ctx.body = result
    ctx.status = 200
  }

    //吉珠新闻展示接口
    async news() {
      const { ctx } = this
      const result = await ctx.service.user.news()
      // console.log(result,111);
      ctx.body = result
      ctx.status = 200
    }

    //存储借阅用户的资料
    async borrowedBook() {
      const { ctx } = this
      const result = await ctx.service.user.borrowedBook(ctx.request.body)
      console.log(result)
      //接口返回的数据
      ctx.body = {msg:"借阅成功"}
      ctx.status = 200
    }
    
  //注销接口
  // async logout() {
  //   const { ctx } = this;
  //   ctx.body =
  //   {
  //     message: '[测试接口] 注销成功',
  //     timestamp: 0,
  //     result: null,
  //     code: 0,
  //     result: {}
  //   };
  //   ctx.status = 200
  // }
  // //获取用户信息接口
  // async getInfo() {
  //   const { ctx } = this;
  //   ctx.body = {
  //     'id': '4291d7da9005377ec9aec4a71ea837f',
  //     'name': '天野远子',
  //     'username': 'admin',
  //     'password': '',
  //     'avatar': '/avatar2.jpg',
  //     'status': 1,
  //     'telephone': '',
  //     'lastLoginIp': '27.154.74.117',
  //     'lastLoginTime': 1534837621348,
  //     'creatorId': 'admin',
  //     'createTime': 1497160610259,
  //     'merchantCode': 'TLif2btpzg079h15bk',
  //     'deleted': 0,
  //     'roleId': 'admin',
  //     'role': {}
  // };
  //   ctx.status = 200
  // }
  // //第二步，通过手机登录
  // async twofactor() {
  //   const { ctx } = this;
  //   ctx.body =
  //   {
  //     message: '登录成功',
  //     timestamp: 0,
  //     result: null,
  //     code: 0,
  //     result: {
  //       'id': '1',
  //     'name': 'tango',
  //     'username': 'admin',
  //     'password': '',
  //     'avatar': 'https://gw.alipayobjects.com/zos/rmsportal/jZUIxmJycoymBprLOUbT.png',
  //     'status': 1,
  //     'telephone': '',
  //     'lastLoginIp': '27.154.74.117',
  //     'lastLoginTime': 1534837621348,
  //     'creatorId': 'admin',
  //     'createTime': 1497160610259,
  //     'deleted': 0,
  //     'roleId': 'admin',
  //     'lang': 'zh-CN',
  //     'token': '4291d7da9005377ec9aec4a71ea837f'
  //     }
  //   };
  //   ctx.status = 200
  // }
  // //获取验证码接口
  // async sms() {
  //   const { ctx } = this;
  //   ctx.body =
  //   {
  //     message: '登录成功',
  //     timestamp: 0,
  //     result: null,
  //     code: 0,
  //     result: {
  //       'id': '1',
  //     'name': 'tango',
  //     'username': 'admin',
  //     'password': '',
  //     'avatar': 'https://gw.alipayobjects.com/zos/rmsportal/jZUIxmJycoymBprLOUbT.png',
  //     'status': 1,
  //     'telephone': '',
  //     'lastLoginIp': '27.154.74.117',
  //     'lastLoginTime': 1534837621348,
  //     'creatorId': 'admin',
  //     'createTime': 1497160610259,
  //     'deleted': 0,
  //     'roleId': 'admin',
  //     'lang': 'zh-CN',
  //     'token': '4291d7da9005377ec9aec4a71ea837f'
  //     }
  //   };
  //   ctx.status = 200
  // }
}

module.exports = HomeController
