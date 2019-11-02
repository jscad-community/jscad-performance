const {circle, sphere} = require('./csg.js/src/primitives');

const union = require('./csg.js/src/operations/booleans/union')

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

var sphere_600 = null // 60 points X centers
var sphere_1000 = null // 98 points X centers
var sphere_10000 = null // 1012 points X centers
var sphere_100000 = null // 9940 points X centers

const setupUnion = {
  name : 'union setup',
  api  : 'setup',
  div  : '0',
  func : function runme() {
    circle_100 = centers.map((center) => circle({radius: 100, segments: 10, center: center}))
    circle_500 = centers.map((center) => circle({radius: 100, segments: 50, center: center}))
    circle_1000 = centers.map((center) => circle({radius: 100, segments: 100, center: center}))
    circle_5000 = centers.map((center) => circle({radius: 100, segments: 500, center: center}))
    circle_10000 = centers.map((center) => circle({radius: 100, segments: 1000, center: center}))

    sphere_600 = centers.map((center) => sphere({radius: 100, segments: 6, center: center}))
    sphere_1000 = centers.map((center) => sphere({radius: 100, segments: 7, center: center}))
    sphere_10000 = centers.map((center) => sphere({radius: 100, segments: 22, center: center}))
    sphere_100000 = centers.map((center) => sphere({radius: 100, segments: 70, center: center}))

    return {}
  }
}

const union_circle_100 = {
  name : 'union(100)',
  api  : 'union(circle)',
  div  : '100',
  func : function runme() { return union(circle_100) }
}

const union_circle_500 = {
  name : 'union(500)',
  api  : 'union(circle)',
  div  : '500',
  func : function runme() { return union(circle_500) }
}

const union_circle_1000 = {
  name : 'union(1000)',
  api  : 'union(circle)',
  div  : '1000',
  func : function runme() { return union(circle_1000) }
}

const union_circle_5000 = {
  name : 'union(5000)',
  api  : 'union(circle)',
  div  : '5000',
  func : function runme() { return union(circle_5000) }
}

const union_circle_10000 = {
  name : 'union(10000)',
  api  : 'union(circle)',
  div  : '10000',
  func : function runme() { return union(circle_10000) }
}

const union_sphere_600 = {
  name : 'union(600)',
  api  : 'union(sphere)',
  div  : '600',
  func : function runme() { return union(sphere_600) }
}

const union_sphere_1000 = {
  name : 'union(1000)',
  api  : 'union(sphere)',
  div  : '1000',
  func : function runme() { return union(sphere_1000) }
}

const union_sphere_10000 = {
  name : 'union(10000)',
  api  : 'union(sphere)',
  div  : '10000',
  func : function runme() { return union(sphere_10000) }
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
  union_sphere_10000,
}
