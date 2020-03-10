const {primitives} = require('@jscad/modeling')

const cylinder_12 = {
  name : 'cylinder(segments: 12)',
  api  : 'cylinder',
  div  : '12',
  func : function runme() { return primitives.cylinder({startRadius: 100, endRadius: 100, segments: 12}) }
}

const cylinder_36 = {
  name : 'cylinder(segments: 36)',
  api  : 'cylinder',
  div  : '36',
  func : function runme() { return primitives.cylinder({startRadius: 100, endRadius: 100, segments: 36}) }
}

const cylinder_72 = {
  name : 'cylinder(segments: 72)',
  api  : 'cylinder',
  div  : '72',
  func : function runme() { return primitives.cylinder({startRadius: 100, endRadius: 100, segments: 72}) }
}

const cylinder_144 = {
  name : 'cylinder(segments: 144)',
  api  : 'cylinder',
  div  : '144',
  func : function runme() { return primitives.cylinder({startRadius: 100, endRadius: 100, segments: 144}) }
}

const cylinder_360 = {
  name : 'cylinder(segments: 360)',
  api  : 'cylinder',
  div  : '360',
  func : function runme() { return primitives.cylinder({startRadius: 100, endRadius: 100, segments: 360}) }
}

module.exports = {
  cylinder_12,
  cylinder_36,
  cylinder_72,
  cylinder_144,
  cylinder_360
}
