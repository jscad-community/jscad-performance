const {primitives} = require('@jscad/modeling')

const circle_12 = {
  name : 'circle(segments: 12)',
  api  : 'circle',
  div  : '12',
  func : function runme() { return primitives.circle({radius: 100, segments: 12}) }
}

const circle_36 = {
  name : 'circle(segments: 36)',
  api  : 'circle',
  div  : '36',
  func : function runme() { return primitives.circle({radius: 100, segments: 36}) }
}

const circle_72 = {
  name : 'circle(segments: 72)',
  api  : 'circle',
  div  : '72',
  func : function runme() { return primitives.circle({radius: 100, segments: 72}) }
}

const circle_144 = {
  name : 'circle(segments: 144)',
  api  : 'circle',
  div  : '144',
  func : function runme() { return primitives.circle({radius: 100, segments: 144}) }
}

const circle_360 = {
  name : 'circle(segments: 360)',
  api  : 'circle',
  div  : '360',
  func : function runme() { return primitives.circle({radius: 100, segments: 360}) }
}

module.exports = {
  circle_12,
  circle_36,
  circle_72,
  circle_144,
  circle_360
}
