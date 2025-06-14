const { circle, sphere } = require('@jscad/modeling').primitives
const { translate } = require('@jscad/modeling').transforms

const { intersect } = require('@jscad/modeling').booleans

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
  [1, 1, 1],
  [2, 2, 2],
  [3, 3, 3],
  [4, 4, 4],
  [5, 5, 5],
  [6, 6, 6],
]

let circles_100 = null // 10 points X centers
let circles_500 = null // 50 points X centers
let circles_1000 = null // 100 points X centers
let circles_5000 = null // 500 points X centers
let circles_10000 = null // 1000 points X centers

let spheres_600 = null // 72 points X centers
let spheres_1000 = null // 98 points X centers
let spheres_10000 = null // 1012 points X centers

const setupIntersect = {
  name: 'intersect setup',
  api: 'setup',
  div: '0',
  func: function runme () {
    circles_100 = centers2D.map((center) => translate(center, circle({ radius: 100, segments: 10 })))
    circles_500 = centers2D.map((center) => translate(center, circle({ radius: 100, segments: 50 })))
    circles_1000 = centers2D.map((center) => translate(center, circle({ radius: 100, segments: 100 })))
    circles_5000 = centers2D.map((center) => translate(center, circle({ radius: 100, segments: 500 })))
    circles_10000 = centers2D.map((center) => translate(center, circle({ radius: 100, segments: 1000 })))

    spheres_600 = centers3D.map((center) => translate(center, sphere({ radius: 10, segments: 8 })))
    spheres_1000 = centers3D.map((center) => translate(center, sphere({ radius: 10, segments: 16 })))
    spheres_10000 = centers3D.map((center) => translate(center, sphere({ radius: 10, segments: 32 })))
    return {}
  }
}

const intersect_circle_100 = {
  name: 'intersect(100)',
  api: 'intersect(circle)',
  div: '100',
  func: function runme () { return intersect(circles_100) }
}

const intersect_circle_500 = {
  name: 'intersect(500)',
  api: 'intersect(circle)',
  div: '500',
  func: function runme () { return intersect(circles_500) }
}

const intersect_circle_1000 = {
  name: 'intersect(1000)',
  api: 'intersect(circle)',
  div: '1000',
  func: function runme () { return intersect(circles_1000) }
}

const intersect_circle_5000 = {
  name: 'intersect(5000)',
  api: 'intersect(circle)',
  div: '5000',
  func: function runme () { return intersect(circles_5000) }
}

const intersect_circle_10000 = {
  name: 'intersect(10000)',
  api: 'intersect(circle)',
  div: '10000',
  func: function runme () { return intersect(circles_10000) }
}

const intersect_sphere_600 = {
  name: 'intersect(600)',
  api: 'intersect(sphere)',
  div: '600',
  func: function runme () { return intersect(spheres_600) }
}

const intersect_sphere_1000 = {
  name: 'intersect(1000)',
  api: 'intersect(sphere)',
  div: '1000',
  func: function runme () { return intersect(spheres_1000) }
}

const intersect_sphere_10000 = {
  name: 'intersect(10000)',
  api: 'intersect(sphere)',
  div: '10000',
  func: function runme () { return intersect(spheres_10000) }
}

module.exports = {
  setupIntersect,

  intersect_circle_100,
  intersect_circle_500,
  intersect_circle_1000,
  intersect_circle_5000,
  intersect_circle_10000,

  intersect_sphere_600,
  intersect_sphere_1000,
  intersect_sphere_10000
}
