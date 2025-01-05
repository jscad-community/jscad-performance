const { CSG, CAG } = require('@jscad/csg')

const arc_16 = null // 10 points
const arc_196 = null // 100 points
const arc_396 = null // 200 points
const arc_796 = null // 400 points

let circle_10 = null // 10 points
let circle_100 = null // 100 points
let circle_1000 = null // 1000 points

let sphere_7 = null // 98 points
let sphere_22 = null // 1012 points
let sphere_70 = null // 9940 points
let sphere_158 = null // 50244 points
let sphere_224 = null // 99904 points

// number of points ['100', '1000', '10000', '100000', '200000', '400000']

const setupCenter = {
  name: 'center setup',
  api: 'setup',
  div: '0',
  func: function runme () {
    // arc_16 = CSG.Path2D.arc({radius: 100, startangle: 0, endangle: 180, resolution: 16})
    // arc_196 = CSG.Path2D.arc({radius: 100, startangle: 0, endangle: 180, resolution: 196})
    // arc_396 = CSG.Path2D.arc({radius: 100, startangle: 0, endangle: 180, resolution: 396})
    // arc_796 = CSG.Path2D.arc({radius: 100, startangle: 0, endangle: 180, resolution: 796})

    circle_10 = CAG.circle({ radius: 100, resolution: 10, center: [50, 50] })
    circle_100 = CAG.circle({ radius: 100, resolution: 100, center: [50, 50] })
    circle_1000 = CAG.circle({ radius: 100, resolution: 1000, center: [50, 50] })

    sphere_7 = CSG.sphere({ radius: 100, resolution: 7, center: [50, 50, 50] })
    sphere_22 = CSG.sphere({ radius: 100, resolution: 22, center: [50, 50, 50] })
    sphere_70 = CSG.sphere({ radius: 100, resolution: 70, center: [50, 50, 50] })
    sphere_158 = CSG.sphere({ radius: 100, resolution: 158, center: [50, 50, 50] })
    sphere_224 = CSG.sphere({ radius: 100, resolution: 224, center: [50, 50, 50] })
    return {}
  }
}

const center_circle_10 = {
  name: 'center(10)',
  api: 'center(circle)',
  div: '10',
  func: function runme () { return circle_10.center([true, true, true]) }
}

const center_circle_100 = {
  name: 'center(100)',
  api: 'center(circle)',
  div: '100',
  func: function runme () { return circle_100.center([true, true, true]) }
}

const center_circle_1000 = {
  name: 'center(1000)',
  api: 'center(circle)',
  div: '1000',
  func: function runme () { return circle_1000.center([true, true, true]) }
}

const center_sphere_100 = {
  name: 'center(100)',
  api: 'center(sphere)',
  div: '100',
  func: function runme () { return sphere_7.center([true, true, true]) }
}

const center_sphere_1000 = {
  name: 'center(1000)',
  api: 'center(sphere)',
  div: '1000',
  func: function runme () { return sphere_22.center([true, true, true]) }
}

const center_sphere_10000 = {
  name: 'center(10000)',
  api: 'center(sphere)',
  div: '10000',
  func: function runme () { return sphere_70.center([true, true, true]) }
}

const center_sphere_50000 = {
  name: 'center(50000)',
  api: 'center(sphere)',
  div: '50000',
  func: function runme () { return sphere_158.center([true, true, true]) }
}

const center_sphere_100000 = {
  name: 'center(100000)',
  api: 'center(sphere)',
  div: '100000',
  func: function runme () { return sphere_224.center([true, true, true]) }
}

module.exports = {
  setupCenter,
  center_circle_10,
  center_circle_100,
  center_circle_1000,
  center_sphere_100,
  center_sphere_1000,
  center_sphere_10000
//  center_sphere_100000,
//  center_sphere_50000
}
