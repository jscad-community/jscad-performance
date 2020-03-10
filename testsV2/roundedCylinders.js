const {primitives} = require('@jscad/modeling');

const roundedCylinder_12 = {
  name : 'roundedCylinder(segments: 12)',
  api  : 'roundedCylinder',
  div  : '12',
  func : function runme() { return primitives.roundedCylinder({radius: 100, roundradius: 10, segments: 12}) }
}

const roundedCylinder_36 = {
  name : 'roundedCylinder(segments: 36)',
  api  : 'roundedCylinder',
  div  : '36',
  func : function runme() { return primitives.roundedCylinder({radius: 100, roundradius: 10, segments: 36}) }
}

const roundedCylinder_72 = {
  name : 'roundedCylinder(segments: 72)',
  api  : 'roundedCylinder',
  div  : '72',
  func : function runme() { return primitives.roundedCylinder({radius: 100, roundradius: 10, segments: 72}) }
}

const roundedCylinder_144 = {
  name : 'roundedCylinder(segments: 144)',
  api  : 'roundedCylinder',
  div  : '144',
  func : function runme() { return primitives.roundedCylinder({radius: 100, roundradius: 10, segments: 144}) }
}

const roundedCylinder_360 = {
  name : 'roundedCylinder(segments: 360)',
  api  : 'roundedCylinder',
  div  : '360',
  func : function runme() { return primitives.roundedCylinder({radius: 100, roundradius: 10, segments: 360}) }
}

module.exports = {
  roundedCylinder_12,
  roundedCylinder_36,
  roundedCylinder_72,
  roundedCylinder_144,
  roundedCylinder_360
}
