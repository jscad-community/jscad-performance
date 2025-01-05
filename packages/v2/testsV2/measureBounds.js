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

const setupBounds = {
  name: 'measurementBounds setup',
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

const measureBounds_circle_10 = {
  name: 'measureBounds(10)',
  api: 'measureBounds(circle)',
  div: '10',
  func: function runme () { return measurements.measureBoundingBox(circle_10) }
}

const measureBounds_circle_100 = {
  name: 'measureBounds(100)',
  api: 'measureBounds(circle)',
  div: '100',
  func: function runme () { return measurements.measureBoundingBox(circle_100) }
}

const measureBounds_circle_1000 = {
  name: 'measureBounds(1000)',
  api: 'measureBounds(circle)',
  div: '1000',
  func: function runme () { return measurements.measureBoundingBox(circle_1000) }
}

const measureBounds_circle_10000 = {
  name: 'measureBounds(10000)',
  api: 'measureBounds(circle)',
  div: '10000',
  func: function runme () { return measurements.measureBoundingBox(circle_10000) }
}

const measureBounds_sphere_100 = {
  name: 'measureBounds(100)',
  api: 'measureBounds(sphere)',
  div: '100',
  func: function runme () { return measurements.measureBoundingBox(sphere_7) }
}

const measureBounds_sphere_1000 = {
  name: 'measureBounds(1000)',
  api: 'measureBounds(sphere)',
  div: '1000',
  func: function runme () { return measurements.measureBoundingBox(sphere_22) }
}

const measureBounds_sphere_10000 = {
  name: 'measureBounds(10000)',
  api: 'measureBounds(sphere)',
  div: '10000',
  func: function runme () { return measurements.measureBoundingBox(sphere_70) }
}

const measureBounds_sphere_100000 = {
  name: 'measureBounds(100000)',
  api: 'measureBounds(sphere)',
  div: '100000',
  func: function runme () { return measurements.measureBoundingBox(sphere_224) }
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
