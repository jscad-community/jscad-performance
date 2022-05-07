const {circle, sphere} = require('@jscad/modeling').primitives
const {translate} = require('@jscad/modeling').transforms

const {scission, union} = require('@jscad/modeling').booleans

// no overlapping shapes
var centers = [
  [0, 0, 0],
  [1000, 1000, 1000],
  [2000, 2000, 2000],
  [3000, 3000, 3000],
  [4000, 4000, 4000],
  [5000, 5000, 5000],
  [6000, 6000, 6000],
  [7000, 7000, 7000],
  [8000, 8000, 8000],
  [9000, 9000, 9000],
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

const setupScission = {
  name : 'scission setup',
  api  : 'setup',
  div  : '0',
  func : function runme() {
    circle_100 = union(centers.map((center) => translate(center, circle({radius: 50, segments: 10}))))
    circle_500 = union(centers.map((center) => translate(center, circle({radius: 50, segments: 50}))))
    circle_1000 = union(centers.map((center) => translate(center, circle({radius: 50, segments: 100}))))
    circle_5000 = union(centers.map((center) => translate(center, circle({radius: 50, segments: 500}))))
    circle_10000 = union(centers.map((center) => translate(center, circle({radius: 50, segments: 1000}))))

    sphere_600 = union(centers.map((center) => translate(center, sphere({radius: 50, segments: 6}))))
    sphere_1000 = union(centers.map((center) => translate(center, sphere({radius: 50, segments: 7}))))
    sphere_10000 = union(centers.map((center) => translate(center, sphere({radius: 50, segments: 22}))))
    sphere_100000 = union(centers.map((center) => translate(center, sphere({radius: 50, segments: 70}))))

    return {}
  }
}

const scission_circle_100 = {
  name : 'scission(100)',
  api  : 'scission(circle)',
  div  : '100',
  func : function runme() { return scission(circle_100) }
}

const scission_circle_500 = {
  name : 'scission(500)',
  api  : 'scission(circle)',
  div  : '500',
  func : function runme() { return scission(circle_500) }
}

const scission_circle_1000 = {
  name : 'scission(1000)',
  api  : 'scission(circle)',
  div  : '1000',
  func : function runme() { return scission(circle_1000) }
}

const scission_circle_5000 = {
  name : 'scission(5000)',
  api  : 'scission(circle)',
  div  : '5000',
  func : function runme() { return scission(circle_5000) }
}

const scission_circle_10000 = {
  name : 'scission(10000)',
  api  : 'scission(circle)',
  div  : '10000',
  func : function runme() { return scission(circle_10000) }
}

const scission_sphere_600 = {
  name : 'scission(600)',
  api  : 'scission(sphere)',
  div  : '600',
  func : function runme() { return scission(sphere_600) }
}

const scission_sphere_1000 = {
  name : 'scission(1000)',
  api  : 'scission(sphere)',
  div  : '1000',
  func : function runme() { return scission(sphere_1000) }
}

const scission_sphere_10000 = {
  name : 'scission(10000)',
  api  : 'scission(sphere)',
  div  : '10000',
  func : function runme() { return scission(sphere_10000) }
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
  scission_sphere_10000,
}
