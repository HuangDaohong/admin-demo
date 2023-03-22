import { BrowserRouter } from 'react-router-dom'
import RouteTable from '@/router'
import { Provider } from 'react-redux'
import { store, persistor } from '@/store'
// import { PersistGate } from 'redux-persist/integration/react'
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
            {/* <PersistGate persistor={persistor}> */}
            <CustomTheme />
            {/* </PersistGate> */}
        </Provider>
    )
}

export default App
