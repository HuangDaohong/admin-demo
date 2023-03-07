import { Result } from 'antd'

const NotFound = () => {
    return (
        <Result status={404} title="404" subTitle="抱歉，你所访问的面不存在" />
    )
}

export default NotFound
