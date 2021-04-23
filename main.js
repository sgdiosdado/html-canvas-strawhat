const canvas = document.getElementById('canvas')
const context = canvas.getContext('2d')

canvas.width =  window.innerWidth
canvas.height = window.innerHeight
context.moveTo(0,0)

const radius = 200
const offset = 25
const x = offset + 100 + radius
const y = offset + radius
const startAngle = 0
const endAngle = Math.PI
const movement = true

function strawhatTop(context, radius, x, y, startAngle, endAngle, movement) {
  context.beginPath()
  context.fillStyle = '#E4D96F'
  context.arc(x, y, radius, startAngle, endAngle, movement)
  context.fill()
}

function strawhatBand(context, radius, x, y, startAngle, endAngle, movement) {
  context.beginPath()
  const bandColor =  '#E05A5A'
  const grd = context.createLinearGradient(x, y, x, 100);
  grd.addColorStop(0, bandColor)
  grd.addColorStop(1/3, bandColor)
  grd.addColorStop(1/3, 'transparent')
  grd.addColorStop(2/3, 'transparent')
  grd.addColorStop(1, 'transparent')

  context.fillStyle = grd;
  context.arc(x, y, radius, startAngle, endAngle, movement)
  context.fill()
}

function strawhatBrim(context, radius, offset) {
  const y = offset + radius
  context.fillStyle = '#E4D96F'
  context.fillRect(25, y, radius * 3, 30)
}

strawhatTop(context, radius, x, y, startAngle, endAngle, movement)
strawhatBand(context, radius, x, y, startAngle, endAngle, movement)
strawhatBrim(context, radius, offset)