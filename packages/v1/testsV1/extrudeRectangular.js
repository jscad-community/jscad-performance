const { CSG, CAG } = require('@jscad/csg')

let arc_16 = null // 10 points
let arc_196 = null // 100 points
let arc_396 = null // 200 points
let arc_796 = null // 400 points

const setupExtrudeRectangular = {
  name: 'extrudeRectangular setup',
  api: 'setup',
  div: '0',
  func: function runme () {
    arc_16 = CSG.Path2D.arc({ radius: 100, startangle: 0, endangle: 180, resolution: 16 })
    arc_196 = CSG.Path2D.arc({ radius: 100, startangle: 0, endangle: 180, resolution: 196 })
    arc_396 = CSG.Path2D.arc({ radius: 100, startangle: 0, endangle: 180, resolution: 396 })
    arc_796 = CSG.Path2D.arc({ radius: 100, startangle: 0, endangle: 180, resolution: 796 })
    return {}
  }
}

// EXTRUDE...

const extrudeRectangular_arc_10 = {
  name: 'extrudeRectangular(arc)',
  api: 'extrudeRectangular(arc)',
  div: '16',
  func: function runme () { return arc_16.rectangularExtrude(3, 10, 8) }
}

const extrudeRectangular_arc_100 = {
  name: 'extrudeRectangular(arc)',
  api: 'extrudeRectangular(arc)',
  div: '196',
  func: function runme () { return arc_196.rectangularExtrude(3, 10, 8) }
}

const extrudeRectangular_arc_200 = {
  name: 'extrudeRectangular(arc)',
  api: 'extrudeRectangular(arc)',
  div: '396',
  func: function runme () { return arc_396.rectangularExtrude(3, 10, 8) }
}

const extrudeRectangular_arc_400 = {
  name: 'extrudeRectangular(arc)',
  api: 'extrudeRectangular(arc)',
  div: '796',
  func: function runme () { return arc_796.rectangularExtrude(3, 10, 8) }
}

module.exports = {
  setupExtrudeRectangular,

  extrudeRectangular_arc_10,
  extrudeRectangular_arc_100,
  extrudeRectangular_arc_200
  extrudeRectangular_arc_400,

  // FIXME missing extrudeRectangular of circle
}
