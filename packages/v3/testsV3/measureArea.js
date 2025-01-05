import { circle, sphere, measureArea } from '@jscad/modeling'

let circle10 = null // 10 points
let circle100 = null // 100 points
let circle1000 = null // 1000 points
let circle10000 = null // 10000 points

let sphere7 = null // 98 points
let sphere22 = null // 1012 points
let sphere70 = null // 9940 points
let sphere224 = null // 99904 points

export const _setupArea = {
  name: 'measurements setup',
  api: 'setup',
  div: '0',
  func: function runme () {
    circle10 = circle({ radius: 100, segments: 10 })
    circle100 = circle({ radius: 100, segments: 100 })
    circle1000 = circle({ radius: 100, segments: 1000 })
    circle10000 = circle({ radius: 100, segments: 10000 })

    sphere7 = sphere({ radius: 100, segments: 7 })
    sphere22 = sphere({ radius: 100, segments: 22 })
    sphere70 = sphere({ radius: 100, segments: 70 })
    sphere224 = sphere({ radius: 100, segments: 224 })

    return {}
  }
}

export const measureAreaCircle10 = {
  name: 'measureArea(10)',
  api: 'measureArea(circle)',
  div: '10',
  func: function runme () { return measureArea(circle10) }
}

export const measureAreaCircle100 = {
  name: 'measureArea(100)',
  api: 'measureArea(circle)',
  div: '100',
  func: function runme () { return measureArea(circle100) }
}

export const measureAreaCircle1000 = {
  name: 'measureArea(1000)',
  api: 'measureArea(circle)',
  div: '1000',
  func: function runme () { return measureArea(circle1000) }
}

export const measureAreaCircle10000 = {
  name: 'measureArea(10000)',
  api: 'measureArea(circle)',
  div: '10000',
  func: function runme () { return measureArea(circle10000) }
}

export const measureAreaSphere100 = {
  name: 'measureArea(100)',
  api: 'measureArea(sphere)',
  div: '100',
  func: function runme () { return measureArea(sphere7) }
}

export const measureAreaSphere1000 = {
  name: 'measureArea(1000)',
  api: 'measureArea(sphere)',
  div: '1000',
  func: function runme () { return measureArea(sphere22) }
}

export const measureAreaSphere10000 = {
  name: 'measureArea(10000)',
  api: 'measureArea(sphere)',
  div: '10000',
  func: function runme () { return measureArea(sphere70) }
}

export const measureAreaSphere100000 = {
  name: 'measureArea(100000)',
  api: 'measureArea(sphere)',
  div: '100000',
  func: function runme () { return measureArea(sphere224) }
}
