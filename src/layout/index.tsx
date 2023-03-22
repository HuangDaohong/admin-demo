import { Layout, theme } from 'antd'
import { AppMain, SideBar } from './components'

import './styles.less'

const { Header, Content, Sider } = Layout

const LayOut = () => {
    const { token } = theme.useToken()
    return (
        <Layout style={{ height: '100%' }}>
            <Header style={{ backgroundColor: '#fff0f0' }}>111</Header>
            <Layout>
                <Sider style={{ background: token.colorPrimary }}>
                    <SideBar />
                </Sider>
                <Layout>
                    <Content
                        style={{
                            padding: 24,
                            margin: 0,
                            backgroundColor: '#f5f5f5',
                            overflow: 'hidden'
                        }}
                    >
                        <AppMain />
                    </Content>
                </Layout>
            </Layout>
        </Layout>
    )
}

export default LayOut
