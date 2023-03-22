import { useEffect, useRef } from 'react'
// import styles from './index.module.less'

type Circle = {
    x: number
    y: number
    r: number
    sAngle: number
    eAngle: number
    color?: string
}

export default function Test2() {
    // 这里使用 useRef 钩子，保证函数组件重新渲染后只创建一次对象，返回相同的引用
    const wrapRef = useRef<HTMLDivElement>(null)
    const canvasRef = useRef<HTMLCanvasElement>(null)
    let canvasHeight: number
    let canvasWidth: number
    let ctx: CanvasRenderingContext2D

    // 函数组件中执行副作用操作
    //例如数据请求、直接手动修改 DOM 节点、直接操作页面「修改页面标题等」、记录日志等都是副作用操作
    // 第一个参数就是副作用函数 effect
    // 第二个参数表示依赖项，是一个可选参数。当不传入该参数时，每次 UI 渲染 effect 函数都会执行
    useEffect(() => {
        const canvas = initCanvas()
        canvasWidth = canvas.width
        canvasHeight = canvas.height
        // 强转 canvas.getContext 返回值，过滤null 值的返回可能
        ctx = canvas.getContext('2d') as CanvasRenderingContext2D
        animate()
    })
    function drawText(text: string, x: number, y: number) {
        // 设置文本样式
        ctx.font = '60px 宋体'
        // 文字水平居中
        ctx.textAlign = 'center'
        // 文字垂直居中
        ctx.textBaseline = 'middle'
        ctx.fillText(text, x, y)
    }
    function drawCircle({ x, y, r, sAngle, eAngle, color = 'red' }: Circle) {
        ctx.beginPath()
        ctx.arc(x, y, r, sAngle, eAngle)
        // 线宽
        ctx.lineWidth = 8
        // 线帽类型
        ctx.lineCap = 'round'
        // 颜色
        ctx.strokeStyle = color
        ctx.stroke()
    }
    // 角度转换弧度
    function convertToArc(angle: number) {
        return (angle * Math.PI) / 180
    }

    /**
     * 补零，传入一个number 或者 string, 这里使用泛型 T 表示
     * @param text
     * @returns 通过类型转换成string, 提取字符串的某一部分
     */
    function repairZero<T>(text: T) {
        return ('0' + text).slice(-2)
    }
    // 获取当前时间，并返回时分秒
    function getCurrentTime() {
        const date = new Date()
        return [date.getHours(), date.getMinutes(), date.getSeconds()]
    }
    function draw() {
        // 多次绘制，清除画布
        ctx.clearRect(0, 0, canvasWidth, canvasHeight)
        // 绘制文本
        const [hh, mm, ss] = getCurrentTime()
        const x = canvasWidth / 2
        const y = canvasHeight / 2
        drawText(`${repairZero(hh)}:${repairZero(mm)}:${repairZero(ss)}`, x, y)
        const radiusArray = [200, 175, 150]
        const colorArray = ['#2ecc71', '#e67e22', '#a29bfe']
        // milliseconds 能让弧度变化更自然
        const milliseconds = new Date().getMilliseconds() / 1000
        // 60 秒 = 一圈 = 360°
        const secondsArc =
            convertToArc((ss + milliseconds) * (360 / 60)) - Math.PI / 2
        // 60 分 = 一圈 = 360°
        const minutesArc =
            convertToArc(mm * (360 / 60)) - Math.PI / 2 + secondsArc / 60
        // 12 小时 = 一圈 = 360°，24小时 = 两圈 所以要对 12 进行取余操作
        const hoursArc =
            convertToArc((hh % 12) * (360 / 12)) - Math.PI / 2 + minutesArc / 60

        const arcArray = [secondsArc, minutesArc, hoursArc]
        let circle: Circle
        // 绘制圆
        radiusArray.forEach((r, i) => {
            circle = {
                x,
                y,
                r,
                sAngle: 0,
                eAngle: Math.PI * 2,
                color: '#999'
            }
            // 画时分秒 圆环背景
            drawCircle(circle)
            // 通过更改开始和结束角度画出对应圆弧
            circle.sAngle = -Math.PI / 2
            circle.eAngle = arcArray[i]
            circle.color = colorArray[i]
            drawCircle(circle)
        })
    }
    function animate() {
        draw()
        window.requestAnimationFrame(animate)
    }
    function initCanvas() {
        // 强转类型
        const wrap = wrapRef.current as HTMLDivElement
        const canvas = canvasRef.current as HTMLCanvasElement
        canvas.width = wrap.clientWidth
        canvas.height = wrap.clientHeight
        return canvas
    }

    return (
        <div style={{ width: '100%', height: '100%' }} ref={wrapRef}>
            <canvas ref={canvasRef}></canvas>
        </div>
    )
}
