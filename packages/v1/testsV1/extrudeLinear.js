const { CSG, CAG } = require('@jscad/csg')

let circle_10 = null // 10 points
let circle_50 = null // 50 points
let circle_100 = null // 100 points

const setupExtrudeLinear = {
  name: 'extrudeLinear setup',
  api: 'setup',
  div: '0',
  func: function runme () {
    circle_10 = CAG.circle({ radius: 100, resolution: 10, center: [50, 50] })
    circle_50 = CAG.circle({ radius: 100, resolution: 50, center: [50, 50] })
    circle_100 = CAG.circle({ radius: 100, resolution: 100, center: [50, 50] })
    return {}
  }
}

// EXTRUDE...

const extrudeLinear_100 = {
  name: 'extrudeLinear',
  api: 'extrudeLinear',
  div: '100',
  func: function runme () { return circle_10.extrude({ offset: [0, 0, 100], twiststeps: 10, twistangle: 5 }) }
}

const extrudeLinear_500 = {
  name: 'extrudeLinear',
  api: 'extrudeLinear',
  div: '500',
  func: function runme () { return circle_50.extrude({ offset: [0, 0, 100], twiststeps: 10, twistangle: 5 }) }
}

const extrudeLinear_1000 = {
  name: 'extrudeLinear',
  api: 'extrudeLinear',
  div: '1000',
  func: function runme () { return circle_100.extrude({ offset: [0, 0, 100], twiststeps: 10, twistangle: 5 }) }
}

const extrudeLinear_5000 = {
  name: 'extrudeLinear',
  api: 'extrudeLinear',
  div: '5000',
  func: function runme () { return circle_100.extrude({ offset: [0, 0, 100], twiststeps: 50, twistangle: 5 }) }
}

const extrudeLinear_10000 = {
  name: 'extrudeLinear',
  api: 'extrudeLinear',
  div: '10000',
  func: function runme () { return circle_100.extrude({ offset: [0, 0, 100], twiststeps: 100, twistangle: 5 }) }
}

module.exports = {
  setupExtrudeLinear,

  extrudeLinear_100,
  extrudeLinear_500,
  extrudeLinear_1000,
  extrudeLinear_5000,
  extrudeLinear_10000
}
