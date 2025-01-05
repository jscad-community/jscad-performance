const { circle, sphere } = require('@jscad/modeling').primitives
const { translate } = require('@jscad/modeling').transforms

const { hull } = require('@jscad/modeling').hulls

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
let circles_1000 = null // 100 points X centers
let circles_10000 = null // 1000 points X centers

let spheres_1000 = null // 98 points X centers
let spheres_10000 = null // 1012 points X centers
let spheres_100000 = null // 9940 points X centers

// number of points ['100', '1000', '10000', '100000', '200000', '400000']

const setupHull = {
  name: 'hull setup',
  api: 'setup',
  div: '0',
  func: function runme () {
    circles_100 = centers2D.map((center) => translate(center, circle({ radius: 100, segments: 10 })))
    circles_1000 = centers2D.map((center) => translate(center, circle({ radius: 100, segments: 100 })))
    circles_10000 = centers2D.map((center) => translate(center, circle({ radius: 100, segments: 1000 })))

    spheres_1000 = centers3D.map((center) => translate(center, sphere({ radius: 100, segments: 8 })))
    spheres_10000 = centers3D.map((center) => translate(center, sphere({ radius: 100, segments: 26 })))
    spheres_100000 = centers3D.map((center) => translate(center, sphere({ radius: 100, segments: 72 })))
    return {}
  }
}

const hull_circle_100 = {
  name: 'hull(100)',
  api: 'hull(circle)',
  div: '100',
  func: function runme () { return hull(circles_100) }
}

const hull_circle_1000 = {
  name: 'hull(1000)',
  api: 'hull(circle)',
  div: '1000',
  func: function runme () { return hull(circles_1000) }
}

const hull_circle_10000 = {
  name: 'hull(10000)',
  api: 'hull(circle)',
  div: '10000',
  func: function runme () { return hull(circles_10000) }
}

const hull_sphere_1000 = {
  name: 'hull(1000)',
  api: 'hull(sphere)',
  div: '1000',
  func: function runme () { return hull(spheres_1000) }
}

const hull_sphere_10000 = {
  name: 'hull(10000)',
  api: 'hull(sphere)',
  div: '10000',
  func: function runme () { return hull(spheres_10000) }
}

const hull_sphere_100000 = {
  name: 'hull(100000)',
  api: 'hull(sphere)',
  div: '100000',
  func: function runme () { return hull(spheres_100000) }
}

module.exports = {
  setupHull,

  hull_circle_100,
  hull_circle_1000,
  hull_circle_10000,

  hull_sphere_1000,
  hull_sphere_10000,
  hull_sphere_100000
}
