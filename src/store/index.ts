import { configureStore } from '@reduxjs/toolkit'
import routerReducer from './router'
import configReducer from './config'
import userReducer from './user'

export default configureStore({
    reducer: {
        router: routerReducer,
        config: configReducer,
        user: userReducer
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: false
        })
})
