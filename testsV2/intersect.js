const {circle, sphere} = require('@jscad/modeling').primitives
const {translate} = require('@jscad/modeling').transforms

const {intersect} = require('@jscad/modeling').booleans

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
var circle_500 = null // 50 points X centers
var circle_1000 = null // 100 points X centers
var circle_5000 = null // 500 points X centers
var circle_10000 = null // 1000 points X centers

var sphere_1000 = null // 98 points X centers
var sphere_10000 = null // 1012 points X centers

const setupIntersect = {
  name : 'intersect setup',
  api  : 'setup',
  div  : '0',
  func : function runme() {
    circle_100 = centers.map((center) => translate(center, circle({radius: 100, segments: 10})))
    circle_500 = centers.map((center) => translate(center, circle({radius: 100, segments: 50})))
    circle_1000 = centers.map((center) => translate(center, circle({radius: 100, segments: 100})))
    circle_5000 = centers.map((center) => translate(center, circle({radius: 100, segments: 500})))
    circle_10000 = centers.map((center) => translate(center, circle({radius: 100, segments: 1000})))

    sphere_600 = centers.map((center) => translate(center, sphere({radius: 100, segments: 6})))
    sphere_1000 = centers.map((center) => translate(center, sphere({radius: 100, segments: 7})))
    sphere_10000 = centers.map((center) => translate(center, sphere({radius: 100, segments: 22})))

    return {}
  }
}

const intersect_circle_100 = {
  name : 'intersect(100)',
  api  : 'intersect(circle)',
  div  : '100',
  func : function runme() { return intersect(circle_100) }
}

const intersect_circle_500 = {
  name : 'intersect(500)',
  api  : 'intersect(circle)',
  div  : '500',
  func : function runme() { return intersect(circle_500) }
}

const intersect_circle_1000 = {
  name : 'intersect(1000)',
  api  : 'intersect(circle)',
  div  : '1000',
  func : function runme() { return intersect(circle_1000) }
}

const intersect_circle_5000 = {
  name : 'intersect(5000)',
  api  : 'intersect(circle)',
  div  : '5000',
  func : function runme() { return intersect(circle_5000) }
}

const intersect_circle_10000 = {
  name : 'intersect(10000)',
  api  : 'intersect(circle)',
  div  : '10000',
  func : function runme() { return intersect(circle_10000) }
}

const intersect_sphere_600 = {
  name : 'intersect(600)',
  api  : 'intersect(sphere)',
  div  : '600',
  func : function runme() { return intersect(sphere_600) }
}

const intersect_sphere_1000 = {
  name : 'intersect(1000)',
  api  : 'intersect(sphere)',
  div  : '1000',
  func : function runme() { return intersect(sphere_1000) }
}

const intersect_sphere_10000 = {
  name : 'intersect(10000)',
  api  : 'intersect(sphere)',
  div  : '10000',
  func : function runme() { return intersect(sphere_10000) }
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
