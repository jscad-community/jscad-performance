import { arc, circle, sphere, path2, geom2, geom3, translate, rotate, scale } from '@jscad/modeling'

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

export const _setupTransforms = {
  name: 'transforms setup',
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

// TRANSFORMS... typical combinations are scale, rotate, translate
// NOTE: toPoints etc. are called to apply the transforms to the set of points inside the geometry

const newfactors = [5, 5, 5]

const newangles = [Math.PI / 2, Math.PI / 2, Math.PI / 2]

const newoffsets = [-10, -10, -10]

export const transformArc10 = {
  name: 'transform(10)',
  api: 'transform(arc)',
  div: '10',
  func: function run () { return path2.toPoints(translate(newoffsets, rotate(newangles, scale(newfactors, arc16)))) }
}

export const transformArc100 = {
  name: 'transform(100)',
  api: 'transform(arc)',
  div: '100',
  func: function run () { return path2.toPoints(translate(newoffsets, rotate(newangles, scale(newfactors, arc196)))) }
}

export const transformArc200 = {
  name: 'transform(200)',
  api: 'transform(arc)',
  div: '200',
  func: function run () { return path2.toPoints(translate(newoffsets, rotate(newangles, scale(newfactors, arc396)))) }
}

export const transformArc400 = {
  name: 'transform(400)',
  api: 'transform(arc)',
  div: '400',
  func: function run () { return path2.toPoints(translate(newoffsets, rotate(newangles, scale(newfactors, arc796)))) }
}

export const transformCircle10 = {
  name: 'transform(10)',
  api: 'transform(circle)',
  div: '10',
  func: function run () { return geom2.toSides(translate(newoffsets, rotate(newangles, scale(newfactors, circle10)))) }
}

export const transformCircle100 = {
  name: 'transform(100)',
  api: 'transform(circle)',
  div: '100',
  func: function run () { return geom2.toSides(translate(newoffsets, rotate(newangles, scale(newfactors, circle100)))) }
}

export const transformCircle1000 = {
  name: 'transform(1000)',
  api: 'transform(circle)',
  div: '1000',
  func: function run () { return geom2.toSides(translate(newoffsets, rotate(newangles, scale(newfactors, circle1000)))) }
}

export const transformSphere100 = {
  name: 'transform(100)',
  api: 'transform(sphere)',
  div: '100',
  func: function run () { return geom3.toPolygons(translate(newoffsets, rotate(newangles, scale(newfactors, sphere7)))) }
}

export const transformSphere1000 = {
  name: 'transform(1000)',
  api: 'transform(sphere)',
  div: '1000',
  func: function run () { return geom3.toPolygons(translate(newoffsets, rotate(newangles, scale(newfactors, sphere22)))) }
}

export const transformSphere10000 = {
  name: 'transform(10000)',
  api: 'transform(sphere)',
  div: '10000',
  func: function run () { return geom3.toPolygons(translate(newoffsets, rotate(newangles, scale(newfactors, sphere70)))) }
}
