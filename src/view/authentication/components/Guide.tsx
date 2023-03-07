import { Button } from 'antd'
import { useNavigate } from 'react-router-dom'
import { Title } from '../styled'

interface Props {
    type: 'login' | 'register'
}

const loginText = {
    title: '登录',
    description: '已有帐号？直接去登录！',
    text: '登录'
}

const registerText = {
    title: '注册',
    description: '没有账号？立即注册加入！',
    text: '注册'
}

const Guide = ({ type }: Props) => {
    const navigate = useNavigate()
    const { title, description, text } =
        type === 'login' ? registerText : loginText

    const handelClick = () => {
        navigate(`/${type === 'register' ? 'login' : 'register'}`)
    }

    return (
        <>
            <Title>{title}</Title>
            <p style={{ margin: '0 0 20px 0' }}>{description}</p>
            <Button shape="round" size="large" onClick={handelClick} ghost>
                {text}
            </Button>
        </>
    )
}

export default Guide
