import store from '@/store'

type RootState = ReturnType<typeof store.getState>

type StateKey = keyof RootState

export type { RootState, StateKey }
