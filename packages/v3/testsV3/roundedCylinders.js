import { roundedCylinder } from '@jscad/modeling'

export const roundedCylinder12 = {
  name: 'roundedCylinder(segments: 12)',
  api: 'roundedCylinder',
  div: '12',
  func: function runme () { return roundedCylinder({ radius: 100, roundradius: 10, segments: 12 }) }
}

export const roundedCylinder36 = {
  name: 'roundedCylinder(segments: 36)',
  api: 'roundedCylinder',
  div: '36',
  func: function runme () { return roundedCylinder({ radius: 100, roundradius: 10, segments: 36 }) }
}

export const roundedCylinder72 = {
  name: 'roundedCylinder(segments: 72)',
  api: 'roundedCylinder',
  div: '72',
  func: function runme () { return roundedCylinder({ radius: 100, roundradius: 10, segments: 72 }) }
}

export const roundedCylinder144 = {
  name: 'roundedCylinder(segments: 144)',
  api: 'roundedCylinder',
  div: '144',
  func: function runme () { return roundedCylinder({ radius: 100, roundradius: 10, segments: 144 }) }
}

export const roundedCylinder360 = {
  name: 'roundedCylinder(segments: 360)',
  api: 'roundedCylinder',
  div: '360',
  func: function runme () { return roundedCylinder({ radius: 100, roundradius: 10, segments: 360 }) }
}
