const {arc, circle, sphere} = require('./csg.js/src/primitives');

const measureBounds = require('./csg.js/src/operations/measurements/measureBounds')

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
    arc_16 = arc({radius: 100, startAngle: 0, endAngle: 180, segments: 16})
    arc_196 = arc({radius: 100, startAngle: 0, endAngle: 180, segments: 196})
    arc_396 = arc({radius: 100, startAngle: 0, endAngle: 180, segments: 396})
    arc_796 = arc({radius: 100, startAngle: 0, endAngle: 180, segments: 796})

    circle_10 = circle({radius: 100, segments: 10})
    circle_100 = circle({radius: 100, segments: 100})
    circle_1000 = circle({radius: 100, segments: 1000})
    circle_10000 = circle({radius: 100, segments: 10000})

    sphere_7 = sphere({radius: 100, segments: 7})
    sphere_22 = sphere({radius: 100, segments: 22})
    sphere_70 = sphere({radius: 100, segments: 70})
    sphere_158 = sphere({radius: 100, segments: 158})
    sphere_224 = sphere({radius: 100, segments: 224})
    return {}
  }
}

const measureBounds_circle_10 = {
  name : 'measureBounds(10)',
  api  : 'measureBounds(circle)',
  div  : '10',
  func : function runme() { return measureBounds(circle_10) }
}

const measureBounds_circle_100 = {
  name : 'measureBounds(100)',
  api  : 'measureBounds(circle)',
  div  : '100',
  func : function runme() { return measureBounds(circle_100) }
}

const measureBounds_circle_1000 = {
  name : 'measureBounds(1000)',
  api  : 'measureBounds(circle)',
  div  : '1000',
  func : function runme() { return measureBounds(circle_1000) }
}

const measureBounds_circle_10000 = {
  name : 'measureBounds(10000)',
  api  : 'measureBounds(circle)',
  div  : '10000',
  func : function runme() { return measureBounds(circle_10000) }
}

const measureBounds_sphere_100 = {
  name : 'measureBounds(100)',
  api  : 'measureBounds(sphere)',
  div  : '100',
  func : function runme() { return measureBounds(sphere_7) }
}

const measureBounds_sphere_1000 = {
  name : 'measureBounds(1000)',
  api  : 'measureBounds(sphere)',
  div  : '1000',
  func : function runme() { return measureBounds(sphere_22) }
}

const measureBounds_sphere_10000 = {
  name : 'measureBounds(10000)',
  api  : 'measureBounds(sphere)',
  div  : '10000',
  func : function runme() { return measureBounds(sphere_70) }
}

const measureBounds_sphere_50000 = {
  name : 'measureBounds(50000)',
  api  : 'measureBounds(sphere)',
  div  : '50000',
  func : function runme() { return measureBounds(sphere_158) }
}

const measureBounds_sphere_100000 = {
  name : 'measureBounds(100000)',
  api  : 'measureBounds(sphere)',
  div  : '100000',
  func : function runme() { return measureBounds(sphere_224) }
}

module.exports = {
  setupBounds,

  measureBounds_circle_10,
  measureBounds_circle_100,
  measureBounds_circle_1000,
  measureBounds_circle_10000,

  measureBounds_sphere_100,
  measureBounds_sphere_1000,
  measureBounds_sphere_10000,
  measureBounds_sphere_100000,
  //measureBounds_sphere_50000
}
