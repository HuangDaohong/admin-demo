import { useEffect, useMemo, useRef, useState } from 'react'
import LoginFrom from './components/LoginForm'
import RegisterForm from './components/RegisterForm'
import Guide from './components/Guide'
import { useLocation } from 'react-router-dom'
import { CSSTransition, SwitchTransition } from 'react-transition-group'

import { Background, Float, Right, Title, FormContainer, Left } from './styled'
import './styles.css'

const Login = () => {
    const { pathname } = useLocation()
    const [floatClass, setFloatClass] = useState('')
    const loginRef = useRef(null)
    const registerRef = useRef(null)
    const floatRef = useRef(null)

    const isLogin = useMemo(() => pathname === '/login', [pathname])

    useEffect(() => {
        setFloatClass(isLogin ? 'float-register' : 'float-login')
    }, [])

    const nodeRef = isLogin ? loginRef : registerRef

    return (
        <Background>
            <CSSTransition
                in={!isLogin}
                nodeRef={floatRef}
                timeout={300}
                classNames="float"
            >
                <Float ref={floatRef} className={floatClass}>
                    <Guide type={isLogin ? 'login' : 'register'} />
                </Float>
            </CSSTransition>

            <SwitchTransition>
                <CSSTransition
                    key={pathname}
                    nodeRef={nodeRef}
                    timeout={300}
                    classNames="my-form"
                    unmountOnExit
                >
                    {() => (
                        <div ref={nodeRef} className="my-form">
                            {isLogin ? (
                                <Right>
                                    <Title>登录</Title>
                                    <FormContainer>
                                        <LoginFrom />
                                    </FormContainer>
                                </Right>
                            ) : (
                                <Left>
                                    <Title>注册</Title>
                                    <FormContainer>
                                        <RegisterForm />
                                    </FormContainer>
                                </Left>
                            )}
                        </div>
                    )}
                </CSSTransition>
            </SwitchTransition>
        </Background>
    )
}

export default Login
