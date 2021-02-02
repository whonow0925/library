'use strict';

/**
 * @param {Egg.Application} app - egg application
 * 定义 URL 路由规则
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  //当用户执行 POST /api/auth/login，home.js 这个里面的 login 方法就会执行
  router.post('/api/auth/register', controller.home.register);
  router.post('/api/auth/login', controller.home.login);
  router.post('/api/book/searchBook',controller.home.searchBook);//首页查找书籍接口
  router.get('/api/book/bookRank',controller.home.bookRank);//好书推荐书籍接口
  router.post('/api/book/bookSort',controller.home.bookSort);//在线阅读页面书籍分类接口
  router.get('/api/news/news',controller.home.news);//吉珠新闻接口
  router.post('/api/book/borrowedBook',controller.home.borrowedBook)//借阅书籍用户信息登录

  //管理后台接口
  router.post('/api/news/newsDelete', controller.home.newsDelete)//管理后台删除新闻接口
  router.post('/api/news/newsUpdate', controller.home.newsUpdate)//管理后台更新新闻接口
  router.post('/api/news/newsAdd', controller.home.newsAdd)//管理后台新增新闻接口
  router.get('/api/user/userInfo',controller.home.userInfo);//管理后台用户管理用户信息接口
  router.post('/api/user/userDelete', controller.home.userDelete)//管理后台删除用户接口
  router.post('/api/user/userUpdate', controller.home.userUpdate)//管理后台更新用户信息接口
  router.post('/api/books/booksDelete', controller.home.booksDelete)//管理后台删除书籍接口
  router.post('/api/books/booksAdd', controller.home.booksAdd)//管理后台新增书籍接口
  router.post('/api/books/booksUpdate', controller.home.booksUpdate)//管理后台更新书籍接口
  router.get('/api/borrowed/borrowedBooks',controller.home.borrowedBooks);//管理后台借阅书籍记录信息接口
  router.post('/api/borrowed/borrowedRecordUpdate', controller.home.borrowedRecordUpdate)//管理后台更新用户借阅信息接口
  router.post('/api/borrowed/borrowedRecordDelete', controller.home.borrowedRecordDelete)//管理后台删除借阅书籍信息接口
};
