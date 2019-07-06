const {roundedCuboid} = require('./csg.js/src/primitives');

const roundedCuboid_12 = {
  name : 'roundedCuboid(segments: 12)',
  api  : 'roundedCube',
  div  : '12',
  func : function runme() { return roundedCuboid({size: [100,100,100], roundRadius: 10, segments: 12}) }
}

const roundedCuboid_36 = {
  name : 'roundedCuboid(segments: 36)',
  api  : 'roundedCube',
  div  : '36',
  func : function runme() { return roundedCuboid({size: [100,100,100], roundRadius: 10, segments: 36}) }
}

const roundedCuboid_72 = {
  name : 'roundedCuboid(segments: 72)',
  api  : 'roundedCube',
  div  : '72',
  func : function runme() { return roundedCuboid({size: [100,100,100], roundRadius: 10, segments: 72}) }
}

const roundedCuboid_144 = {
  name : 'roundedCuboid(segments: 144)',
  api  : 'roundedCube',
  div  : '144',
  func : function runme() { return roundedCuboid({size: [100,100,100], roundRadius: 10, segments: 144}) }
}

const roundedCuboid_360 = {
  name : 'roundedCuboid(segments: 360)',
  api  : 'roundedCube',
  div  : '360',
  func : function runme() { return roundedCuboid({size: [100,100,100], roundRadius: 10, segments: 360}) }
}

const roundedCuboid_720 = {
  name : 'roundedCuboid(segments: 720)',
  api  : 'roundedCube',
  div  : '720',
  func : function runme() { return roundedCuboid({size: [100,100,100], roundRadius: 10, segments: 720}) }
}

module.exports = {
  roundedCuboid_12,
  roundedCuboid_36,
  roundedCuboid_72,
  roundedCuboid_144
//  roundedCuboid_360
//  roundedCuboid_720
}
