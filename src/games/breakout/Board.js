import React, { useRef, useEffect } from 'react'
import { BallMovement } from './BallMovement'
import { data } from '../../data'

let x = 0

export default function Board() {
    const canvasRef = useRef(null)

    useEffect(() => {
        const render = () => {
            const canvas = canvasRef.current
            const ctx = canvas.getContext('2d')
            let { ballObj, brickObj } = data

            ctx.clearRect(0, 0, canvas.width, canvas.height)
            BallMovement(ctx, ballObj)
            requestAnimationFrame(render)
        }
        render()
    }, [])
    return (
        <div>
            <canvas id="canvas" ref={canvasRef} height="500px" width="800px" />
        </div>
    )
}
