const {geometries} = require('@jscad/modeling')
const {path2} = geometries

const startpoint = path2.create([[0, 0]])
const endpoint = [100, 100]

const appendArc_12 = {
  name : 'appendArc(segments: 12)',
  api  : 'appendArc',
  div  : '12',
  func : function runme() { return path2.appendArc({endpoint, radius: [10, 10], segments: 12}, startpoint) }
}

const appendArc_36 = {
  name : 'appendArc(segments: 36)',
  api  : 'appendArc',
  div  : '36',
  func : function runme() { return path2.appendArc({endpoint, radius: [10, 10], segments: 36}, startpoint) }
}

const appendArc_72 = {
  name : 'appendArc(segments: 72)',
  api  : 'appendArc',
  div  : '72',
  func : function runme() { return path2.appendArc({endpoint, radius: [10, 10], segments: 72}, startpoint) }
}

const appendArc_144 = {
  name : 'appendArc(segments: 144)',
  api  : 'appendArc',
  div  : '144',
  func : function runme() { return path2.appendArc({endpoint, radius: [10, 10], segments: 144}, startpoint) }
}

const appendArc_360 = {
  name : 'appendArc(segments: 360)',
  api  : 'appendArc',
  div  : '360',
  func : function runme() { return path2.appendArc({endpoint, radius: [10, 10], segments: 360}, startpoint) }
}

module.exports = {
  appendArc_12,
  appendArc_36,
  appendArc_72,
  appendArc_144,
  appendArc_360
}
