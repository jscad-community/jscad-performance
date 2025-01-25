const { primitives, measurements } = require('@jscad/modeling')

let arc_16 = null // 10 points
let arc_196 = null // 100 points
let arc_396 = null // 200 points
let arc_796 = null // 400 points

let circle_10 = null // 10 points
let circle_100 = null // 100 points
let circle_1000 = null // 1000 points
let circle_10000 = null // 10000 points

let sphere_7 = null // 98 points
let sphere_22 = null // 1012 points
let sphere_70 = null // 9940 points
let sphere_158 = null // 50244 points
let sphere_224 = null // 99904 points

const setupBoundingSphere = {
  name: 'measurementBoundingSphere setup',
  api: 'setup',
  div: '0',
  func: function runme () {
    arc_16 = primitives.arc({ radius: 100, startAngle: 0, endAngle: 180, segments: 16 })
    arc_196 = primitives.arc({ radius: 100, startAngle: 0, endAngle: 180, segments: 196 })
    arc_396 = primitives.arc({ radius: 100, startAngle: 0, endAngle: 180, segments: 396 })
    arc_796 = primitives.arc({ radius: 100, startAngle: 0, endAngle: 180, segments: 796 })

    circle_10 = primitives.circle({ radius: 100, segments: 10 })
    circle_100 = primitives.circle({ radius: 100, segments: 100 })
    circle_1000 = primitives.circle({ radius: 100, segments: 1000 })
    circle_10000 = primitives.circle({ radius: 100, segments: 10000 })

    sphere_7 = primitives.sphere({ radius: 100, segments: 7 })
    sphere_22 = primitives.sphere({ radius: 100, segments: 22 })
    sphere_70 = primitives.sphere({ radius: 100, segments: 70 })
    sphere_158 = primitives.sphere({ radius: 100, segments: 158 })
    sphere_224 = primitives.sphere({ radius: 100, segments: 224 })
    return {}
  }
}

const measureBoundingSphere_circle_10 = {
  name: 'measureBoundingSphere(10)',
  api: 'measureBoundingSphere(circle)',
  div: '10',
  func: function runme () { return measurements.measureBoundingSphere(circle_10) }
}

const measureBoundingSphere_circle_100 = {
  name: 'measureBoundingSphere(100)',
  api: 'measureBoundingSphere(circle)',
  div: '100',
  func: function runme () { return measurements.measureBoundingSphere(circle_100) }
}

const measureBoundingSphere_circle_1000 = {
  name: 'measureBoundingSphere(1000)',
  api: 'measureBoundingSphere(circle)',
  div: '1000',
  func: function runme () { return measurements.measureBoundingSphere(circle_1000) }
}

const measureBoundingSphere_circle_10000 = {
  name: 'measureBoundingSphere(10000)',
  api: 'measureBoundingSphere(circle)',
  div: '10000',
  func: function runme () { return measurements.measureBoundingSphere(circle_10000) }
}

const measureBoundingSphere_sphere_100 = {
  name: 'measureBoundingSphere(100)',
  api: 'measureBoundingSphere(sphere)',
  div: '100',
  func: function runme () { return measurements.measureBoundingSphere(sphere_7) }
}

const measureBoundingSphere_sphere_1000 = {
  name: 'measureBoundingSphere(1000)',
  api: 'measureBoundingSphere(sphere)',
  div: '1000',
  func: function runme () { return measurements.measureBoundingSphere(sphere_22) }
}

const measureBoundingSphere_sphere_10000 = {
  name: 'measureBoundingSphere(10000)',
  api: 'measureBoundingSphere(sphere)',
  div: '10000',
  func: function runme () { return measurements.measureBoundingSphere(sphere_70) }
}

const measureBoundingSphere_sphere_100000 = {
  name: 'measureBoundingSphere(100000)',
  api: 'measureBoundingSphere(sphere)',
  div: '100000',
  func: function runme () { return measurements.measureBoundingSphere(sphere_224) }
}

module.exports = {
  setupBoundingSphere,

  measureBoundingSphere_circle_10,
  measureBoundingSphere_circle_100,
  measureBoundingSphere_circle_1000,
  measureBoundingSphere_circle_10000,

  measureBoundingSphere_sphere_100,
  measureBoundingSphere_sphere_1000,
  measureBoundingSphere_sphere_10000,
  measureBoundingSphere_sphere_100000
}
