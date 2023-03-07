const fs = require('fs');

const Router = require('koa-router');
const router = new Router({ prefix: '/api' });

// 路由自动加载
fs.readdirSync(__dirname).forEach(file => {
  if (file !== 'index.js') {
    let r = require('./' + file);
    router.use(r.routes());
  }
});

module.exports = router;
