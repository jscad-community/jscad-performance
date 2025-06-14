const { circle, sphere } = require('@jscad/modeling').primitives
const { translate } = require('@jscad/modeling').transforms

const { union } = require('@jscad/modeling').booleans

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

let spheres_600 = null // 60 points X centers
let spheres_1000 = null // 98 points X centers
let spheres_10000 = null // 1012 points X centers

const setupUnion = {
  name: 'union setup',
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

const union_circle_100 = {
  name: 'union(100)',
  api: 'union(circle)',
  div: '100',
  func: function runme () { return union(circles_100) }
}

const union_circle_500 = {
  name: 'union(500)',
  api: 'union(circle)',
  div: '500',
  func: function runme () { return union(circles_500) }
}

const union_circle_1000 = {
  name: 'union(1000)',
  api: 'union(circle)',
  div: '1000',
  func: function runme () { return union(circles_1000) }
}

const union_circle_5000 = {
  name: 'union(5000)',
  api: 'union(circle)',
  div: '5000',
  func: function runme () { return union(circles_5000) }
}

const union_circle_10000 = {
  name: 'union(10000)',
  api: 'union(circle)',
  div: '10000',
  func: function runme () { return union(circles_10000) }
}

const union_sphere_600 = {
  name: 'union(600)',
  api: 'union(sphere)',
  div: '600',
  func: function runme () { return union(spheres_600) }
}

const union_sphere_1000 = {
  name: 'union(1000)',
  api: 'union(sphere)',
  div: '1000',
  func: function runme () { return union(spheres_1000) }
}

const union_sphere_10000 = {
  name: 'union(10000)',
  api: 'union(sphere)',
  div: '10000',
  func: function runme () { return union(spheres_10000) }
}

module.exports = {
  setupUnion,

  union_circle_100,
  union_circle_500,
  union_circle_1000,
  union_circle_5000,
  union_circle_10000,

  union_sphere_600,
  union_sphere_1000,
  union_sphere_10000
}
