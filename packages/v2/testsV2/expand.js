const { primitives, expansions } = require('@jscad/modeling')

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

const setupExpand = {
  name: 'expand setup',
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

// EXPANSIONS... expand

const expand_arc_10 = {
  name: 'expand(10)',
  api: 'expand(arc)',
  div: '10',
  func: function run () { return expansions.expand({ delta: 5, corners: 'round', segments: 16 }, arc_16) }
}

const expand_arc_100 = {
  name: 'expand(100)',
  api: 'expand(arc)',
  div: '100',
  func: function run () { return expansions.expand({ delta: 5, corners: 'round', segments: 16 }, arc_196) }
}

const expand_arc_200 = {
  name: 'expand(200)',
  api: 'expand(arc)',
  div: '200',
  func: function run () { return expansions.expand({ delta: 5, corners: 'round', segments: 16 }, arc_396) }
}

const expand_arc_400 = {
  name: 'expand(400)',
  api: 'expand(arc)',
  div: '400',
  func: function run () { return expansions.expand({ delta: 5, corners: 'round', segments: 16 }, arc_796) }
}

const expand_circle_10 = {
  name: 'expand(10)',
  api: 'expand(circle)',
  div: '10',
  func: function run () { return expansions.expand({ delta: 5, corners: 'round', segments: 16 }, circle_10) }
}

const expand_circle_100 = {
  name: 'expand(100)',
  api: 'expand(circle)',
  div: '100',
  func: function run () { return expansions.expand({ delta: 5, corners: 'round', segments: 16 }, circle_100) }
}

const expand_circle_1000 = {
  name: 'expand(1000)',
  api: 'expand(circle)',
  div: '1000',
  func: function run () { return expansions.expand({ delta: 5, corners: 'round', segments: 16 }, circle_1000) }
}

const expand_sphere_100 = {
  name: 'expand(100)',
  api: 'expand(sphere)',
  div: '100',
  func: function run () { return expansions.expand({ delta: 5, corners: 'round', segments: 12 }, sphere_7) }
}

const expand_sphere_1000 = {
  name: 'expand(1000)',
  api: 'expand(sphere)',
  div: '1000',
  func: function run () { return expansions.expand({ delta: 5, corners: 'round', segments: 12 }, sphere_22) }
}

module.exports = {
  setupExpand,

  expand_arc_10,
  expand_arc_100,
  expand_arc_200,
  expand_arc_400,

  expand_circle_10,
  expand_circle_100,
  expand_circle_1000,

  expand_sphere_100
  // expand_sphere_1000
}
