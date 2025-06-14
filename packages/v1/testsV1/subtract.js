const { CSG, CAG } = require('@jscad/csg')

const centers2D = [
  [0, 0, 0],
  [10, 10, 0],
  [20, 20, 0],
  [30, 30, 0],
  [40, 40, 0],
  [50, 50, 0],
  [60, 60, 0],
  [70, 70, 0],
  [80, 80, 0],
  [90, 90, 0]
]

const centers3D = [
  [0, 0, 0],
  [0, 0, 15],
  [0, 15, 0],
  [15, 0, 0],
  [0, 0, -15],
  [0, -15, 0],
  [-15, 0, 0],
]

let circles_100 = null // 10 points X centers
let circles_500 = null // 50 points X centers
let circles_1000 = null // 100 points X centers
let circles_5000 = null // 500 points X centers
let circles_10000 = null // 1000 points X centers

let spheres_600 = null // 72 points X centers
let spheres_1000 = null // 96 points X centers
let spheres_10000 = null // 1092 points X centers

const setupSubtract = {
  name: 'subtract setup',
  api: 'setup',
  div: '0',
  func: function runme () {
    circles_100 = centers2D.map((center) => CAG.circle({ radius: 100, resolution: 10, center: center }))
    circles_500 = centers2D.map((center) => CAG.circle({ radius: 100, resolution: 50, center: center }))
    circles_1000 = centers2D.map((center) => CAG.circle({ radius: 100, resolution: 100, center: center }))
    circles_5000 = centers2D.map((center) => CAG.circle({ radius: 100, resolution: 500, center: center }))
    circles_10000 = centers2D.map((center) => CAG.circle({ radius: 100, resolution: 1000, center: center }))

    spheres_600 = centers3D.map((center) => CSG.sphere({ radius: 10, resolution: 8, center: center }))
    spheres_1000 = centers3D.map((center) => CSG.sphere({ radius: 10, resolution: 16, center: center }))
    spheres_10000 = centers3D.map((center) => CSG.sphere({ radius: 10, resolution: 32, center: center }))
    return {}
  }
}

const subtract_circle_100 = {
  name: 'subtract(100)',
  api: 'subtract(circle)',
  div: '100',
  func: function runme () { return circles_100[0].subtract(circles_100.slice(1)) }
}

const subtract_circle_500 = {
  name: 'subtract(500)',
  api: 'subtract(circle)',
  div: '500',
  func: function runme () { return circles_500[0].subtract(circles_500.slice(1)) }
}

const subtract_circle_1000 = {
  name: 'subtract(1000)',
  api: 'subtract(circle)',
  div: '1000',
  func: function runme () { return circles_1000[0].subtract(circles_1000.slice(1)) }
}

const subtract_circle_5000 = {
  name: 'subtract(5000)',
  api: 'subtract(circle)',
  div: '5000',
  func: function runme () { return circles_5000[0].subtract(circles_5000.slice(1)) }
}

const subtract_circle_10000 = {
  name: 'subtract(10000)',
  api: 'subtract(circle)',
  div: '10000',
  func: function runme () { return circles_10000[0].subtract(circles_10000.slice(1)) }
}

const subtract_sphere_600 = {
  name: 'subtract(600)',
  api: 'subtract(sphere)',
  div: '600',
  func: function runme () { return spheres_600[0].subtract(spheres_600.slice(1)) }
}

const subtract_sphere_1000 = {
  name: 'subtract(1000)',
  api: 'subtract(sphere)',
  div: '1000',
  func: function runme () { return spheres_1000[0].subtract(spheres_1000.slice(1)) }
}

const subtract_sphere_10000 = {
  name: 'subtract(10000)',
  api: 'subtract(sphere)',
  div: '10000',
  func: function runme () { return spheres_10000[0].subtract(spheres_10000.slice(1)) }
}

module.exports = {
  setupSubtract,

  subtract_circle_100,
  subtract_circle_500,
  subtract_circle_1000,
  subtract_circle_5000,
  subtract_circle_10000,

  subtract_sphere_600,
  subtract_sphere_1000,
  subtract_sphere_10000
}
