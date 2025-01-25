const { primitives, transforms } = require('@jscad/modeling')

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
    arc_16 = primitives.arc({ radius: 100, startAngle: 0, endAngle: 180, segments: 16 })
    arc_196 = primitives.arc({ radius: 100, startAngle: 0, endAngle: 180, segments: 196 })
    arc_396 = primitives.arc({ radius: 100, startAngle: 0, endAngle: 180, segments: 396 })
    arc_796 = primitives.arc({ radius: 100, startAngle: 0, endAngle: 180, segments: 796 })

    circle_10 = primitives.circle({ radius: 100, segments: 10 })
    circle_100 = primitives.circle({ radius: 100, segments: 100 })
    circle_1000 = primitives.circle({ radius: 100, segments: 1000 })

    sphere_7 = primitives.sphere({ radius: 100, segments: 7 })
    sphere_22 = primitives.sphere({ radius: 100, segments: 22 })
    sphere_70 = primitives.sphere({ radius: 100, segments: 70 })
    return {}
  }
}

const center_arc_10 = {
  name: 'center(10)',
  api: 'center(arc)',
  div: '10',
  func: function runme () { return transforms.center({ axes: [true, true, true] }, arc_16) }
}

const center_arc_100 = {
  name: 'center(100)',
  api: 'center(arc)',
  div: '100',
  func: function runme () { return transforms.center({ axes: [true, true, true] }, arc_196) }
}

const center_arc_200 = {
  name: 'center(200)',
  api: 'center(arc)',
  div: '200',
  func: function runme () { return transforms.center({ axes: [true, true, true] }, arc_396) }
}

const center_arc_400 = {
  name: 'center(400)',
  api: 'center(arc)',
  div: '400',
  func: function runme () { return transforms.center({ axes: [true, true, true] }, arc_796) }
}

const center_circle_10 = {
  name: 'center(10)',
  api: 'center(circle)',
  div: '10',
  func: function runme () { return transforms.center({ axes: [true, true, true] }, circle_10) }
}

const center_circle_100 = {
  name: 'center(100)',
  api: 'center(circle)',
  div: '100',
  func: function runme () { return transforms.center({ axes: [true, true, true] }, circle_100) }
}

const center_circle_1000 = {
  name: 'center(1000)',
  api: 'center(circle)',
  div: '1000',
  func: function runme () { return transforms.center({ axes: [true, true, true] }, circle_1000) }
}

const center_sphere_100 = {
  name: 'center(100)',
  api: 'center(sphere)',
  div: '100',
  func: function runme () { return transforms.center({ axes: [true, true, true] }, sphere_7) }
}

const center_sphere_1000 = {
  name: 'center(1000)',
  api: 'center(sphere)',
  div: '1000',
  func: function runme () { return transforms.center({ axes: [true, true, true] }, sphere_22) }
}

const center_sphere_10000 = {
  name: 'center(10000)',
  api: 'center(sphere)',
  div: '10000',
  func: function runme () { return transforms.center({ axes: [true, true, true] }, sphere_70) }
}

module.exports = {
  setupCenter,

  center_arc_10,
  center_arc_100,
  center_arc_200,
  center_arc_400,

  center_circle_10,
  center_circle_100,
  center_circle_1000,

  center_sphere_100,
  center_sphere_1000,
  center_sphere_10000
}
