const { CSG, CAG } = require('@jscad/csg')

let circle_10 = null // 10 points
let circle_100 = null // 100 points
let circle_1000 = null // 1000 points

let sphere_7 = null // 98 points
let sphere_22 = null // 1012 points
let sphere_70 = null // 9940 points
let sphere_158 = null // 50244 points
let sphere_224 = null // 99904 points

const setupExpand = {
  name: 'expand setup',
  api: 'setup',
  div: '0',
  func: function runme () {
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

// EXPAND...

const expand_circle_10 = {
  name: 'expand(10)',
  api: 'expand(circle)',
  div: '10',
  func: function runme () { return circle_10.expand(5, 16) }
}

const expand_circle_100 = {
  name: 'expand(100)',
  api: 'expand(circle)',
  div: '100',
  func: function runme () { return circle_100.expand(5, 16) }
}

const expand_circle_1000 = {
  name: 'expand(1000)',
  api: 'expand(circle)',
  div: '1000',
  func: function runme () { return circle_1000.expand(5, 16) }
}

const expand_sphere_100 = {
  name: 'expand(100)',
  api: 'expand(sphere)',
  div: '100',
  func: function runme () { return sphere_7.expand(5, 12) }
}

const expand_sphere_1000 = {
  name: 'expand(1000)',
  api: 'expand(sphere)',
  div: '1000',
  func: function runme () { return sphere_22.expand(5, 12) }
}

const expand_sphere_10000 = {
  name: 'expand(10000)',
  api: 'expand(sphere)',
  div: '10000',
  func: function runme () { return sphere_70.expand(5, 12) }
}

const expand_sphere_50000 = {
  name: 'expand(50000)',
  api: 'expand(sphere)',
  div: '50000',
  func: function runme () { return sphere_158.expand(5, 12) }
}

const expand_sphere_100000 = {
  name: 'expand(100000)',
  api: 'expand(sphere)',
  div: '100000',
  func: function runme () { return sphere_224.expand(5, 12) }
}

module.exports = {
  setupExpand,

  expand_circle_10,
  expand_circle_100,
  expand_circle_1000,

  expand_sphere_100
  // expand_sphere_1000
}
