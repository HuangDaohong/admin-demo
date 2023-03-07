import { createSlice } from '@reduxjs/toolkit'
import { UserInfo } from '@/types/user'

import type { PayloadAction } from '@reduxjs/toolkit'

export const userSlice = createSlice({
    name: 'config',
    initialState: {
        userInfo: <Partial<UserInfo>>{}
    },
    reducers: {
        setUserInfo(state, action: PayloadAction<UserInfo>) {
            state.userInfo = action.payload
        }
    }
})

export const { setUserInfo } = userSlice.actions

export default userSlice.reducer
