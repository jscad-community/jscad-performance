const { circle, sphere } = require('@jscad/modeling').primitives
const { translate } = require('@jscad/modeling').transforms

const { scission, union } = require('@jscad/modeling').booleans

// non-overlapping shapes
const centers2D = [
  [0, 0, 0],
  [1000, 1000, 0],
  [2000, 2000, 0],
  [3000, 3000, 0],
  [4000, 4000, 0],
  [5000, 5000, 0],
  [6000, 6000, 0],
  [7000, 7000, 0],
  [8000, 8000, 0],
  [9000, 9000, 0]
]

const centers3D = [
  [0, 0, 0],
  [1000, 1000, 1000],
  [2000, 2000, 2000],
  [3000, 3000, 3000],
  [4000, 4000, 4000],
  [5000, 5000, 5000],
  [6000, 6000, 6000],
  [7000, 7000, 7000],
  [8000, 8000, 8000],
  [9000, 9000, 9000]
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

const setupScission = {
  name: 'scission setup',
  api: 'setup',
  div: '0',
  func: function runme () {
    circles_100 = union(centers2D.map((center) => translate(center, circle({ radius: 50, segments: 10 }))))
    circles_500 = union(centers2D.map((center) => translate(center, circle({ radius: 50, segments: 50 }))))
    circles_1000 = union(centers2D.map((center) => translate(center, circle({ radius: 50, segments: 100 }))))
    circles_5000 = union(centers2D.map((center) => translate(center, circle({ radius: 50, segments: 500 }))))
    circles_10000 = union(centers2D.map((center) => translate(center, circle({ radius: 50, segments: 1000 }))))

    spheres_600 = union(centers3D.map((center) => translate(center, sphere({ radius: 50, segments: 6 }))))
    spheres_1000 = union(centers3D.map((center) => translate(center, sphere({ radius: 50, segments: 8 }))))
    spheres_10000 = union(centers3D.map((center) => translate(center, sphere({ radius: 50, segments: 26 }))))
    spheres_100000 = union(centers3D.map((center) => translate(center, sphere({ radius: 50, segments: 72 }))))

    return {}
  }
}

const scission_circle_100 = {
  name: 'scission(100)',
  api: 'scission(circle)',
  div: '100',
  func: function runme () { return scission(circles_100) }
}

const scission_circle_500 = {
  name: 'scission(500)',
  api: 'scission(circle)',
  div: '500',
  func: function runme () { return scission(circles_500) }
}

const scission_circle_1000 = {
  name: 'scission(1000)',
  api: 'scission(circle)',
  div: '1000',
  func: function runme () { return scission(circles_1000) }
}

const scission_circle_5000 = {
  name: 'scission(5000)',
  api: 'scission(circle)',
  div: '5000',
  func: function runme () { return scission(circles_5000) }
}

const scission_circle_10000 = {
  name: 'scission(10000)',
  api: 'scission(circle)',
  div: '10000',
  func: function runme () { return scission(circles_10000) }
}

const scission_sphere_600 = {
  name: 'scission(600)',
  api: 'scission(sphere)',
  div: '600',
  func: function runme () { return scission(spheres_600) }
}

const scission_sphere_1000 = {
  name: 'scission(1000)',
  api: 'scission(sphere)',
  div: '1000',
  func: function runme () { return scission(spheres_1000) }
}

const scission_sphere_10000 = {
  name: 'scission(10000)',
  api: 'scission(sphere)',
  div: '10000',
  func: function runme () { return scission(spheres_10000) }
}

module.exports = {
  setupScission,

  // not supported yet
  // scission_circle_100,
  // scission_circle_500,
  // scission_circle_1000,
  // scission_circle_5000,
  // scission_circle_10000,

  scission_sphere_600,
  scission_sphere_1000,
  scission_sphere_10000
}
