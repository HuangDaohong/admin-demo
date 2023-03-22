import { useEffect } from 'react'
const User = () => {
    useEffect(() => {
        console.log('user')
    }, [])

    return <div>this is user</div>
}

export default User
