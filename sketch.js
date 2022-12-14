const canvasSketch = require('canvas-sketch')

const settings = {
  dimensions: [2048, 2048],
}

const sketch = () => {
  return ({ context, width, height }) => {
    context.fillStyle = 'skyblue'
    context.fillRect(0, 0, width, height)

    context.beginPath()
    context.arc(width / 2, height / 2, 200, 0, Math.PI * 2, false)
    context.fillStyle = 'gray'
    context.fill()

    context.lineWidth = 10
    context.stroke()
  }
}

canvasSketch(sketch, settings)
