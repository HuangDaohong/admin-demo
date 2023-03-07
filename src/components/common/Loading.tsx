import { memo } from 'react'
import { Spin } from 'antd'
import { LoadingOutlined } from '@ant-design/icons'

const LoadingIcon = <LoadingOutlined style={{ fontSize: 62 }} />

const Loading = () => {
    return (
        <Spin
            style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)'
            }}
            indicator={LoadingIcon}
        />
    )
}

export default memo(Loading)
