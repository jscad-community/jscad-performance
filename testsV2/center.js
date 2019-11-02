const {arc, circle, sphere} = require('./csg.js/src/primitives');

const {center} = require('./csg.js/src/operations/transforms')

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

const setupCenter = {
  name : 'measurements setup',
  api  : 'setup',
  div  : '0',
  func : function runme() {
    arc_16 = arc({radius: 100, startAngle: 0, endAngle: 180, segments: 16})
    arc_196 = arc({radius: 100, startAngle: 0, endAngle: 180, segments: 196})
    arc_396 = arc({radius: 100, startAngle: 0, endAngle: 180, segments: 396})
    arc_796 = arc({radius: 100, startAngle: 0, endAngle: 180, segments: 796})

    circle_10 = circle({radius: 100, segments: 10})
    circle_100 = circle({radius: 100, segments: 100})
    circle_1000 = circle({radius: 100, segments: 1000})

    sphere_7 = sphere({radius: 100, segments: 7})
    sphere_22 = sphere({radius: 100, segments: 22})
    sphere_70 = sphere({radius: 100, segments: 70})
    sphere_158 = sphere({radius: 100, segments: 158})
    sphere_224 = sphere({radius: 100, segments: 224})
    return {}
  }
}

const center_arc_10 = {
  name : 'center(10)',
  api  : 'center(arc)',
  div  : '10',
  func : function runme() { return center({axes: [true, true, true]}, arc_16) }
}

const center_arc_100 = {
  name : 'center(100)',
  api  : 'center(arc)',
  div  : '100',
  func : function runme() { return center({axes: [true, true, true]}, arc_196) }
}

const center_arc_200 = {
  name : 'center(200)',
  api  : 'center(arc)',
  div  : '200',
  func : function runme() { return center({axes: [true, true, true]}, arc_396) }
}

const center_arc_400 = {
  name : 'center(400)',
  api  : 'center(arc)',
  div  : '400',
  func : function runme() { return center({axes: [true, true, true]}, arc_796) }
}

const center_circle_10 = {
  name : 'center(10)',
  api  : 'center(circle)',
  div  : '10',
  func : function runme() { return center({axes: [true, true, true]}, circle_10) }
}

const center_circle_100 = {
  name : 'center(100)',
  api  : 'center(circle)',
  div  : '100',
  func : function runme() { return center({axes: [true, true, true]}, circle_100) }
}

const center_circle_1000 = {
  name : 'center(1000)',
  api  : 'center(circle)',
  div  : '1000',
  func : function runme() { return center({axes: [true, true, true]}, circle_1000) }
}

const center_sphere_100 = {
  name : 'center(100)',
  api  : 'center(sphere)',
  div  : '100',
  func : function runme() { return center({axes: [true, true, true]}, sphere_7) }
}

const center_sphere_1000 = {
  name : 'center(1000)',
  api  : 'center(sphere)',
  div  : '1000',
  func : function runme() { return center({axes: [true, true, true]}, sphere_22) }
}

const center_sphere_10000 = {
  name : 'center(10000)',
  api  : 'center(sphere)',
  div  : '10000',
  func : function runme() { return center({axes: [true, true, true]}, sphere_70) }
}

const center_sphere_50000 = {
  name : 'center(50000)',
  api  : 'center(sphere)',
  div  : '50000',
  func : function runme() { return center({axes: [true, true, true]}, sphere_158) }
}

const center_sphere_100000 = {
  name : 'center(100000)',
  api  : 'center(sphere)',
  div  : '100000',
  func : function runme() { return center({axes: [true, true, true]}, sphere_224) }
}

module.exports = {
  setupCenter,

  //center_arc_10,
  //center_arc_100,
  //center_arc_200,
  //center_arc_400,

  center_circle_10,
  center_circle_100,
  center_circle_1000,

  center_sphere_100,
  center_sphere_1000,
  center_sphere_10000,
//  center_sphere_100000,
//  center_sphere_50000
}
