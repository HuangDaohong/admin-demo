const cors = require('koa2-cors'); //跨域处理
const router = require('./src/router');

const port = 9000;
const Koa = require('koa2');

const app = new Koa();
app.use(cors());


app.use(router.routes()).use(router.allowedMethods());


app.listen(port, () => {
  console.log('Server is running at http://localhost:' + 9000);

});
