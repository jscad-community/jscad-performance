import { path2 } from '@jscad/modeling'

const startPoint = path2.create([[10, -20]])
const controlPoints = [[10, -10], [25, -10], [25, -20]]

export const appendBezier12 = {
  name: 'appendBezier(segments: 12)',
  api: 'appendBezier',
  div: '12',
  func: function runme () { return path2.appendBezier({ controlPoints, segments: 12 }, startPoint) }
}

export const appendBezier36 = {
  name: 'appendBezier(segments: 36)',
  api: 'appendBezier',
  div: '36',
  func: function runme () { return path2.appendBezier({ controlPoints, segments: 36 }, startPoint) }
}

export const appendBezier72 = {
  name: 'appendBezier(segments: 72)',
  api: 'appendBezier',
  div: '72',
  func: function runme () { return path2.appendBezier({ controlPoints, segments: 72 }, startPoint) }
}

export const appendBezier144 = {
  name: 'appendBezier(segments: 144)',
  api: 'appendBezier',
  div: '144',
  func: function runme () { return path2.appendBezier({ controlPoints, segments: 144 }, startPoint) }
}

export const appendBezier360 = {
  name: 'appendBezier(segments: 360)',
  api: 'appendBezier',
  div: '360',
  func: function runme () { return path2.appendBezier({ controlPoints, segments: 360 }, startPoint) }
}
