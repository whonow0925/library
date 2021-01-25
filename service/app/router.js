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
};
