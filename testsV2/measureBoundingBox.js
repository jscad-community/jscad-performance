const {primitives, measurements} = require('@jscad/modeling')

var arc_16 = null // 10 points
var arc_196 = null // 100 points
var arc_396 = null // 200 points
var arc_796 = null // 400 points

var circle_10 = null // 10 points
var circle_100 = null // 100 points
var circle_1000 = null // 1000 points
var circle_10000 = null // 10000 points

var sphere_7 = null // 98 points
var sphere_22 = null // 1012 points
var sphere_70 = null // 9940 points
var sphere_158 = null // 50244 points
var sphere_224 = null // 99904 points

const setupBounds = {
  name : 'measurements setup',
  api  : 'setup',
  div  : '0',
  func : function runme() {
    arc_16 = primitives.arc({radius: 100, startAngle: 0, endAngle: 180, segments: 16})
    arc_196 = primitives.arc({radius: 100, startAngle: 0, endAngle: 180, segments: 196})
    arc_396 = primitives.arc({radius: 100, startAngle: 0, endAngle: 180, segments: 396})
    arc_796 = primitives.arc({radius: 100, startAngle: 0, endAngle: 180, segments: 796})

    circle_10 = primitives.circle({radius: 100, segments: 10})
    circle_100 = primitives.circle({radius: 100, segments: 100})
    circle_1000 = primitives.circle({radius: 100, segments: 1000})
    circle_10000 = primitives.circle({radius: 100, segments: 10000})

    sphere_7 = primitives.sphere({radius: 100, segments: 7})
    sphere_22 = primitives.sphere({radius: 100, segments: 22})
    sphere_70 = primitives.sphere({radius: 100, segments: 70})
    sphere_158 = primitives.sphere({radius: 100, segments: 158})
    sphere_224 = primitives.sphere({radius: 100, segments: 224})
    return {}
  }
}

const measureBoundingBox_circle_10 = {
  name : 'measureBoundingBox(10)',
  api  : 'measureBoundingBox(circle)',
  div  : '10',
  func : function runme() { return measurements.measureBoundingBox(circle_10) }
}

const measureBoundingBox_circle_100 = {
  name : 'measureBoundingBox(100)',
  api  : 'measureBoundingBox(circle)',
  div  : '100',
  func : function runme() { return measurements.measureBoundingBox(circle_100) }
}

const measureBoundingBox_circle_1000 = {
  name : 'measureBoundingBox(1000)',
  api  : 'measureBoundingBox(circle)',
  div  : '1000',
  func : function runme() { return measurements.measureBoundingBox(circle_1000) }
}

const measureBoundingBox_circle_10000 = {
  name : 'measureBoundingBox(10000)',
  api  : 'measureBoundingBox(circle)',
  div  : '10000',
  func : function runme() { return measurements.measureBoundingBox(circle_10000) }
}

const measureBoundingBox_sphere_100 = {
  name : 'measureBoundingBox(100)',
  api  : 'measureBoundingBox(sphere)',
  div  : '100',
  func : function runme() { return measurements.measureBoundingBox(sphere_7) }
}

const measureBoundingBox_sphere_1000 = {
  name : 'measureBoundingBox(1000)',
  api  : 'measureBoundingBox(sphere)',
  div  : '1000',
  func : function runme() { return measurements.measureBoundingBox(sphere_22) }
}

const measureBoundingBox_sphere_10000 = {
  name : 'measureBoundingBox(10000)',
  api  : 'measureBoundingBox(sphere)',
  div  : '10000',
  func : function runme() { return measurements.measureBoundingBox(sphere_70) }
}

const measureBoundingBox_sphere_100000 = {
  name : 'measureBoundingBox(100000)',
  api  : 'measureBoundingBox(sphere)',
  div  : '100000',
  func : function runme() { return measurements.measureBoundingBox(sphere_224) }
}

module.exports = {
  setupBounds,

  measureBoundingBox_circle_10,
  measureBoundingBox_circle_100,
  measureBoundingBox_circle_1000,
  measureBoundingBox_circle_10000,

  measureBoundingBox_sphere_100,
  measureBoundingBox_sphere_1000,
  measureBoundingBox_sphere_10000,
  measureBoundingBox_sphere_100000
}
