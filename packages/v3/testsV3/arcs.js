import { arc } from '@jscad/modeling'

export const arc12 = {
  name: 'arc(segments: 12)',
  api: 'arc',
  div: '12',
  func: function runme () { return arc({ radius: 100, startangle: 0, endangle: 180, segments: 12 }) }
}

export const arc36 = {
  name: 'arc(segments: 36)',
  api: 'arc',
  div: '36',
  func: function runme () { return arc({ radius: 100, startangle: 0, endangle: 180, segments: 36 }) }
}

export const arc72 = {
  name: 'arc(segments: 72)',
  api: 'arc',
  div: '72',
  func: function runme () { return arc({ radius: 100, startangle: 0, endangle: 180, segments: 72 }) }
}

export const arc144 = {
  name: 'arc(segments: 144)',
  api: 'arc',
  div: '144',
  func: function runme () { return arc({ radius: 100, startangle: 0, endangle: 180, segments: 144 }) }
}

export const arc360 = {
  name: 'arc(segments: 360)',
  api: 'arc',
  div: '360',
  func: function runme () { return arc({ radius: 100, startangle: 0, endangle: 180, segments: 360 }) }
}
