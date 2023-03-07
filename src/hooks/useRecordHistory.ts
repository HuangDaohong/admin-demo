import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { pushLocation } from '@/store/router'

const useRecordHistory = () => {
    const location = useLocation()
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(pushLocation(location))
    }, [location])
}

export default useRecordHistory
