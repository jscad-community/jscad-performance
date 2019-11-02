const {CSG, CAG} = require('@jscad/csg');

var arc_16 = null // 10 points
var arc_196 = null // 100 points
var arc_396 = null // 200 points
var arc_796 = null // 400 points

var circle_10 = null // 10 points
var circle_100 = null // 100 points
var circle_1000 = null // 1000 points
var circle_10000 = null // 10000 points

var sphere_7 = null // 98 points
var sphere_22 = null // 1012 points
var sphere_70 = null // 9940 points
var sphere_158 = null // 50244 points
var sphere_224 = null // 99904 points

const setupBounds = {
  name : 'measurements setup',
  api  : 'setup',
  div  : '0',
  func : function runme() {
    //arc_16 = CSG.Path2D.arc({radius: 100, startangle: 0, endangle: 180, resolution: 16})
    //arc_196 = CSG.Path2D.arc({radius: 100, startangle: 0, endangle: 180, resolution: 196})
    //arc_396 = CSG.Path2D.arc({radius: 100, startangle: 0, endangle: 180, resolution: 396})
    //arc_796 = CSG.Path2D.arc({radius: 100, startangle: 0, endangle: 180, resolution: 796})

    circle_10 = CAG.circle({radius: 100, resolution: 10})
    circle_100 = CAG.circle({radius: 100, resolution: 100})
    circle_1000 = CAG.circle({radius: 100, resolution: 1000})
    circle_10000 = CAG.circle({radius: 100, resolution: 10000})

    sphere_7 = CSG.sphere({radius: 100, resolution: 7})
    sphere_22 = CSG.sphere({radius: 100, resolution: 22})
    sphere_70 = CSG.sphere({radius: 100, resolution: 70})
    sphere_158 = CSG.sphere({radius: 100, resolution: 158})
    sphere_224 = CSG.sphere({radius: 100, resolution: 224})
    return {}
  }
}

const measureBounds_circle_10 = {
  name : 'measureBounds(10)',
  api  : 'measureBounds(circle)',
  div  : '10',
  func : function runme() { return circle_10.getBounds() }
}

const measureBounds_circle_100 = {
  name : 'measureBounds(100)',
  api  : 'measureBounds(circle)',
  div  : '100',
  func : function runme() { return circle_100.getBounds() }
}

const measureBounds_circle_1000 = {
  name : 'measureBounds(1000)',
  api  : 'measureBounds(circle)',
  div  : '1000',
  func : function runme() { return circle_1000.getBounds() }
}

const measureBounds_circle_10000 = {
  name : 'measureBounds(10000)',
  api  : 'measureBounds(circle)',
  div  : '10000',
  func : function runme() { return circle_10000.getBounds() }
}

const measureBounds_sphere_100 = {
  name : 'measureBounds(100)',
  api  : 'measureBounds(sphere)',
  div  : '100',
  func : function runme() { return sphere_7.getBounds() }
}

const measureBounds_sphere_1000 = {
  name : 'measureBounds(1000)',
  api  : 'measureBounds(sphere)',
  div  : '1000',
  func : function runme() { return sphere_22.getBounds() }
}

const measureBounds_sphere_10000 = {
  name : 'measureBounds(10000)',
  api  : 'measureBounds(sphere)',
  div  : '10000',
  func : function runme() { return sphere_70.getBounds() }
}

const measureBounds_sphere_50000 = {
  name : 'measureBounds(50000)',
  api  : 'measureBounds(sphere)',
  div  : '50000',
  func : function runme() { return sphere_158.getBounds() }
}

const measureBounds_sphere_100000 = {
  name : 'measureBounds(100000)',
  api  : 'measureBounds(sphere)',
  div  : '100000',
  func : function runme() { return sphere_224.getBounds() }
}

module.exports = {
  setupBounds,
  measureBounds_circle_10,
  measureBounds_circle_100,
  measureBounds_circle_1000,
  measureBounds_circle_10000,
  measureBounds_sphere_100,
  measureBounds_sphere_1000,
  measureBounds_sphere_10000,
  measureBounds_sphere_100000,
  //measureBounds_sphere_50000
}
