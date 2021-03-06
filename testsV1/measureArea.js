const {CSG, CAG} = require('@jscad/csg');

var circle_10 = null // 10 points
var circle_100 = null // 100 points
var circle_1000 = null // 1000 points
var circle_10000 = null // 10000 points

var sphere_7 = null // 98 points
var sphere_22 = null // 1012 points
var sphere_70 = null // 9940 points
var sphere_158 = null // 50244 points
var sphere_224 = null // 99904 points

// number of points ['100', '1000', '10000', '100000', '200000', '400000']

const setupArea = {
  name : 'measurements setup',
  api  : 'setup',
  div  : '0',
  func : function runme() {
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

const measureArea_circle_10 = {
  name : 'measureArea(10)',
  api  : 'measureArea(circle)',
  div  : '10',
  func : function runme() { return circle_10.area() }
}

const measureArea_circle_100 = {
  name : 'measureArea(100)',
  api  : 'measureArea(circle)',
  div  : '100',
  func : function runme() { return circle_100.area() }
}

const measureArea_circle_1000 = {
  name : 'measureArea(1000)',
  api  : 'measureArea(circle)',
  div  : '1000',
  func : function runme() { return circle_1000.area() }
}

const measureArea_circle_10000 = {
  name : 'measureArea(10000)',
  api  : 'measureArea(circle)',
  div  : '10000',
  func : function runme() { return circle_10000.area() }
}

const measureArea_sphere_100 = {
  name : 'measureArea(100)',
  api  : 'measureArea(sphere)',
  div  : '100',
  func : function runme() { return sphere_7.getFeatures('area') }
}

const measureArea_sphere_1000 = {
  name : 'measureArea(1000)',
  api  : 'measureArea(sphere)',
  div  : '1000',
  func : function runme() { return sphere_22.getFeatures('area') }
}

const measureArea_sphere_10000 = {
  name : 'measureArea(10000)',
  api  : 'measureArea(sphere)',
  div  : '10000',
  func : function runme() { return sphere_70.getFeatures('area') }
}

const measureArea_sphere_50000 = {
  name : 'measureArea(50000)',
  api  : 'measureArea(sphere)',
  div  : '50000',
  func : function runme() { return sphere_158.getFeatures('area') }
}

const measureArea_sphere_100000 = {
  name : 'measureArea(100000)',
  api  : 'measureArea(sphere)',
  div  : '100000',
  func : function runme() { return sphere_224.getFeatures('area') }
}

module.exports = {
  setupArea,
  measureArea_circle_10,
  measureArea_circle_100,
  measureArea_circle_1000,
  measureArea_circle_10000,
  measureArea_sphere_100,
  measureArea_sphere_1000,
  measureArea_sphere_10000,
  measureArea_sphere_100000,
  //measureArea_sphere_50000
}
