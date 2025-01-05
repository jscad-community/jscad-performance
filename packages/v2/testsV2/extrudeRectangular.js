const { arc, circle } = require('@jscad/modeling').primitives

const { extrudeRectangular } = require('@jscad/modeling').extrusions

let arc_16 = null // 10 points
let arc_196 = null // 100 points
let arc_396 = null // 200 points
let arc_796 = null // 400 points

let circle_10 = null // 10 points
let circle_100 = null // 100 points
let circle_1000 = null // 1000 points

const setupExtrudeRectangular = {
  name: 'extrudeRectangular setup',
  api: 'setup',
  div: '0',
  func: function runme () {
    arc_16 = arc({ radius: 100, startAngle: 0, endAngle: 180, segments: 16 })
    arc_196 = arc({ radius: 100, startAngle: 0, endAngle: 180, segments: 196 })
    arc_396 = arc({ radius: 100, startAngle: 0, endAngle: 180, segments: 396 })
    arc_796 = arc({ radius: 100, startAngle: 0, endAngle: 180, segments: 796 })

    circle_10 = circle({ radius: 100, segments: 10 })
    circle_100 = circle({ radius: 100, segments: 100 })
    circle_1000 = circle({ radius: 100, segments: 1000 })
    return {}
  }
}

// EXTRUSIONS... extrudeRectangular

const extrudeRectangular_arc_10 = {
  name: 'extrudeRectangular(arc)',
  api: 'extrudeRectangular(arc)',
  div: '16',
  func: function run () { return extrudeRectangular({ size: 3, height: 10, corners: 'round', segments: 8 }, arc_16) }
}

const extrudeRectangular_arc_100 = {
  name: 'extrudeRectangular(arc)',
  api: 'extrudeRectangular(arc)',
  div: '196',
  func: function run () { return extrudeRectangular({ size: 3, height: 10, corners: 'round', segments: 8 }, arc_196) }
}

const extrudeRectangular_arc_200 = {
  name: 'extrudeRectangular(arc)',
  api: 'extrudeRectangular(arc)',
  div: '396',
  func: function run () { return extrudeRectangular({ size: 3, height: 10, corners: 'round', segments: 8 }, arc_396) }
}

const extrudeRectangular_arc_400 = {
  name: 'extrudeRectangular(arc)',
  api: 'extrudeRectangular(arc)',
  div: '796',
  func: function run () { return extrudeRectangular({ size: 3, height: 10, corners: 'round', segments: 8 }, arc_796) }
}

const extrudeRectangular_circle_10 = {
  name: 'extrudeRectangular(circle)',
  api: 'extrudeRectangular(circle)',
  div: '10',
  func: function run () { return extrudeRectangular({ size: 3, height: 10, corners: 'round', segments: 16 }, circle_10) }
}

const extrudeRectangular_circle_100 = {
  name: 'extrudeRectangular(circle)',
  api: 'extrudeRectangular(circle)',
  div: '100',
  func: function run () { return extrudeRectangular({ size: 3, height: 10, corners: 'round', segments: 16 }, circle_100) }
}

const extrudeRectangular_circle_1000 = {
  name: 'extrudeRectangular(circle)',
  api: 'extrudeRectangular(circle)',
  div: '1000',
  func: function run () { return extrudeRectangular({ size: 3, height: 10, corners: 'round', segments: 16 }, circle_1000) }
}

module.exports = {
  setupExtrudeRectangular,

  extrudeRectangular_arc_10,
  extrudeRectangular_arc_100,
  extrudeRectangular_arc_200,
  extrudeRectangular_arc_400,

  extrudeRectangular_circle_10,
  extrudeRectangular_circle_100
  // extrudeRectangular_circle_1000,
}
