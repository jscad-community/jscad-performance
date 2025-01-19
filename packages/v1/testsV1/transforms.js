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

const setupTransforms = {
  name: 'transforms setup',
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
    return {}
  }
}

// TRANSFORMS... typical combinations are scale, rotate, translate

const newfactors = [5, 5, 5]

const newangles = [90, 90, 90]

const newoffsets = [-10, -10, -10]

const transform_circle_10 = {
  name: 'transform(10)',
  api: 'transform(circle)',
  div: '10',
  func: function runme () { return circle_10.scale(5).rotateZ(90).translate(newoffsets) }
}

const transform_circle_100 = {
  name: 'transform(100)',
  api: 'transform(circle)',
  div: '100',
  func: function runme () { return circle_100.scale(5).rotateZ(90).translate(newoffsets) }
}

const transform_circle_1000 = {
  name: 'transform(1000)',
  api: 'transform(circle)',
  div: '1000',
  func: function runme () { return circle_1000.scale(5).rotateZ(90).translate(newoffsets) }
}

const transform_sphere_100 = {
  name: 'transform(100)',
  api: 'transform(sphere)',
  div: '100',
  func: function runme () { return sphere_7.scale(5).rotateZ(90).translate(newoffsets) }
}

const transform_sphere_1000 = {
  name: 'transform(1000)',
  api: 'transform(sphere)',
  div: '1000',
  func: function runme () { return sphere_22.scale(5).rotateZ(90).translate(newoffsets) }
}

const transform_sphere_10000 = {
  name: 'transform(10000)',
  api: 'transform(sphere)',
  div: '10000',
  func: function runme () { return sphere_70.scale(5).rotateZ(90).translate(newoffsets) }
}

module.exports = {
  setupTransforms,

  transform_circle_10,
  transform_circle_100,
  transform_circle_1000,

  transform_sphere_100,
  transform_sphere_1000,
  transform_sphere_10000
}
