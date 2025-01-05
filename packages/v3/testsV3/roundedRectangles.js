import { roundedRectangle } from '@jscad/modeling'

export const roundedRectangle12 = {
  name: 'roundedRectangle',
  api: 'roundedRectangle',
  div: '12',
  func: function runme () { return roundedRectangle({ size: [100, 100], roundRadius: 10, segments: 12 }) }
}

export const roundedRectangle36 = {
  name: 'roundedRectangle',
  api: 'roundedRectangle',
  div: '36',
  func: function runme () { return roundedRectangle({ size: [100, 100], roundRadius: 10, segments: 36 }) }
}

export const roundedRectangle72 = {
  name: 'roundedRectangle',
  api: 'roundedRectangle',
  div: '72',
  func: function runme () { return roundedRectangle({ size: [100, 100], roundRadius: 10, segments: 72 }) }
}

export const roundedRectangle144 = {
  name: 'roundedRectangle',
  api: 'roundedRectangle',
  div: '144',
  func: function runme () { return roundedRectangle({ size: [100, 100], roundRadius: 10, segments: 144 }) }
}

export const roundedRectangle360 = {
  name: 'roundedRectangle',
  api: 'roundedRectangle',
  div: '360',
  func: function runme () { return roundedRectangle({ size: [100, 100], roundRadius: 10, segments: 360 }) }
}
