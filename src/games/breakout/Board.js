import React, { useRef, useEffect } from 'react'

let x = 0

export default function Board() {
    const canvasRef = useRef(null)

    useEffect(() => {
        const render = () => {
            const canvas = canvasRef.current
            const ctx = canvas.getContext('2d')
            ctx.clearRect(0, 0, canvas.width, canvas.height)
            ctx.beginPath()
            ctx.arc(x, 75, 50, 0, 2 * Math.PI)
            ctx.stroke()
            requestAnimationFrame(render)
            x++
        }
        render()
    }, [])
    return (
        <div>
            <canvas id="canvas" ref={canvasRef} height="500px" width="800px" />
        </div>
    )
}
