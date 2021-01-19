'use strict';

/**
 * @param {Egg.Application} app - egg application
 * 定义 URL 路由规则
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  //当用户执行 POST /api/auth/login，home.js 这个里面的 login 方法就会执行
  router.post('/api/auth/login', controller.home.login);
  // router.post('/api/auth/logout', controller.home.logout);
  // router.post('/api/auth/2step-code', controller.home.twofactor);
  // router.get('/api/user/info', controller.home.getInfo);
  // router.post('/api/account/sms', controller.home.sms);
};
