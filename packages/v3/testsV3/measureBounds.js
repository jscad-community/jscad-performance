import { arc, circle, sphere, measureBoundingBox } from '@jscad/modeling'

let arc16 = null // 10 points
let arc196 = null // 100 points
let arc396 = null // 200 points
let arc796 = null // 400 points

let circle10 = null // 10 points
let circle100 = null // 100 points
let circle1000 = null // 1000 points
let circle10000 = null // 10000 points

let sphere7 = null // 98 points
let sphere22 = null // 1012 points
let sphere70 = null // 9940 points
let sphere224 = null // 99904 points

export const _setupBounds = {
  name: 'measurements setup',
  api: 'setup',
  div: '0',
  func: function runme () {
    arc16 = arc({ radius: 100, startAngle: 0, endAngle: 180, segments: 16 })
    arc196 = arc({ radius: 100, startAngle: 0, endAngle: 180, segments: 196 })
    arc396 = arc({ radius: 100, startAngle: 0, endAngle: 180, segments: 396 })
    arc796 = arc({ radius: 100, startAngle: 0, endAngle: 180, segments: 796 })

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

export const measureBoundsCircle10 = {
  name: 'measureBounds(10)',
  api: 'measureBounds(circle)',
  div: '10',
  func: function runme () { return measureBoundingBox(circle10) }
}

export const measureBoundsCircle100 = {
  name: 'measureBounds(100)',
  api: 'measureBounds(circle)',
  div: '100',
  func: function runme () { return measureBoundingBox(circle100) }
}

export const measureBoundsCircle1000 = {
  name: 'measureBounds(1000)',
  api: 'measureBounds(circle)',
  div: '1000',
  func: function runme () { return measureBoundingBox(circle1000) }
}

export const measureBoundsCircle10000 = {
  name: 'measureBounds(10000)',
  api: 'measureBounds(circle)',
  div: '10000',
  func: function runme () { return measureBoundingBox(circle10000) }
}

export const measureBoundsSphere100 = {
  name: 'measureBounds(100)',
  api: 'measureBounds(sphere)',
  div: '100',
  func: function runme () { return measureBoundingBox(sphere7) }
}

export const measureBoundsSphere1000 = {
  name: 'measureBounds(1000)',
  api: 'measureBounds(sphere)',
  div: '1000',
  func: function runme () { return measureBoundingBox(sphere22) }
}

export const measureBoundsSphere10000 = {
  name: 'measureBounds(10000)',
  api: 'measureBounds(sphere)',
  div: '10000',
  func: function runme () { return measureBoundingBox(sphere70) }
}

export const measureBoundsSphere100000 = {
  name: 'measureBounds(100000)',
  api: 'measureBounds(sphere)',
  div: '100000',
  func: function runme () { return measureBoundingBox(sphere224) }
}
