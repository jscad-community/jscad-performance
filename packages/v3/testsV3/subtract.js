import { circle, sphere, translate, subtract } from '@jscad/modeling'

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
  [0, 0, 15],
  [0, 15, 0],
  [15, 0, 0],
  [0, 0, -15],
  [0, -15, 0],
  [-15, 0, 0],
]

let circles100 = null // 10 points X centers
let circles500 = null // 50 points X centers
let circles1000 = null // 100 points X centers
let circles5000 = null // 500 points X centers
let circles10000 = null // 1000 points X centers

let spheres600 = null // 72 points X centers
let spheres1000 = null // 96 points X centers
let spheres10000 = null // 1092 points X centers

export const _setupSubtract = {
  name: 'subtract setup',
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

export const subtractCircle100 = {
  name: 'subtract(100)',
  api: 'subtract(circle)',
  div: '100',
  func: function runme () { return subtract(circles100) }
}

export const subtractCircle500 = {
  name: 'subtract(500)',
  api: 'subtract(circle)',
  div: '500',
  func: function runme () { return subtract(circles500) }
}

export const subtractCircle1000 = {
  name: 'subtract(1000)',
  api: 'subtract(circle)',
  div: '1000',
  func: function runme () { return subtract(circles1000) }
}

export const subtractCircle5000 = {
  name: 'subtract(5000)',
  api: 'subtract(circle)',
  div: '5000',
  func: function runme () { return subtract(circles5000) }
}

export const subtractCircle10000 = {
  name: 'subtract(10000)',
  api: 'subtract(circle)',
  div: '10000',
  func: function runme () { return subtract(circles10000) }
}

export const subtractSphere600 = {
  name: 'subtract(600)',
  api: 'subtract(sphere)',
  div: '600',
  func: function runme () { return subtract(spheres600) }
}

export const subtractSphere1000 = {
  name: 'subtract(1000)',
  api: 'subtract(sphere)',
  div: '1000',
  func: function runme () { return subtract(spheres1000) }
}

export const subtractSphere10000 = {
  name: 'subtract(10000)',
  api: 'subtract(sphere)',
  div: '10000',
  func: function runme () { return subtract(spheres10000) }
}
