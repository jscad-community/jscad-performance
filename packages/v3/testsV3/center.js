import { arc, circle, sphere, center } from '@jscad/modeling'

let arc16 = null // 10 points
let arc196 = null // 100 points
let arc396 = null // 200 points
let arc796 = null // 400 points

let circle10 = null // 10 points
let circle100 = null // 100 points
let circle1000 = null // 1000 points

let sphere7 = null // 98 points
let sphere22 = null // 1012 points
let sphere70 = null // 9940 points

export const _setupCenter = {
  name: 'center setup',
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

    sphere7 = sphere({ radius: 100, segments: 7 })
    sphere22 = sphere({ radius: 100, segments: 22 })
    sphere70 = sphere({ radius: 100, segments: 70 })

    return {}
  }
}

export const centerArc10 = {
  name: 'center(10)',
  api: 'center(arc)',
  div: '10',
  func: function runme () { return center({ axes: [true, true, true] }, arc16) }
}

export const centerArc100 = {
  name: 'center(100)',
  api: 'center(arc)',
  div: '100',
  func: function runme () { return center({ axes: [true, true, true] }, arc196) }
}

export const centerArc200 = {
  name: 'center(200)',
  api: 'center(arc)',
  div: '200',
  func: function runme () { return center({ axes: [true, true, true] }, arc396) }
}

export const centerArc400 = {
  name: 'center(400)',
  api: 'center(arc)',
  div: '400',
  func: function runme () { return center({ axes: [true, true, true] }, arc796) }
}

export const centerCircle10 = {
  name: 'center(10)',
  api: 'center(circle)',
  div: '10',
  func: function runme () { return center({ axes: [true, true, true] }, circle10) }
}

export const centerCircle100 = {
  name: 'center(100)',
  api: 'center(circle)',
  div: '100',
  func: function runme () { return center({ axes: [true, true, true] }, circle100) }
}

export const centerCircle1000 = {
  name: 'center(1000)',
  api: 'center(circle)',
  div: '1000',
  func: function runme () { return center({ axes: [true, true, true] }, circle1000) }
}

export const centerSphere100 = {
  name: 'center(100)',
  api: 'center(sphere)',
  div: '100',
  func: function runme () { return center({ axes: [true, true, true] }, sphere7) }
}

export const centerSphere1000 = {
  name: 'center(1000)',
  api: 'center(sphere)',
  div: '1000',
  func: function runme () { return center({ axes: [true, true, true] }, sphere22) }
}

export const centerSphere10000 = {
  name: 'center(10000)',
  api: 'center(sphere)',
  div: '10000',
  func: function runme () { return center({ axes: [true, true, true] }, sphere70) }
}
