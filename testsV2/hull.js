const {circle, sphere} = require('@jscad/modeling').primitives
const {translate} = require('@jscad/modeling').transforms

const {hull} = require('@jscad/modeling').hulls

var centers = [
  [0, 0, 0],
  [10, 10, 10],
  [20, 20, 20],
  [30, 30, 30],
  [40, 40, 40],
  [50, 50, 50],
  [60, 60, 60],
  [70, 70, 70],
  [80, 80, 80],
  [90, 90, 90],
]

var circle_100 = null // 10 points X centers
var circle_1000 = null // 100 points X centers
var circle_10000 = null // 1000 points X centers

var sphere_1000 = null // 98 points X centers
var sphere_10000 = null // 1012 points X centers
var sphere_100000 = null // 9940 points X centers

// number of points ['100', '1000', '10000', '100000', '200000', '400000']

const setupHull = {
  name : 'hull setup',
  api  : 'setup',
  div  : '0',
  func : function runme() {
    circle_100 = centers.map((center) => translate(center, circle({radius: 100, segments: 10})))
    circle_1000 = centers.map((center) => translate(center, circle({radius: 100, segments: 100})))
    circle_10000 = centers.map((center) => translate(center, circle({radius: 100, segments: 1000})))

    sphere_1000 = centers.map((center) => translate(center, sphere({radius: 100, segments: 7})))
    sphere_10000 = centers.map((center) => translate(center, sphere({radius: 100, segments: 22})))
    sphere_100000 = centers.map((center) => translate(center, sphere({radius: 100, segments: 70})))
    return {}
  }
}

const hull_circle_100 = {
  name : 'hull(100)',
  api  : 'hull(circle)',
  div  : '100',
  func : function runme() { return hull(circle_100) }
}

const hull_circle_1000 = {
  name : 'hull(1000)',
  api  : 'hull(circle)',
  div  : '1000',
  func : function runme() { return hull(circle_1000) }
}

const hull_circle_10000 = {
  name : 'hull(10000)',
  api  : 'hull(circle)',
  div  : '10000',
  func : function runme() { return hull(circle_10000) }
}

const hull_sphere_1000 = {
  name : 'hull(1000)',
  api  : 'hull(sphere)',
  div  : '1000',
  func : function runme() { return hull(sphere_1000) }
}

const hull_sphere_10000 = {
  name : 'hull(10000)',
  api  : 'hull(sphere)',
  div  : '10000',
  func : function runme() { return hull(sphere_10000) }
}

const hull_sphere_100000 = {
  name : 'hull(100000)',
  api  : 'hull(sphere)',
  div  : '100000',
  func : function runme() { return hull(sphere_100000) }
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
