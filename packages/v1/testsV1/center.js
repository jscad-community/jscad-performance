const { CSG, CAG } = require('@jscad/csg')

let arc_16 = null // 10 points
let arc_196 = null // 100 points
let arc_396 = null // 200 points
let arc_796 = null // 400 points

let circle_10 = null // 10 points
let circle_100 = null // 100 points
let circle_1000 = null // 1000 points

let sphere_7 = null // 98 points
let sphere_22 = null // 1012 points
let sphere_70 = null // 9940 points

const setupCenter = {
  name: 'center setup',
  api: 'setup',
  div: '0',
  func: function runme () {
    arc_16 = CSG.Path2D.arc({radius: 100, startangle: 0, endangle: 180, resolution: 16})
    arc_196 = CSG.Path2D.arc({radius: 100, startangle: 0, endangle: 180, resolution: 196})
    arc_396 = CSG.Path2D.arc({radius: 100, startangle: 0, endangle: 180, resolution: 396})
    arc_796 = CSG.Path2D.arc({radius: 100, startangle: 0, endangle: 180, resolution: 796})

    circle_10 = CAG.circle({ radius: 100, resolution: 10, center: [50, 50] })
    circle_100 = CAG.circle({ radius: 100, resolution: 100, center: [50, 50] })
    circle_1000 = CAG.circle({ radius: 100, resolution: 1000, center: [50, 50] })

    sphere_7 = CSG.sphere({ radius: 100, resolution: 7, center: [50, 50, 50] })
    sphere_22 = CSG.sphere({ radius: 100, resolution: 22, center: [50, 50, 50] })
    sphere_70 = CSG.sphere({ radius: 100, resolution: 70, center: [50, 50, 50] })
    return {}
  }
}

const center_arc_10 = {
  name: 'center(10)',
  api: 'center(arc)',
  div: '10',
  func: function runme () { return arc_16.center([true, true, true]) } // V1 DOES NOT SUPPORT
}

const center_arc_100 = {
  name: 'center(100)',
  api: 'center(arc)',
  div: '100',
  func: function runme () { return arc_196.center([true, true, true]) } // V1 DOES NOT SUPPORT
}

const center_arc_200 = {
  name: 'center(200)',
  api: 'center(arc)',
  div: '200',
  func: function runme () { return arc_396.center([true, true, true]) } // V1 DOES NOT SUPPORT
}

const center_arc_400 = {
  name: 'center(400)',
  api: 'center(arc)',
  div: '400',
  func: function runme () { return arc_796.center([true, true, true]) } // V1 DOES NOT SUPPORT
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

module.exports = {
  setupCenter,

  // center_arc_10, V1 DOES NOT SUPPORT
  // center_arc_100, V1 DOES NOT SUPPORT
  // center_arc_200, V1 DOES NOT SUPPORT
  // center_arc_400, V1 DOES NOT SUPPORT

  center_circle_10,
  center_circle_100,
  center_circle_1000,

  center_sphere_100,
  center_sphere_1000,
  center_sphere_10000
}
