const { CSG } = require('@jscad/csg')

const startPoint = new CSG.Path2D([[10, -20]])
const controlPoints = [[10, -10], [25, -10], [25, -20]]

const appendBezier_12 = {
  name: 'appendBezier(segments: 12)',
  api: 'appendBezier',
  div: '12',
  func: function runme () { return startPoint.appendBezier(controlPoints, { resolution: 12 }) }
}

const appendBezier_36 = {
  name: 'appendBezier(segments: 36)',
  api: 'appendBezier',
  div: '36',
  func: function runme () { return startPoint.appendBezier(controlPoints, { resolution: 36 }) }
}

const appendBezier_72 = {
  name: 'appendBezier(segments: 72)',
  api: 'appendBezier',
  div: '72',
  func: function runme () { return startPoint.appendBezier(controlPoints, { resolution: 72 }) }
}

const appendBezier_144 = {
  name: 'appendBezier(segments: 144)',
  api: 'appendBezier',
  div: '144',
  func: function runme () { return startPoint.appendBezier(controlPoints, { resolution: 144 }) }
}

const appendBezier_360 = {
  name: 'appendBezier(segments: 360)',
  api: 'appendBezier',
  div: '360',
  func: function runme () { return startPoint.appendBezier(controlPoints, { resolution: 360 }) }
}

module.exports = {
  appendBezier_12,
  appendBezier_36,
  appendBezier_72,
  appendBezier_144,
  appendBezier_360
}
