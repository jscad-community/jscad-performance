const {arc, circle, sphere} = require('./csg.js/src/primitives');

const {geom2, geom3, path2} = require('./csg.js/src/geometry');

const {extrudeLinear} = require('./csg.js/src/operations/extrusions')

let circle_10 = null // 10 points
let circle_50 = null // 50 points
let circle_100 = null // 100 points

const setupExtrudeLinear = {
  name : 'measurements setup',
  api  : 'setup',
  div  : '0',
  func : function runme() {
    circle_10 = circle({radius: 100, segments: 10})
    circle_50 = circle({radius: 100, segments: 50})
    circle_100 = circle({radius: 100, segments: 100})
    return {}
  }
}

// EXTRUSIONS... extrudeLinear, extrudeRectangular, extrudeRotate

const extrudeLinear_100 = {
  name : 'extrudeLinear(100)',
  api  : 'extrudeLinear(100)',
  div  : '100',
  func : function run() { return extrudeLinear({offset: [0,0,100], twistAngle: 5, twistSteps: 10}, circle_10) }
}

const extrudeLinear_500 = {
  name : 'extrudeLinear(500)',
  api  : 'extrudeLinear(500)',
  div  : '500',
  func : function run() { return extrudeLinear({offset: [0,0,100], twistAngle: 5, twistSteps: 10}, circle_50) }
}

const extrudeLinear_1000 = {
  name : 'extrudeLinear(1000)',
  api  : 'extrudeLinear(1000)',
  div  : '1000',
  func : function run() { return extrudeLinear({offset: [0,0,100], twistAngle: 5, twistSteps: 10}, circle_100) }
}

const extrudeLinear_5000 = {
  name : 'extrudeLinear(5000)',
  api  : 'extrudeLinear(5000)',
  div  : '5000',
  func : function run() { return extrudeLinear({offset: [0,0,100], twistAngle: 5, twistSteps: 50}, circle_100) }
}

const extrudeLinear_10000 = {
  name : 'extrudeLinear(10000)',
  api  : 'extrudeLinear(10000)',
  div  : '10000',
  func : function run() { return extrudeLinear({offset: [0,0,100], twistAngle: 5, twistSteps: 100}, circle_100) }
}

module.exports = {
  setupExtrudeLinear,

  extrudeLinear_100,
  extrudeLinear_500,
  extrudeLinear_1000,
  extrudeLinear_5000,
  extrudeLinear_10000
}
