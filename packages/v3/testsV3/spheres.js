import { sphere } from '@jscad/modeling'

export const sphere12 = {
  name: 'sphere(segments: 12)',
  api: 'sphere',
  div: '12',
  func: function runme () { return sphere({ radius: 100, segments: 12 }) }
}

export const sphere36 = {
  name: 'sphere(segments: 36)',
  api: 'sphere',
  div: '36',
  func: function runme () { return sphere({ radius: 100, segments: 36 }) }
}

export const sphere72 = {
  name: 'sphere(segments: 72)',
  api: 'sphere',
  div: '72',
  func: function runme () { return sphere({ radius: 100, segments: 72 }) }
}

export const sphere144 = {
  name: 'sphere(segments: 144)',
  api: 'sphere',
  div: '144',
  func: function runme () { return sphere({ radius: 100, segments: 144 }) }
}

export const sphere360 = {
  name: 'sphere(segments: 360)',
  api: 'sphere',
  div: '360',
  func: function runme () { return sphere({ radius: 100, segments: 360 }) }
}
