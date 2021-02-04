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
    // console.log(result, 'aaa')
    if (result.user) {
      ctx.body = { msg: '账号已被注册，请前往登录' }
    } else {
      console.log(ctx.request, 111)
      const result = await ctx.service.user.addUser(ctx.request.body)
      //接口返回的数据
      ctx.body = { msg: '账号注册成功' }
    }

    ctx.status = 200
  }
  //登录接口
  async login() {
    const { ctx } = this
    const result = await ctx.service.user.userNameFind(ctx.request.body)
    console.log(result,1111)
    if (result.user) {
      const result = await ctx.service.user.find(ctx.request.body)
      //接口返回的数据
      console.log(result,2222);
      if (result.result) {
        ctx.body = {
          result: {
            username: result.result.username,
            id: result.result.id,
            token: 'sadasdasda',
            isAdmin: result.result.isAdmin
          }
        }
      }else{
        ctx.body = {
          error: { msg: '密码不正确，请再次输入！' }
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
    if (result.result.length > 0) {
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
    console.log(result, 1111)
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
    // console.log(result)
    //接口返回的数据
    ctx.body = { msg: '借阅成功' }
    ctx.status = 200
  }

  //管理后台
  //删除新闻按钮接口
  async newsDelete() {
    const { ctx } = this
    const result = await ctx.service.user.newsDelete(ctx.request.body)
    ctx.body = result
    ctx.status = 200
  }

  //更新新闻接口
  async newsUpdate() {
    const { ctx } = this
    const result = await ctx.service.user.newsUpdate(ctx.request.body)
    ctx.body = result
    ctx.status = 200
  }

  //新增新闻接口
  async newsAdd() {
    const { ctx } = this
    const result = await ctx.service.user.newsAdd(ctx.request.body)
    ctx.body = result
    ctx.status = 200
  }

  //用户信息接口
  async userInfo() {
    const { ctx } = this
    const result = await ctx.service.user.userInfo(ctx.request.body)
    ctx.body = result
    ctx.status = 200
  }

  //删除用户信息
  async userDelete() {
    const { ctx } = this
    const result = await ctx.service.user.userDelete(ctx.request.body)
    ctx.body = result
    ctx.status = 200
  }

  //更新用户信息接口
  async userUpdate() {
    const { ctx } = this
    const result = await ctx.service.user.userUpdate(ctx.request.body)
    ctx.body = result
    ctx.status = 200
  }

  //删除书籍信息
  async booksDelete() {
    const { ctx } = this
    const result = await ctx.service.user.booksDelete(ctx.request.body)
    ctx.body = result
    ctx.status = 200
  }

  //新增书籍接口
  async booksAdd() {
    const { ctx } = this
    const result = await ctx.service.user.booksAdd(ctx.request.body)
    ctx.body = result
    ctx.status = 200
  }

  //更新书籍接口
  async booksUpdate() {
    const { ctx } = this
    const result = await ctx.service.user.booksUpdate(ctx.request.body)
    ctx.body = result
    ctx.status = 200
  }

  //获取借阅书籍信息
  async borrowedBooks() {
    const { ctx } = this
    const result = await ctx.service.user.borrowedBooks(ctx.request.body)
    ctx.body = result
    ctx.status = 200
  }

  //更新借阅信息接口
  async borrowedRecordUpdate() {
    const { ctx } = this
    const result = await ctx.service.user.borrowedRecordUpdate(ctx.request.body)
    ctx.body = result
    ctx.status = 200
  }

  //删除借阅信息接口
  async borrowedRecordDelete() {
    const { ctx } = this
    const result = await ctx.service.user.borrowedRecordDelete(ctx.request.body)
    ctx.body = result
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
