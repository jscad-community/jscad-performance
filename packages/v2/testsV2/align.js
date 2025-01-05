const { circle, sphere } = require('@jscad/modeling').primitives
const { align, translate } = require('@jscad/modeling').transforms

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

let spheres_600 = null // 60 points X centers
let spheres_1000 = null // 98 points X centers
let spheres_10000 = null // 1012 points X centers
let spheres_100000 = null // 9940 points X centers

const setupAlign = {
  name: 'align setup',
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
    spheres_100000 = centers3D.map((center) => translate(center, sphere({ radius: 100, segments: 72 })))
    return {}
  }
}

const align_circle_100 = {
  name: 'align(100)',
  api: 'align(circle)',
  div: '100',
  func: function runme () { return align({ modes: ['min', 'center', 'max'] }, circles_100) }
}

const align_circle_500 = {
  name: 'align(500)',
  api: 'align(circle)',
  div: '500',
  func: function runme () { return align({ modes: ['min', 'center', 'max'] }, circles_500) }
}

const align_circle_1000 = {
  name: 'align(1000)',
  api: 'align(circle)',
  div: '1000',
  func: function runme () { return align({ modes: ['min', 'center', 'max'] }, circles_1000) }
}

const align_circle_5000 = {
  name: 'align(5000)',
  api: 'align(circle)',
  div: '5000',
  func: function runme () { return align({ modes: ['min', 'center', 'max'] }, circles_5000) }
}

const align_circle_10000 = {
  name: 'align(10000)',
  api: 'align(circle)',
  div: '10000',
  func: function runme () { return align({ modes: ['min', 'center', 'max'] }, circles_10000) }
}

const align_sphere_600 = {
  name: 'align(600)',
  api: 'align(sphere)',
  div: '600',
  func: function runme () { return align({ modes: ['min', 'center', 'max'] }, spheres_600) }
}

const align_sphere_1000 = {
  name: 'align(1000)',
  api: 'align(sphere)',
  div: '1000',
  func: function runme () { return align({ modes: ['min', 'center', 'max'] }, spheres_1000) }
}

const align_sphere_10000 = {
  name: 'align(10000)',
  api: 'align(sphere)',
  div: '10000',
  func: function runme () { return align({ modes: ['min', 'center', 'max'] }, spheres_10000) }
}

module.exports = {
  setupAlign,

  align_circle_100,
  align_circle_500,
  align_circle_1000,
  align_circle_5000,
  align_circle_10000,

  align_sphere_600,
  align_sphere_1000,
  align_sphere_10000
}
