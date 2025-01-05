import { circle } from '@jscad/modeling'

export const circle12 = {
  name: 'circle(segments: 12)',
  api: 'circle',
  div: '12',
  func: function runme () { return circle({ radius: 100, segments: 12 }) }
}

export const circle36 = {
  name: 'circle(segments: 36)',
  api: 'circle',
  div: '36',
  func: function runme () { return circle({ radius: 100, segments: 36 }) }
}

export const circle72 = {
  name: 'circle(segments: 72)',
  api: 'circle',
  div: '72',
  func: function runme () { return circle({ radius: 100, segments: 72 }) }
}

export const circle144 = {
  name: 'circle(segments: 144)',
  api: 'circle',
  div: '144',
  func: function runme () { return circle({ radius: 100, segments: 144 }) }
}

export const circle360 = {
  name: 'circle(segments: 360)',
  api: 'circle',
  div: '360',
  func: function runme () { return circle({ radius: 100, segments: 360 }) }
}
