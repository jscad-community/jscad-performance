import { circle, sphere, translate, union } from '@jscad/modeling'

const centers2D = [
  [0, 0, 0],
  [10, 10, 0],
  [20, 20, 0],
  [30, 30, 0],
  [40, 40, 0],
  [50, 50, 0],
  [60, 60, 0],
  [70, 70, 0],
  [80, 80, 0],
  [90, 90, 0]
]

const centers3D = [
  [0, 0, 0],
  [10, 10, 10],
  [20, 20, 20],
  [30, 30, 30],
  [40, 40, 40],
  [50, 50, 50],
  [60, 60, 60],
  [70, 70, 70],
  [80, 80, 80],
  [90, 90, 90]
]

let circles100 = null // 10 points X centers
let circles500 = null // 50 points X centers
let circles1000 = null // 100 points X centers
let circles5000 = null // 500 points X centers
let circles10000 = null // 1000 points X centers

let spheres600 = null // 72 points X centers
let spheres1000 = null // 96 points X centers
let spheres10000 = null // 1092 points X centers

export const _setupUnion = {
  name: 'union setup',
  api: 'setup',
  div: '0',
  func: function runme () {
    circles100 = centers2D.map((center) => translate(center, circle({ radius: 100, segments: 10 })))
    circles500 = centers2D.map((center) => translate(center, circle({ radius: 100, segments: 50 })))
    circles1000 = centers2D.map((center) => translate(center, circle({ radius: 100, segments: 100 })))
    circles5000 = centers2D.map((center) => translate(center, circle({ radius: 100, segments: 500 })))
    circles10000 = centers2D.map((center) => translate(center, circle({ radius: 100, segments: 1000 })))

    spheres600 = centers3D.map((center) => translate(center, sphere({ radius: 100, segments: 6 })))
    spheres1000 = centers3D.map((center) => translate(center, sphere({ radius: 100, segments: 8 })))
    spheres10000 = centers3D.map((center) => translate(center, sphere({ radius: 100, segments: 26 })))

    return {}
  }
}

export const unionCircle100 = {
  name: 'union(100)',
  api: 'union(circle)',
  div: '100',
  func: function runme () { return union(circles100) }
}

export const unionCircle500 = {
  name: 'union(500)',
  api: 'union(circle)',
  div: '500',
  func: function runme () { return union(circles500) }
}

export const unionCircle1000 = {
  name: 'union(1000)',
  api: 'union(circle)',
  div: '1000',
  func: function runme () { return union(circles1000) }
}

export const unionCircle5000 = {
  name: 'union(5000)',
  api: 'union(circle)',
  div: '5000',
  func: function runme () { return union(circles5000) }
}

export const unionCircle10000 = {
  name: 'union(10000)',
  api: 'union(circle)',
  div: '10000',
  func: function runme () { return union(circles10000) }
}

export const unionSphere600 = {
  name: 'union(600)',
  api: 'union(sphere)',
  div: '600',
  func: function runme () { return union(spheres600) }
}

export const unionSphere1000 = {
  name: 'union(1000)',
  api: 'union(sphere)',
  div: '1000',
  func: function runme () { return union(spheres1000) }
}

export const unionSphere10000 = {
  name: 'union(10000)',
  api: 'union(sphere)',
  div: '10000',
  func: function runme () { return union(spheres10000) }
}
