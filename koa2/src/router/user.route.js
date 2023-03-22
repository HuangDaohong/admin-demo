const Router = require('koa-router')
const router = new Router()

router.post('/login', async ctx => {
    ctx.body = {
        code: 1,
        message: '登录成功'
    }
})

router.get('/userinfo', async ctx => {
    ctx.body = {
        code: 1,
        data: {
            username: 'admin',
            role: 'admin'
        }
    }
})

router.get('/colorconfig', async ctx => {
    ctx.body = {
        code: 1,
        data: {
            color: '#409EFF'
        }
    }
})
module.exports = router
