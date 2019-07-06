const {CSG, CAG} = require('@jscad/csg');

var centers = [
  [0, 0, 0],
  [10, 10, 10],
  [20, 20, 20],
  [30, 30, 30],
  [40, 40, 40],
  [50, 50, 50],
  [60, 60, 60],
  [70, 70, 70],
  [80, 80, 80],
  [90, 90, 90],
]

var circle_100 = null // 10 points X centers
var circle_1000 = null // 100 points X centers
var circle_10000 = null // 1000 points X centers

var sphere_1000 = null // 98 points X centers
var sphere_10000 = null // 1012 points X centers
var sphere_100000 = null // 9940 points X centers

var sphere_7 = null // 98 points X centers
var sphere_22 = null // 1012 points X centers
var sphere_70 = null // 9940 points X centers
var sphere_158 = null // 50244 points X centers
var sphere_224 = null // 99904 points X centers

// number of points ['100', '1000', '10000', '100000', '200000', '400000']

const setupUnion = {
  name : 'union setup',
  api  : 'setup',
  div  : '0',
  func : function runme() {
    circle_100 = centers.map((center) => CAG.circle({radius: 100, resolution: 10, center: center}))
    circle_1000 = centers.map((center) => CAG.circle({radius: 100, resolution: 100, center: center}))
    circle_10000 = centers.map((center) => CAG.circle({radius: 100, resolution: 1000, center: center}))

    sphere_1000 = centers.map((center) => CSG.sphere({radius: 100, resolution: 7, center: center}))
    sphere_10000 = centers.map((center) => CSG.sphere({radius: 100, resolution: 22, center: center}))
    sphere_100000 = centers.map((center) => CSG.sphere({radius: 100, resolution: 70, center: center}))

//    sphere_7 = CSG.sphere({radius: 100, resolution: 7})
//    sphere_22 = CSG.sphere({radius: 100, resolution: 22})
//    sphere_70 = CSG.sphere({radius: 100, resolution: 70})
//    sphere_158 = CSG.sphere({radius: 100, resolution: 158})
//    sphere_224 = CSG.sphere({radius: 100, resolution: 224})
    return {}
  }
}

const union_circle_100 = {
  name : 'union(100)',
  api  : 'union(circle)',
  div  : '100',
  func : function runme() { return circle_100[0].union(circle_100.slice(1)) }
}

const union_circle_1000 = {
  name : 'union(1000)',
  api  : 'union(circle)',
  div  : '1000',
  func : function runme() { return circle_1000[0].union(circle_1000.slice(1)) }
}

const union_circle_10000 = {
  name : 'union(10000)',
  api  : 'union(circle)',
  div  : '10000',
  func : function runme() { return circle_10000[0].union(circle_10000.slice(1)) }
}

const union_sphere_1000 = {
  name : 'union(1000)',
  api  : 'union(sphere)',
  div  : '1000',
  func : function runme() { return sphere_1000[0].union(sphere_1000.slice(1)) }
}

const union_sphere_10000 = {
  name : 'union(10000)',
  api  : 'union(sphere)',
  div  : '10000',
  func : function runme() { return sphere_10000[0].union(sphere_10000.slice(1)) }
}

const union_sphere_100000 = {
  name : 'union(100000)',
  api  : 'union(sphere)',
  div  : '100000',
  func : function runme() { return sphere_100000[0].union(sphere_100000.slice(1)) }
}

const union_sphere_500000 = {
  name : 'union(50000)',
  api  : 'union(sphere)',
  div  : '50000',
  func : function runme() { return sphere_158.getFeatures('area') }
}

const union_sphere_1000000 = {
  name : 'union(100000)',
  api  : 'union(sphere)',
  div  : '100000',
  func : function runme() { return sphere_224.getFeatures('area') }
}

module.exports = {
  setupUnion,
//  union_circle_100,
  union_circle_1000,
//  union_circle_10000,

  union_sphere_1000,
//  union_sphere_10000,
//  union_sphere_100000,
//  union_sphere_500000
//  union_sphere_1000000
}
