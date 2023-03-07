import { BrowserRouter } from 'react-router-dom'
import RouteTable from '@/router'
import { Provider } from 'react-redux'
import store from '@/store'
import useStoreSelector from '@/hooks/useStoreSelector'

import theme from '@/hocs/theme'

const Router = () => (
    <BrowserRouter>
        <RouteTable />
    </BrowserRouter>
)

const CustomTheme = () => {
    const { color } = useStoreSelector('config')
    const Theme = theme(Router, {
        token: {
            colorPrimary: color
        }
    })

    return <Theme />
}

const App = () => {
    return (
        <Provider store={store}>
            <CustomTheme />
        </Provider>
    )
}

export default App
