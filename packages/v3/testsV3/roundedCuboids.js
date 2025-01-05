import { roundedCuboid } from '@jscad/modeling'

export const roundedCuboid12 = {
  name: 'roundedCuboid(segments: 12)',
  api: 'roundedCube',
  div: '12',
  func: function runme () { return roundedCuboid({ size: [100, 100, 100], roundRadius: 10, segments: 12 }) }
}

export const roundedCuboid36 = {
  name: 'roundedCuboid(segments: 36)',
  api: 'roundedCube',
  div: '36',
  func: function runme () { return roundedCuboid({ size: [100, 100, 100], roundRadius: 10, segments: 36 }) }
}

export const roundedCuboid72 = {
  name: 'roundedCuboid(segments: 72)',
  api: 'roundedCube',
  div: '72',
  func: function runme () { return roundedCuboid({ size: [100, 100, 100], roundRadius: 10, segments: 72 }) }
}

export const roundedCuboid144 = {
  name: 'roundedCuboid(segments: 144)',
  api: 'roundedCube',
  div: '144',
  func: function runme () { return roundedCuboid({ size: [100, 100, 100], roundRadius: 10, segments: 144 }) }
}

export const roundedCuboid360 = {
  name: 'roundedCuboid(segments: 360)',
  api: 'roundedCube',
  div: '360',
  func: function runme () { return roundedCuboid({ size: [100, 100, 100], roundRadius: 10, segments: 360 }) }
}
