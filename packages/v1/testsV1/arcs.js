const { CSG } = require('@jscad/csg')

const arc_12 = {
  name: 'Path2D.arc(resolution: 12)',
  api: 'arc',
  div: '12',
  func: function runme () { return CSG.Path2D.arc({ radius: 100, startangle: 0, endangle: 180, resolution: 12 }) }
}

const arc_36 = {
  name: 'Path2D.arc(resolution: 36)',
  api: 'arc',
  div: '36',
  func: function runme () { return CSG.Path2D.arc({ radius: 100, startangle: 0, endangle: 180, resolution: 36 }) }
}

const arc_72 = {
  name: 'Path2D.arc(resolution: 72)',
  api: 'arc',
  div: '72',
  func: function runme () { return CSG.Path2D.arc({ radius: 100, startangle: 0, endangle: 180, resolution: 72 }) }
}

const arc_144 = {
  name: 'Path2D.arc(resolution: 144)',
  api: 'arc',
  div: '144',
  func: function runme () { return CSG.Path2D.arc({ radius: 100, startangle: 0, endangle: 180, resolution: 144 }) }
}

const arc_360 = {
  name: 'Path2D.arc(resolution: 360)',
  api: 'arc',
  div: '360',
  func: function runme () { return CSG.Path2D.arc({ radius: 100, startangle: 0, endangle: 180, resolution: 360 }) }
}

module.exports = {
  arc_12,
  arc_36,
  arc_72,
  arc_144,
  arc_360
}
