import styled from '@emotion/styled'
import { flexCenter } from '@/styles/common'

const Background = styled.div({
    height: '100%',
    width: '100%',
    overflow: 'hidden'
})

const Float = styled.div({
    background:
        'linear-gradient(135deg, #af68cc 0%, #7d4d90  50%, #653e75 100%)',
    width: '40%',
    height: '100%',
    boxSizing: 'content-box',
    color: 'white',
    flexFlow: 'column nowrap',
    position: 'fixed',
    zIndex: 3,
    ...flexCenter
})
const form = {
    height: '100%',
    width: '60%',
    flexFlow: 'column nowrap',
    position: 'absolute',
    ...flexCenter
} as const
const Left = styled.div({
    left: 0,
    ...form
})

const Right = styled.div({
    left: '40%',
    ...form
})

const Title = styled.h1({
    fontSize: 36,
    letterSpacing: 5,
    margin: '10px 0'
})

const FormContainer = styled.div({
    width: '60%'
})

export { Background, Float, Left, Right, FormContainer, Title }
