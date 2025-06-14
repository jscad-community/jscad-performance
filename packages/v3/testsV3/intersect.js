import { circle, sphere, translate, intersect } from '@jscad/modeling'

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
  [1, 1, 1],
  [2, 2, 2],
  [3, 3, 3],
  [4, 4, 4],
  [5, 5, 5],
  [6, 6, 6],
]

let circles100 = null // 10 points X centers
let circles500 = null // 50 points X centers
let circles1000 = null // 100 points X centers
let circles5000 = null // 500 points X centers
let circles10000 = null // 1000 points X centers

let spheres600 = null // 72 points X centers
let spheres1000 = null // 96 points X centers
let spheres10000 = null // 1092 points X centers

export const _setupIntersect = {
  name: 'intersect setup',
  api: 'setup',
  div: '0',
  func: function runme () {
    circles100 = centers2D.map((center) => translate(center, circle({ radius: 100, segments: 10 })))
    circles500 = centers2D.map((center) => translate(center, circle({ radius: 100, segments: 50 })))
    circles1000 = centers2D.map((center) => translate(center, circle({ radius: 100, segments: 100 })))
    circles5000 = centers2D.map((center) => translate(center, circle({ radius: 100, segments: 500 })))
    circles10000 = centers2D.map((center) => translate(center, circle({ radius: 100, segments: 1000 })))

    spheres600 = centers3D.map((center) => translate(center, sphere({ radius: 10, segments: 8 })))
    spheres1000 = centers3D.map((center) => translate(center, sphere({ radius: 10, segments: 16 })))
    spheres10000 = centers3D.map((center) => translate(center, sphere({ radius: 10, segments: 32 })))

    return {}
  }
}

export const intersectCircle100 = {
  name: 'intersect(100)',
  api: 'intersect(circle)',
  div: '100',
  func: function runme () { return intersect(circles100) }
}

export const intersectCircle500 = {
  name: 'intersect(500)',
  api: 'intersect(circle)',
  div: '500',
  func: function runme () { return intersect(circles500) }
}

export const intersectCircle1000 = {
  name: 'intersect(1000)',
  api: 'intersect(circle)',
  div: '1000',
  func: function runme () { return intersect(circles1000) }
}

export const intersectCircle5000 = {
  name: 'intersect(5000)',
  api: 'intersect(circle)',
  div: '5000',
  func: function runme () { return intersect(circles5000) }
}

export const intersectCircle10000 = {
  name: 'intersect(10000)',
  api: 'intersect(circle)',
  div: '10000',
  func: function runme () { return intersect(circles10000) }
}

export const intersectSphere600 = {
  name: 'intersect(600)',
  api: 'intersect(sphere)',
  div: '600',
  func: function runme () { return intersect(spheres600) }
}

export const intersectSphere1000 = {
  name: 'intersect(1000)',
  api: 'intersect(sphere)',
  div: '1000',
  func: function runme () { return intersect(spheres1000) }
}

export const intersectSphere10000 = {
  name: 'intersect(10000)',
  api: 'intersect(sphere)',
  div: '10000',
  func: function runme () { return intersect(spheres10000) }
}
