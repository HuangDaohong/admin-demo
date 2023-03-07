import { useSelector } from 'react-redux'
import type { RootState, StateKey } from '@/types/store'

const useStoreSelector = <K extends StateKey>(name: K) => {
    return useSelector((state: RootState) => state[name])
}

export default useStoreSelector
