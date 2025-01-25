import { cylinder } from '@jscad/modeling'

export const cylinder12 = {
  name: 'cylinder(segments: 12)',
  api: 'cylinder',
  div: '12',
  func: function runme () { return cylinder({ startRadius: 100, endRadius: 100, segments: 12 }) }
}

export const cylinder36 = {
  name: 'cylinder(segments: 36)',
  api: 'cylinder',
  div: '36',
  func: function runme () { return cylinder({ startRadius: 100, endRadius: 100, segments: 36 }) }
}

export const cylinder72 = {
  name: 'cylinder(segments: 72)',
  api: 'cylinder',
  div: '72',
  func: function runme () { return cylinder({ startRadius: 100, endRadius: 100, segments: 72 }) }
}

export const cylinder144 = {
  name: 'cylinder(segments: 144)',
  api: 'cylinder',
  div: '144',
  func: function runme () { return cylinder({ startRadius: 100, endRadius: 100, segments: 144 }) }
}

export const cylinder360 = {
  name: 'cylinder(segments: 360)',
  api: 'cylinder',
  div: '360',
  func: function runme () { return cylinder({ startRadius: 100, endRadius: 100, segments: 360 }) }
}
