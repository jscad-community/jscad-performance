const {circle, sphere} = require('@jscad/modeling').primitives
const {translate} = require('@jscad/modeling').transforms

const {subtract} = require('@jscad/modeling').booleans

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

var sphere_600 = null // 98 points X centers
var sphere_1000 = null // 98 points X centers
var sphere_10000 = null // 1012 points X centers
var sphere_100000 = null // 9940 points X centers

const setupSubtract = {
  name : 'subtract setup',
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
    sphere_100000 = centers.map((center) => translate(center, sphere({radius: 100, segments: 70})))

    return {}
  }
}

const subtract_circle_100 = {
  name : 'subtract(100)',
  api  : 'subtract(circle)',
  div  : '100',
  func : function runme() { return subtract(circle_100) }
}

const subtract_circle_500 = {
  name : 'subtract(500)',
  api  : 'subtract(circle)',
  div  : '500',
  func : function runme() { return subtract(circle_500) }
}

const subtract_circle_1000 = {
  name : 'subtract(1000)',
  api  : 'subtract(circle)',
  div  : '1000',
  func : function runme() { return subtract(circle_1000) }
}

const subtract_circle_5000 = {
  name : 'subtract(5000)',
  api  : 'subtract(circle)',
  div  : '5000',
  func : function runme() { return subtract(circle_5000) }
}

const subtract_circle_10000 = {
  name : 'subtract(10000)',
  api  : 'subtract(circle)',
  div  : '10000',
  func : function runme() { return subtract(circle_10000) }
}

const subtract_sphere_600 = {
  name : 'subtract(600)',
  api  : 'subtract(sphere)',
  div  : '600',
  func : function runme() { return subtract(sphere_600) }
}

const subtract_sphere_1000 = {
  name : 'subtract(1000)',
  api  : 'subtract(sphere)',
  div  : '1000',
  func : function runme() { return subtract(sphere_1000) }
}

const subtract_sphere_10000 = {
  name : 'subtract(10000)',
  api  : 'subtract(sphere)',
  div  : '10000',
  func : function runme() { return subtract(sphere_10000) }
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
