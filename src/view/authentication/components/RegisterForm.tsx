import { useState } from 'react'
import { Form, Input, Button, message } from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons'
import register from '../events/register'
import { useNavigate } from 'react-router-dom'

import type { RegisterInfo } from '@/types/register'

const RegisterForm = () => {
    const [form] = Form.useForm()

    const [messageApi, contextHolder] = message.useMessage()
    const [loading, setLoading] = useState(false)

    const navigate = useNavigate()

    const onFinish = async (val: RegisterInfo) => {
        setLoading(true)

        const { code, message: msg } = await register(val)

        messageApi[code === 1 ? 'success' : 'error'](msg)

        if (code === 1) {
            navigate('/login')
        }

        setLoading(false)
    }

    const onFinishFail = () => {
        messageApi.error('注册失败')
    }

    return (
        <>
            {contextHolder}
            <Form
                name="register"
                form={form}
                autoComplete="off"
                wrapperCol={{ span: 24 }}
                onFinish={onFinish}
                onFinishFailed={onFinishFail}
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
                    rules={[
                        { required: true, message: '请输入密码' },
                        {
                            min: 6,
                            max: 16,
                            message: '密码长度需要在6-16字符之间'
                        }
                    ]}
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
                        loading={loading}
                    >
                        注册
                    </Button>
                </Form.Item>
            </Form>
        </>
    )
}

export default RegisterForm
