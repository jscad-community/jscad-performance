const {sphere} = require('./csg.js/src/primitives');

const measureVolume = require('./csg.js/src/operations/measurements/measureVolume')

var sphere_7 = null // 98 points
var sphere_22 = null // 1012 points
var sphere_70 = null // 9940 points
var sphere_158 = null // 50244 points
var sphere_224 = null // 99904 points

const setupVolume = {
  name : 'measurements setup',
  api  : 'setup',
  div  : '0',
  func : function runme() {
    sphere_7 = sphere({radius: 100, segments: 7})
    sphere_22 = sphere({radius: 100, segments: 22})
    sphere_70 = sphere({radius: 100, segments: 70})
    sphere_158 = sphere({radius: 100, segments: 158})
    sphere_224 = sphere({radius: 100, segments: 224})
    return {}
  }
}

const measureVolume_sphere_100 = {
  name : 'measureVolume(100)',
  api  : 'measureVolume(sphere)',
  div  : '100',
  func : function runme() { return measureVolume(sphere_7) }
}

const measureVolume_sphere_1000 = {
  name : 'measureVolume(1000)',
  api  : 'measureVolume(sphere)',
  div  : '1000',
  func : function runme() { return measureVolume(sphere_22) }
}

const measureVolume_sphere_10000 = {
  name : 'measureVolume(10000)',
  api  : 'measureVolume(sphere)',
  div  : '10000',
  func : function runme() { return measureVolume(sphere_70) }
}

const measureVolume_sphere_50000 = {
  name : 'measureVolume(50000)',
  api  : 'measureVolume(sphere)',
  div  : '50000',
  func : function runme() { return measureVolume(sphere_158) }
}

const measureVolume_sphere_100000 = {
  name : 'measureVolume(100000)',
  api  : 'measureVolume(sphere)',
  div  : '100000',
  func : function runme() { return measureVolume(sphere_224) }
}

module.exports = {
  setupVolume,
  measureVolume_sphere_100,
  measureVolume_sphere_1000,
  measureVolume_sphere_10000,
  measureVolume_sphere_100000,
  measureVolume_sphere_50000
}
