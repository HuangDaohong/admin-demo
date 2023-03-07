import { useRef } from 'react'
import { Form, Input, Button, message } from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons'
import login from '../events/login'
import { useLocation, useNavigate } from 'react-router-dom'

import type { LoginInfo } from '@/types/login'
import type { Location } from 'react-router-dom'
import Storage from '@/utils/storage'

const LoginForm = () => {
    const [form] = Form.useForm()

    const [messageApi, contextHolder] = message.useMessage()
    const loadingRef = useRef(false)
    const navigate = useNavigate()
    const location = useLocation()

    const onFinish = async (val: LoginInfo) => {
        loadingRef.current = true
        const { code, message: msg } = await login(val)
        messageApi[code === 1 ? 'success' : 'error'](msg)
        if (code === 1) {
            Storage.save('token', '123456')
            const pathname = (location.state?.to as Location)?.pathname
            const to =
                pathname === '/login' || pathname === '/register'
                    ? '/'
                    : pathname || '/'
            console.log(loadingRef.current)
            setTimeout(() => {
                loadingRef.current = false
                navigate(to)
            }, 1000)
        }
    }

    const onFinishFail = () => {
        messageApi.error('登录失败')
    }

    return (
        <>
            {contextHolder}
            <Form
                name="login"
                form={form}
                autoComplete="off"
                wrapperCol={{ span: 24 }}
                onFinish={onFinish}
                onFinishFailed={onFinishFail}
                initialValues={
                    {
                        username: 'admin',
                        password: '123456'
                    } as LoginInfo
                }
            >
                <Form.Item
                    name="username"
                    rules={[
                        { required: true, message: '请输入用户名' },
                        {
                            min: 2,
                            max: 7,
                            message: '用户名长度需要在2-7字符之间'
                        }
                    ]}
                >
                    <Input
                        prefix={<UserOutlined style={{ opacity: 0.6 }} />}
                        placeholder="用户名"
                        size="large"
                    />
                </Form.Item>
                <Form.Item
                    name="password"
                    rules={[{ required: true, message: '请输入密码' }]}
                >
                    <Input.Password
                        prefix={<LockOutlined style={{ opacity: 0.6 }} />}
                        placeholder="密码"
                        size="large"
                    />
                </Form.Item>
                <Form.Item wrapperCol={{ span: 24 }}>
                    <Button
                        type="primary"
                        block
                        htmlType="submit"
                        size="large"
                        loading={loadingRef.current}
                    >
                        登录
                    </Button>
                </Form.Item>
            </Form>
        </>
    )
}

export default LoginForm
