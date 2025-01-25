import { circle, sphere, translate, hull } from '@jscad/modeling'

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
let circles1000 = null // 100 points X centers
let circles10000 = null // 1000 points X centers

let spheres1000 = null // 96 points X centers
let spheres10000 = null // 1092 points X centers
let spheres100000 = null // 7776 points X centers

export const _setupHull = {
  name: 'hull setup',
  api: 'setup',
  div: '0',
  func: function runme () {
    circles100 = centers2D.map((center) => translate(center, circle({ radius: 100, segments: 10 })))
    circles1000 = centers2D.map((center) => translate(center, circle({ radius: 100, segments: 100 })))
    circles10000 = centers2D.map((center) => translate(center, circle({ radius: 100, segments: 1000 })))

    spheres1000 = centers3D.map((center) => translate(center, sphere({ radius: 100, segments: 8 })))
    spheres10000 = centers3D.map((center) => translate(center, sphere({ radius: 100, segments: 26 })))
    spheres100000 = centers3D.map((center) => translate(center, sphere({ radius: 100, segments: 72 })))

    return {}
  }
}

export const hullCircle100 = {
  name: 'hull(100)',
  api: 'hull(circle)',
  div: '100',
  func: function runme () { return hull(circles100) }
}

export const hullCircle1000 = {
  name: 'hull(1000)',
  api: 'hull(circle)',
  div: '1000',
  func: function runme () { return hull(circles1000) }
}

export const hullCircle10000 = {
  name: 'hull(10000)',
  api: 'hull(circle)',
  div: '10000',
  func: function runme () { return hull(circles10000) }
}

export const hullSphere1000 = {
  name: 'hull(1000)',
  api: 'hull(sphere)',
  div: '1000',
  func: function runme () { return hull(spheres1000) }
}

export const hullSphere10000 = {
  name: 'hull(10000)',
  api: 'hull(sphere)',
  div: '10000',
  func: function runme () { return hull(spheres10000) }
}

export const hullSphere100000 = {
  name: 'hull(100000)',
  api: 'hull(sphere)',
  div: '100000',
  func: function runme () { return hull(spheres100000) }
}
