import { configureStore } from '@reduxjs/toolkit'
import { persistStore } from 'redux-persist'
import routerReducer from './router'
import configReducer from './config'
import userReducer from './user'

export const store = configureStore({
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

export const persistor = persistStore(store)

// import { configureStore, combineReducers } from '@reduxjs/toolkit'
// import storage from 'redux-persist/es/storage'
// import { persistStore, persistReducer } from 'redux-persist'
// import routerReducer from './router'
// import configReducer from './config'
// import userReducer from './user'

// const rootReducer = combineReducers({
//     router: routerReducer,
//     config: configReducer,
//     user: userReducer
// })

// const persistConfig = {
//     key: 'root',
//     storage,
//     whitelist: ['config', 'user', 'router']
// }

// const persistedReducer = persistReducer(persistConfig, rootReducer)

// export const store = configureStore({
//     // devTools: process.env.NODE_ENV !== 'production',
//     devTools: false,
//     reducer: persistedReducer,
//     middleware: getDefaultMiddleware =>
//         getDefaultMiddleware({
//             serializableCheck: false
//         })
// })

// export const persistor = persistStore(store)
