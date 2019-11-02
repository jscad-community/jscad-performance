const {arc, circle, sphere} = require('./csg.js/src/primitives');

const {geom2, geom3, path2} = require('./csg.js/src/geometry');

const {extrudeRotate} = require('./csg.js/src/operations/extrusions')

let circle_10 = null // 10 points
let circle_50 = null // 50 points
let circle_100 = null // 100 points

const setupExtrudeRotate = {
  name : 'measurements setup',
  api  : 'setup',
  div  : '0',
  func : function runme() {
    circle_10 = circle({radius: 100, segments: 10, center: [0, 500]})
    circle_50 = circle({radius: 100, segments: 50, center: [0, 500]})
    circle_100 = circle({radius: 100, segments: 100, center: [0, 500]})
    return {}
  }
}

// EXTRUSIONS... extrudeLinear, extrudeRectangular, extrudeRoate

const extrudeRotate_100 = {
  name : 'extrudeRotate(100)',
  api  : 'extrudeRotate(100)',
  div  : '100',
  func : function run() { return extrudeRotate({segments: 10}, circle_10) }
}

const extrudeRotate_500 = {
  name : 'extrudeRotate(500)',
  api  : 'extrudeRotate(500)',
  div  : '500',
  func : function run() { return extrudeRotate({segments: 50}, circle_10) }
}

const extrudeRotate_1000 = {
  name : 'extrudeRotate(1000)',
  api  : 'extrudeRotate(1000)',
  div  : '1000',
  func : function run() { return extrudeRotate({segments: 20}, circle_50) }
}

const extrudeRotate_5000 = {
  name : 'extrudeRotate(5000)',
  api  : 'extrudeRotate(5000)',
  div  : '5000',
  func : function run() { return extrudeRotate({segments: 100}, circle_50) }
}

const extrudeRotate_10000 = {
  name : 'extrudeRotate(10000)',
  api  : 'extrudeRotate(10000)',
  div  : '10000',
  func : function run() { return extrudeRotate({segments: 200}, circle_50) }
}

module.exports = {
  setupExtrudeRotate,

  extrudeRotate_100,
  extrudeRotate_500,
  extrudeRotate_1000,
  extrudeRotate_5000,
  extrudeRotate_10000
}
