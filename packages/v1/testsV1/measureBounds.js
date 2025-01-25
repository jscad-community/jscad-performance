const { CSG, CAG } = require('@jscad/csg')

const arc_16 = null // 10 points
const arc_196 = null // 100 points
const arc_396 = null // 200 points
const arc_796 = null // 400 points

let circle_10 = null // 10 points
let circle_100 = null // 100 points
let circle_1000 = null // 1000 points
let circle_10000 = null // 10000 points

let sphere_7 = null // 98 points
let sphere_22 = null // 1012 points
let sphere_70 = null // 9940 points
let sphere_224 = null // 99904 points

const setupBounds = {
  name: 'measureBounds setup',
  api: 'setup',
  div: '0',
  func: function runme () {
    // arc_16 = CSG.Path2D.arc({radius: 100, startangle: 0, endangle: 180, resolution: 16})
    // arc_196 = CSG.Path2D.arc({radius: 100, startangle: 0, endangle: 180, resolution: 196})
    // arc_396 = CSG.Path2D.arc({radius: 100, startangle: 0, endangle: 180, resolution: 396})
    // arc_796 = CSG.Path2D.arc({radius: 100, startangle: 0, endangle: 180, resolution: 796})

    circle_10 = CAG.circle({ radius: 100, resolution: 10 })
    circle_100 = CAG.circle({ radius: 100, resolution: 100 })
    circle_1000 = CAG.circle({ radius: 100, resolution: 1000 })
    circle_10000 = CAG.circle({ radius: 100, resolution: 10000 })

    sphere_7 = CSG.sphere({ radius: 100, resolution: 7 })
    sphere_22 = CSG.sphere({ radius: 100, resolution: 22 })
    sphere_70 = CSG.sphere({ radius: 100, resolution: 70 })
    sphere_224 = CSG.sphere({ radius: 100, resolution: 224 })
    return {}
  }
}

const measureBounds_circle_10 = {
  name: 'measureBounds(10)',
  api: 'measureBounds(circle)',
  div: '10',
  func: function runme () { return circle_10.getBounds() }
}

const measureBounds_circle_100 = {
  name: 'measureBounds(100)',
  api: 'measureBounds(circle)',
  div: '100',
  func: function runme () { return circle_100.getBounds() }
}

const measureBounds_circle_1000 = {
  name: 'measureBounds(1000)',
  api: 'measureBounds(circle)',
  div: '1000',
  func: function runme () { return circle_1000.getBounds() }
}

const measureBounds_circle_10000 = {
  name: 'measureBounds(10000)',
  api: 'measureBounds(circle)',
  div: '10000',
  func: function runme () { return circle_10000.getBounds() }
}

const measureBounds_sphere_100 = {
  name: 'measureBounds(100)',
  api: 'measureBounds(sphere)',
  div: '100',
  func: function runme () { return sphere_7.getBounds() }
}

const measureBounds_sphere_1000 = {
  name: 'measureBounds(1000)',
  api: 'measureBounds(sphere)',
  div: '1000',
  func: function runme () { return sphere_22.getBounds() }
}

const measureBounds_sphere_10000 = {
  name: 'measureBounds(10000)',
  api: 'measureBounds(sphere)',
  div: '10000',
  func: function runme () { return sphere_70.getBounds() }
}

const measureBounds_sphere_100000 = {
  name: 'measureBounds(100000)',
  api: 'measureBounds(sphere)',
  div: '100000',
  func: function runme () { return sphere_224.getBounds() }
}

module.exports = {
  setupBounds,

  measureBounds_circle_10,
  measureBounds_circle_100,
  measureBounds_circle_1000,
  measureBounds_circle_10000,

  measureBounds_sphere_100,
  measureBounds_sphere_1000,
  measureBounds_sphere_10000,
  measureBounds_sphere_100000
}
