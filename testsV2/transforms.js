const {geometries, primitives, transforms} = require('@jscad/modeling')

const {rotate, scale, translate} = transforms

var arc_16 = null // 10 points
var arc_196 = null // 100 points
var arc_396 = null // 200 points
var arc_796 = null // 400 points

var circle_10 = null // 10 points
var circle_100 = null // 100 points
var circle_1000 = null // 1000 points

var sphere_7 = null // 98 points
var sphere_22 = null // 1012 points
var sphere_70 = null // 9940 points
var sphere_158 = null // 50244 points
var sphere_224 = null // 99904 points

const setupTransforms = {
  name : 'measurements setup',
  api  : 'setup',
  div  : '0',
  func : function runme() {
    arc_16 = primitives.arc({radius: 100, startAngle: 0, endAngle: 180, segments: 16})
    arc_196 = primitives.arc({radius: 100, startAngle: 0, endAngle: 180, segments: 196})
    arc_396 = primitives.arc({radius: 100, startAngle: 0, endAngle: 180, segments: 396})
    arc_796 = primitives.arc({radius: 100, startAngle: 0, endAngle: 180, segments: 796})

    circle_10 = primitives.circle({radius: 100, segments: 10})
    circle_100 = primitives.circle({radius: 100, segments: 100})
    circle_1000 = primitives.circle({radius: 100, segments: 1000})

    sphere_7 = primitives.sphere({radius: 100, segments: 7})
    sphere_22 = primitives.sphere({radius: 100, segments: 22})
    sphere_70 = primitives.sphere({radius: 100, segments: 70})
    sphere_158 = primitives.sphere({radius: 100, segments: 158})
    sphere_224 = primitives.sphere({radius: 100, segments: 224})
    return {}
  }
}

// TRANSFORMS... typical combinations are scale, rotate, translate
// NOTE: toPoints etc. are called to apply the transforms to the set of points inside the geometry

const newfactors = [5, 5, 5]

const newangles = [Math.PI / 2, Math.PI / 2, Math.PI / 2]

const newoffsets = [-10, -10, -10]


const transform_arc_10 = {
  name : 'transform(10)',
  api  : 'transform(arc)',
  div  : '10',
  func : function run() { return geometries.path2.toPoints(translate(newoffsets, rotate(newangles, scale(newfactors, arc_16)))) }
}

const transform_arc_100 = {
  name : 'transform(100)',
  api  : 'transform(arc)',
  div  : '100',
  func : function run() { return geometries.path2.toPoints(translate(newoffsets, rotate(newangles, scale(newfactors, arc_196)))) }
}

const transform_arc_200 = {
  name : 'transform(200)',
  api  : 'transform(arc)',
  div  : '200',
  func : function run() { return geometries.path2.toPoints(translate(newoffsets, rotate(newangles, scale(newfactors, arc_396)))) }
}

const transform_arc_400 = {
  name : 'transform(400)',
  api  : 'transform(arc)',
  div  : '400',
  func : function run() { return geometries.path2.toPoints(translate(newoffsets, rotate(newangles, scale(newfactors, arc_796)))) }
}

const transform_circle_10 = {
  name : 'transform(10)',
  api  : 'transform(circle)',
  div  : '10',
  func : function run() { return geometries.geom2.toSides(translate(newoffsets, rotate(newangles, scale(newfactors, circle_10)))) }
}

const transform_circle_100 = {
  name : 'transform(100)',
  api  : 'transform(circle)',
  div  : '100',
  func : function run() { return geometries.geom2.toSides(translate(newoffsets, rotate(newangles, scale(newfactors, circle_100)))) }
}

const transform_circle_1000 = {
  name : 'transform(1000)',
  api  : 'transform(circle)',
  div  : '1000',
  func : function run() { return geometries.geom2.toSides(translate(newoffsets, rotate(newangles, scale(newfactors, circle_1000)))) }
}

const transform_sphere_100 = {
  name : 'transform(100)',
  api  : 'transform(sphere)',
  div  : '100',
  func : function run() { return geometries.geom3.toPolygons(translate(newoffsets, rotate(newangles, scale(newfactors, sphere_7)))) }
}

const transform_sphere_1000 = {
  name : 'transform(1000)',
  api  : 'transform(sphere)',
  div  : '1000',
  func : function run() { return geometries.geom3.toPolygons(translate(newoffsets, rotate(newangles, scale(newfactors, sphere_22)))) }
}

const transform_sphere_10000 = {
  name : 'transform(10000)',
  api  : 'transform(sphere)',
  div  : '10000',
  func : function run() { return geometries.geom3.toPolygons(translate(newoffsets, rotate(newangles, scale(newfactors, sphere_70)))) }
}

module.exports = {
  setupTransforms,

  transform_arc_10,
  transform_arc_100,
  transform_arc_200,
  transform_arc_400,

  transform_circle_10,
  transform_circle_100,
  transform_circle_1000,

  transform_sphere_100,
  transform_sphere_1000,
  transform_sphere_10000
}
