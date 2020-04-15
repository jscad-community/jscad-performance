const {primitives, extrusions} = require('@jscad/modeling')

let circle_10 = null // 10 points
let circle_50 = null // 50 points
let circle_100 = null // 100 points

const setupExtrudeRotate = {
  name : 'measurements setup',
  api  : 'setup',
  div  : '0',
  func : function runme() {
    circle_10 = primitives.circle({radius: 100, segments: 10, center: [0, 500]})
    circle_50 = primitives.circle({radius: 100, segments: 50, center: [0, 500]})
    circle_100 = primitives.circle({radius: 100, segments: 100, center: [0, 500]})
    return {}
  }
}

// EXTRUSIONS... extrudeRoate

const extrudeRotate_100 = {
  name : 'extrudeRotate',
  api  : 'extrudeRotate',
  div  : '100',
  func : function run() { return extrusions.extrudeRotate({segments: 10}, circle_10) }
}

const extrudeRotate_500 = {
  name : 'extrudeRotate',
  api  : 'extrudeRotate',
  div  : '500',
  func : function run() { return extrusions.extrudeRotate({segments: 50}, circle_10) }
}

const extrudeRotate_1000 = {
  name : 'extrudeRotate',
  api  : 'extrudeRotate',
  div  : '1000',
  func : function run() { return extrusions.extrudeRotate({segments: 20}, circle_50) }
}

const extrudeRotate_5000 = {
  name : 'extrudeRotate',
  api  : 'extrudeRotate',
  div  : '5000',
  func : function run() { return extrusions.extrudeRotate({segments: 100}, circle_50) }
}

const extrudeRotate_10000 = {
  name : 'extrudeRotate',
  api  : 'extrudeRotate',
  div  : '10000',
  func : function run() { return extrusions.extrudeRotate({segments: 200}, circle_50) }
}

module.exports = {
  setupExtrudeRotate,

  extrudeRotate_100,
  extrudeRotate_500,
  extrudeRotate_1000,
  extrudeRotate_5000,
  extrudeRotate_10000
}
