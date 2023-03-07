import { ComponentType } from 'react'
import { ConfigProvider } from 'antd'
import type { ThemeConfig } from 'antd/es/config-provider/context'

const theme = <P extends object>(
    Comp: ComponentType<P>,
    theme: ThemeConfig
) => {
    const CustomeTheme = (props: P) => (
        <ConfigProvider theme={theme}>
            <Comp {...(props as P)} />
        </ConfigProvider>
    )

    return CustomeTheme
}

export default theme
