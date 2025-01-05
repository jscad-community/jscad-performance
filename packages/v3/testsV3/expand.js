import { arc, circle, sphere, offset } from '@jscad/modeling'

let arc16 = null // 10 points
let arc196 = null // 100 points
let arc396 = null // 200 points
let arc796 = null // 400 points

let circle10 = null // 10 points
let circle100 = null // 100 points
let circle1000 = null // 1000 points

let sphere7 = null // 98 points
let sphere22 = null // 1012 points

export const _setupExpand = {
  name: 'expand setup',
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

    return {}
  }
}

// EXPANSIONS... offset with + delta

export const expandArc10 = {
  name: 'expand(10)',
  api: 'expand(arc)',
  div: '10',
  func: function run () { return offset({ delta: 5, corners: 'round', segments: 16 }, arc16) }
}

export const expandArc100 = {
  name: 'expand(100)',
  api: 'expand(arc)',
  div: '100',
  func: function run () { return offset({ delta: 5, corners: 'round', segments: 16 }, arc196) }
}

export const expandArc200 = {
  name: 'expand(200)',
  api: 'expand(arc)',
  div: '200',
  func: function run () { return offset({ delta: 5, corners: 'round', segments: 16 }, arc396) }
}

export const expandArc400 = {
  name: 'expand(400)',
  api: 'expand(arc)',
  div: '400',
  func: function run () { return offset({ delta: 5, corners: 'round', segments: 16 }, arc796) }
}

export const expandCircle10 = {
  name: 'expand(10)',
  api: 'expand(circle)',
  div: '10',
  func: function run () { return offset({ delta: 5, corners: 'round', segments: 16 }, circle10) }
}

export const expandCircle100 = {
  name: 'expand(100)',
  api: 'expand(circle)',
  div: '100',
  func: function run () { return offset({ delta: 5, corners: 'round', segments: 16 }, circle100) }
}

export const expandCircle1000 = {
  name: 'expand(1000)',
  api: 'expand(circle)',
  div: '1000',
  func: function run () { return offset({ delta: 5, corners: 'round', segments: 16 }, circle1000) }
}

export const expandSphere100 = {
  name: 'expand(100)',
  api: 'expand(sphere)',
  div: '100',
  func: function run () { return offset({ delta: 5, corners: 'round', segments: 12 }, sphere7) }
}

const expandSphere1000 = {
  name: 'expand(1000)',
  api: 'expand(sphere)',
  div: '1000',
  func: function run () { return offset({ delta: 5, corners: 'round', segments: 12 }, sphere22) }
}
