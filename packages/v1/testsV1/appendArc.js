const { CSG } = require('@jscad/csg')

const startpoint = new CSG.Path2D([[0, 0]])
const endpoint = [100, 100]

const appendArc_12 = {
  name: 'appendArc(segments: 12)',
  api: 'appendArc',
  div: '12',
  func: function runme () { return startpoint.appendArc(endpoint, {radius: 10, resolution: 12}) }
}

const appendArc_36 = {
  name: 'appendArc(segments: 36)',
  api: 'appendArc',
  div: '36',
  func: function runme () { return startpoint.appendArc(endpoint, {radius: 10, resolution: 36}) }
}

const appendArc_72 = {
  name: 'appendArc(segments: 72)',
  api: 'appendArc',
  div: '72',
  func: function runme () { return startpoint.appendArc(endpoint, {radius: 10, resolution: 72}) }
}

const appendArc_144 = {
  name: 'appendArc(segments: 144)',
  api: 'appendArc',
  div: '144',
  func: function runme () { return startpoint.appendArc(endpoint, {radius: 10, resolution: 144}) }
}

const appendArc_360 = {
  name: 'appendArc(segments: 360)',
  api: 'appendArc',
  div: '360',
  func: function runme () { return startpoint.appendArc(endpoint, {radius: 10, resolution: 360}) }
}

module.exports = {
  appendArc_12,
  appendArc_36,
  appendArc_72,
  appendArc_144,
  appendArc_360
}
