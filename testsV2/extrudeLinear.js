const {primitives, extrusions} = require('@jscad/modeling');

let circle_10 = null // 10 points
let circle_50 = null // 50 points
let circle_100 = null // 100 points

const setupExtrudeLinear = {
  name : 'measurements setup',
  api  : 'setup',
  div  : '0',
  func : function runme() {
    circle_10 = primitives.circle({radius: 100, segments: 10})
    circle_50 = primitives.circle({radius: 100, segments: 50})
    circle_100 = primitives.circle({radius: 100, segments: 100})
    return {}
  }
}

// EXTRUSIONS... extrudeLinear

const extrudeLinear_100 = {
  name : 'extrudeLinear',
  api  : 'extrudeLinear',
  div  : '100',
  func : function run() { return extrusions.extrudeLinear({offset: [0,0,100], twistAngle: 5, twistSteps: 10}, circle_10) }
}

const extrudeLinear_500 = {
  name : 'extrudeLinear',
  api  : 'extrudeLinear',
  div  : '500',
  func : function run() { return extrusions.extrudeLinear({offset: [0,0,100], twistAngle: 5, twistSteps: 10}, circle_50) }
}

const extrudeLinear_1000 = {
  name : 'extrudeLinear',
  api  : 'extrudeLinear',
  div  : '1000',
  func : function run() { return extrusions.extrudeLinear({offset: [0,0,100], twistAngle: 5, twistSteps: 10}, circle_100) }
}

const extrudeLinear_5000 = {
  name : 'extrudeLinear',
  api  : 'extrudeLinear',
  div  : '5000',
  func : function run() { return extrusions.extrudeLinear({offset: [0,0,100], twistAngle: 5, twistSteps: 50}, circle_100) }
}

const extrudeLinear_10000 = {
  name : 'extrudeLinear',
  api  : 'extrudeLinear',
  div  : '10000',
  func : function run() { return extrusions.extrudeLinear({offset: [0,0,100], twistAngle: 5, twistSteps: 100}, circle_100) }
}

module.exports = {
  setupExtrudeLinear,

  extrudeLinear_100,
  extrudeLinear_500,
  extrudeLinear_1000,
  extrudeLinear_5000,
  extrudeLinear_10000
}
