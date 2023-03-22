import { createSlice } from '@reduxjs/toolkit'

import type { PayloadAction } from '@reduxjs/toolkit'

export const configSlice = createSlice({
    name: 'config',
    initialState: {
        color: '#44c5d6'
    },
    reducers: {
        changeColor: (state, action: PayloadAction<string>) => {
            state.color = action.payload
        }
    }
})

export const { changeColor } = configSlice.actions

export default configSlice.reducer
