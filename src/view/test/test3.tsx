// const Test3 = () => <div>测试页面3</div>

// export default Test3
import { useRef } from 'react'
// import styles from './index.module.less'

export default function Test3() {
    // 这里使用 useRef 钩子，保证函数组件重新渲染后只创建一次对象，返回相同的引用
    const wrapRef = useRef<HTMLDivElement>(null)
    const canvasRef = useRef<HTMLCanvasElement>(null)
    return (
        <div style={{ width: '100%', height: '100%' }} ref={wrapRef}>
            <canvas ref={canvasRef}></canvas>
        </div>
    )
}
