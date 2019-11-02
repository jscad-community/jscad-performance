const {circle, sphere} = require('./csg.js/src/primitives');

const measureArea = require('./csg.js/src/operations/measurements/measureArea')

var circle_10 = null // 10 points
var circle_100 = null // 100 points
var circle_1000 = null // 1000 points
var circle_10000 = null // 10000 points

var sphere_7 = null // 98 points
var sphere_22 = null // 1012 points
var sphere_70 = null // 9940 points
var sphere_158 = null // 50244 points
var sphere_224 = null // 99904 points

const setupArea = {
  name : 'measurements setup',
  api  : 'setup',
  div  : '0',
  func : function runme() {
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

const measureArea_circle_10 = {
  name : 'measureArea(10)',
  api  : 'measureArea(circle)',
  div  : '10',
  func : function runme() { return measureArea(circle_10) }
}

const measureArea_circle_100 = {
  name : 'measureArea(100)',
  api  : 'measureArea(circle)',
  div  : '100',
  func : function runme() { return measureArea(circle_100) }
}

const measureArea_circle_1000 = {
  name : 'measureArea(1000)',
  api  : 'measureArea(circle)',
  div  : '1000',
  func : function runme() { return measureArea(circle_1000) }
}

const measureArea_circle_10000 = {
  name : 'measureArea(10000)',
  api  : 'measureArea(circle)',
  div  : '10000',
  func : function runme() { return measureArea(circle_10000) }
}

const measureArea_sphere_100 = {
  name : 'measureArea(100)',
  api  : 'measureArea(sphere)',
  div  : '100',
  func : function runme() { return measureArea(sphere_7) }
}

const measureArea_sphere_1000 = {
  name : 'measureArea(1000)',
  api  : 'measureArea(sphere)',
  div  : '1000',
  func : function runme() { return measureArea(sphere_22) }
}

const measureArea_sphere_10000 = {
  name : 'measureArea(10000)',
  api  : 'measureArea(sphere)',
  div  : '10000',
  func : function runme() { return measureArea(sphere_70) }
}

const measureArea_sphere_50000 = {
  name : 'measureArea(50000)',
  api  : 'measureArea(sphere)',
  div  : '50000',
  func : function runme() { return measureArea(sphere_158) }
}

const measureArea_sphere_100000 = {
  name : 'measureArea(100000)',
  api  : 'measureArea(sphere)',
  div  : '100000',
  func : function runme() { return measureArea(sphere_224) }
}

module.exports = {
  setupArea,

  measureArea_circle_10,
  measureArea_circle_100,
  measureArea_circle_1000,
  measureArea_circle_10000,

  measureArea_sphere_100,
  measureArea_sphere_1000,
  measureArea_sphere_10000,
  measureArea_sphere_100000,
  //measureArea_sphere_50000
}
