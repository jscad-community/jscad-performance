import { circle, sphere, translate, union, scission } from '@jscad/modeling'

// no overlapping shapes
const centers2D = [
  [0, 0, 0],
  [1000, 1000, 0],
  [2000, 2000, 0],
  [3000, 3000, 0],
  [4000, 4000, 0],
  [5000, 5000, 0],
  [6000, 6000, 0],
  [7000, 7000, 0],
  [8000, 8000, 0],
  [9000, 9000, 0]
]

const centers3D = [
  [0, 0, 0],
  [1000, 1000, 1000],
  [2000, 2000, 2000],
  [3000, 3000, 3000],
  [4000, 4000, 4000],
  [5000, 5000, 5000],
  [6000, 6000, 6000],
  [7000, 7000, 7000],
  [8000, 8000, 8000],
  [9000, 9000, 9000]
]

let circles100 = null // 10 points X centers
let circles500 = null // 50 points X centers
let circles1000 = null // 100 points X centers
let circles5000 = null // 500 points X centers
let circles10000 = null // 1000 points X centers

let spheres600 = null // 72 points X centers
let spheres1000 = null // 96 points X centers
let spheres10000 = null // 1092 points X centers

export const _setupScission = {
  name: 'scission setup',
  api: 'setup',
  div: '0',
  func: function runme () {
    circles100 = union(centers2D.map((center) => translate(center, circle({ radius: 50, segments: 10 }))))
    circles500 = union(centers2D.map((center) => translate(center, circle({ radius: 50, segments: 50 }))))
    circles1000 = union(centers2D.map((center) => translate(center, circle({ radius: 50, segments: 100 }))))
    circles5000 = union(centers2D.map((center) => translate(center, circle({ radius: 50, segments: 500 }))))
    circles10000 = union(centers2D.map((center) => translate(center, circle({ radius: 50, segments: 1000 }))))

    spheres600 = union(centers3D.map((center) => translate(center, sphere({ radius: 50, segments: 6 }))))
    spheres1000 = union(centers3D.map((center) => translate(center, sphere({ radius: 50, segments: 8 }))))
    spheres10000 = union(centers3D.map((center) => translate(center, sphere({ radius: 50, segments: 26 }))))

    return {}
  }
}

export const scissionCircle100 = {
  name: 'scission(100)',
  api: 'scission(circle)',
  div: '100',
  func: function runme () { return scission(circles100) }
}

export const scissionCircle500 = {
  name: 'scission(500)',
  api: 'scission(circle)',
  div: '500',
  func: function runme () { return scission(circles500) }
}

export const scissionCircle1000 = {
  name: 'scission(1000)',
  api: 'scission(circle)',
  div: '1000',
  func: function runme () { return scission(circles1000) }
}

export const scissionCircle5000 = {
  name: 'scission(5000)',
  api: 'scission(circle)',
  div: '5000',
  func: function runme () { return scission(circles5000) }
}

export const scissionCircle10000 = {
  name: 'scission(10000)',
  api: 'scission(circle)',
  div: '10000',
  func: function runme () { return scission(circles10000) }
}

export const scissionSphere600 = {
  name: 'scission(600)',
  api: 'scission(sphere)',
  div: '600',
  func: function runme () { return scission(spheres600) }
}

export const scissionSphere1000 = {
  name: 'scission(1000)',
  api: 'scission(sphere)',
  div: '1000',
  func: function runme () { return scission(spheres1000) }
}

export const scissionSphere10000 = {
  name: 'scission(10000)',
  api: 'scission(sphere)',
  div: '10000',
  func: function runme () { return scission(spheres10000) }
}
