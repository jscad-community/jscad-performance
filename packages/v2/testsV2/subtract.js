const { circle, sphere } = require('@jscad/modeling').primitives
const { translate } = require('@jscad/modeling').transforms

const { subtract } = require('@jscad/modeling').booleans

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
  [10, 10, 10],
  [20, 20, 20],
  [30, 30, 30],
  [40, 40, 40],
  [50, 50, 50],
  [60, 60, 60],
  [70, 70, 70],
  [80, 80, 80],
  [90, 90, 90]
]

let circles_100 = null // 10 points X centers
let circles_500 = null // 50 points X centers
let circles_1000 = null // 100 points X centers
let circles_5000 = null // 500 points X centers
let circles_10000 = null // 1000 points X centers

let spheres_600 = null // 98 points X centers
let spheres_1000 = null // 98 points X centers
let spheres_10000 = null // 1012 points X centers

const setupSubtract = {
  name: 'subtract setup',
  api: 'setup',
  div: '0',
  func: function runme () {
    circles_100 = centers2D.map((center) => translate(center, circle({ radius: 100, segments: 10 })))
    circles_500 = centers2D.map((center) => translate(center, circle({ radius: 100, segments: 50 })))
    circles_1000 = centers2D.map((center) => translate(center, circle({ radius: 100, segments: 100 })))
    circles_5000 = centers2D.map((center) => translate(center, circle({ radius: 100, segments: 500 })))
    circles_10000 = centers2D.map((center) => translate(center, circle({ radius: 100, segments: 1000 })))

    spheres_600 = centers3D.map((center) => translate(center, sphere({ radius: 100, segments: 6 })))
    spheres_1000 = centers3D.map((center) => translate(center, sphere({ radius: 100, segments: 8 })))
    spheres_10000 = centers3D.map((center) => translate(center, sphere({ radius: 100, segments: 26 })))

    return {}
  }
}

const subtract_circle_100 = {
  name: 'subtract(100)',
  api: 'subtract(circle)',
  div: '100',
  func: function runme () { return subtract(circles_100) }
}

const subtract_circle_500 = {
  name: 'subtract(500)',
  api: 'subtract(circle)',
  div: '500',
  func: function runme () { return subtract(circles_500) }
}

const subtract_circle_1000 = {
  name: 'subtract(1000)',
  api: 'subtract(circle)',
  div: '1000',
  func: function runme () { return subtract(circles_1000) }
}

const subtract_circle_5000 = {
  name: 'subtract(5000)',
  api: 'subtract(circle)',
  div: '5000',
  func: function runme () { return subtract(circles_5000) }
}

const subtract_circle_10000 = {
  name: 'subtract(10000)',
  api: 'subtract(circle)',
  div: '10000',
  func: function runme () { return subtract(circles_10000) }
}

const subtract_sphere_600 = {
  name: 'subtract(600)',
  api: 'subtract(sphere)',
  div: '600',
  func: function runme () { return subtract(spheres_600) }
}

const subtract_sphere_1000 = {
  name: 'subtract(1000)',
  api: 'subtract(sphere)',
  div: '1000',
  func: function runme () { return subtract(spheres_1000) }
}

const subtract_sphere_10000 = {
  name: 'subtract(10000)',
  api: 'subtract(sphere)',
  div: '10000',
  func: function runme () { return subtract(spheres_10000) }
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
