const {CSG} = require('@jscad/csg');

const roundedCylinder_12 = {
  name : 'CSG.roundedCylinder(resolution: 12)',
  api  : 'roundedCylinder',
  div  : '12',
  func : function runme() { return CSG.roundedCylinder({radius: 100, roundradius: 10, resolution: 12}) }
}

const roundedCylinder_36 = {
  name : 'CSG.roundedCylinder(resolution: 36)',
  api  : 'roundedCylinder',
  div  : '36',
  func : function runme() { return CSG.roundedCylinder({radius: 100, roundradius: 10, resolution: 36}) }
}

const roundedCylinder_72 = {
  name : 'CSG.roundedCylinder(resolution: 72)',
  api  : 'roundedCylinder',
  div  : '72',
  func : function runme() { return CSG.roundedCylinder({radius: 100, roundradius: 10, resolution: 72}) }
}

const roundedCylinder_144 = {
  name : 'CSG.roundedCylinder(resolution: 144)',
  api  : 'roundedCylinder',
  div  : '144',
  func : function runme() { return CSG.roundedCylinder({radius: 100, roundradius: 10, resolution: 144}) }
}

const roundedCylinder_360 = {
  name : 'CSG.roundedCylinder(resolution: 360)',
  api  : 'roundedCylinder',
  div  : '360',
  func : function runme() { return CSG.roundedCylinder({radius: 100, roundradius: 10, resolution: 360}) }
}

const roundedCylinder_720 = {
  name : 'CSG.roundedCylinder(resolution: 720)',
  api  : 'roundedCylinder',
  div  : '720',
  func : function runme() { return CSG.roundedCylinder({radius: 100, roundradius: 10, resolution: 720}) }
}

module.exports = {
  roundedCylinder_12,
  roundedCylinder_36,
  roundedCylinder_72,
  roundedCylinder_144,
  roundedCylinder_360,
//  roundedCylinder_720
}
