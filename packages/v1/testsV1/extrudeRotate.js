const { CSG, CAG } = require('@jscad/csg')

let circle_10 = null // 10 points
let circle_50 = null // 50 points
let circle_100 = null // 100 points

const setupExtrudeRotate = {
  name: 'extrudeRotate setup',
  api: 'setup',
  div: '0',
  func: function runme () {
    circle_10 = CAG.circle({ radius: 100, resolution: 10, center: [0, 500] })
    circle_50 = CAG.circle({ radius: 100, resolution: 50, center: [0, 500] })
    circle_100 = CAG.circle({ radius: 100, resolution: 100, center: [0, 500] })
    return {}
  }
}

// EXTRUDE...

const extrudeRotate_100 = {
  name: 'extrudeRotate(100)',
  api: 'extrudeRotate(100)',
  div: '100',
  func: function runme () { return circle_10.rotateExtrude({ fn: 10 }) }
}

const extrudeRotate_500 = {
  name: 'extrudeRotate(500)',
  api: 'extrudeRotate(500)',
  div: '500',
  func: function runme () { return circle_10.rotateExtrude({ fn: 50 }) }
}

const extrudeRotate_1000 = {
  name: 'extrudeRotate(1000)',
  api: 'extrudeRotate(1000)',
  div: '1000',
  func: function runme () { return circle_50.rotateExtrude({ fn: 20 }) }
}

const extrudeRotate_5000 = {
  name: 'extrudeRotate(5000)',
  api: 'extrudeRotate(5000)',
  div: '5000',
  func: function runme () { return circle_50.rotateExtrude({ fn: 100 }) }
}

const extrudeRotate_10000 = {
  name: 'extrudeRotate(10000)',
  api: 'extrudeRotate(10000)',
  div: '10000',
  func: function runme () { return circle_50.rotateExtrude({ fn: 200 }) }
}

module.exports = {
  setupExtrudeRotate,

  extrudeRotate_100,
  extrudeRotate_500,
  extrudeRotate_1000,
  extrudeRotate_5000,
  extrudeRotate_10000
}
