const { circle } = require('@jscad/modeling').primitives
const { translate } = require('@jscad/modeling').transforms

const { extrudeRotate } = require('@jscad/modeling').extrusions

let circle_10 = null // 10 points
let circle_50 = null // 50 points
let circle_100 = null // 100 points

const setupExtrudeRotate = {
  name: 'extrudeRotate setup',
  api: 'setup',
  div: '0',
  func: function runme () {
    circle_10 = translate([0, 500], circle({ radius: 100, segments: 10 }))
    circle_50 = translate([0, 500], circle({ radius: 100, segments: 50 }))
    circle_100 = translate([0, 500], circle({ radius: 100, segments: 100 }))
    return {}
  }
}

// EXTRUSIONS... extrudeRoate

const extrudeRotate_100 = {
  name: 'extrudeRotate',
  api: 'extrudeRotate',
  div: '100',
  func: function run () { return extrudeRotate({ segments: 10 }, circle_10) }
}

const extrudeRotate_500 = {
  name: 'extrudeRotate',
  api: 'extrudeRotate',
  div: '500',
  func: function run () { return extrudeRotate({ segments: 50 }, circle_10) }
}

const extrudeRotate_1000 = {
  name: 'extrudeRotate',
  api: 'extrudeRotate',
  div: '1000',
  func: function run () { return extrudeRotate({ segments: 20 }, circle_50) }
}

const extrudeRotate_5000 = {
  name: 'extrudeRotate',
  api: 'extrudeRotate',
  div: '5000',
  func: function run () { return extrudeRotate({ segments: 100 }, circle_50) }
}

const extrudeRotate_10000 = {
  name: 'extrudeRotate',
  api: 'extrudeRotate',
  div: '10000',
  func: function run () { return extrudeRotate({ segments: 200 }, circle_50) }
}

module.exports = {
  setupExtrudeRotate,

  extrudeRotate_100,
  extrudeRotate_500,
  extrudeRotate_1000,
  extrudeRotate_5000,
  extrudeRotate_10000
}
