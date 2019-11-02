const {arc} = require('./csg.js/src/primitives');

const arc_12 = {
  name : 'arc(segments: 12)',
  api  : 'arc',
  div  : '12',
  func : function runme() { return arc({radius: 100, startangle: 0, endangle: 180, segments: 12}) }
}

const arc_36 = {
  name : 'arc(segments: 36)',
  api  : 'arc',
  div  : '36',
  func : function runme() { return arc({radius: 100, startangle: 0, endangle: 180, segments: 36}) }
}

const arc_72 = {
  name : 'arc(segments: 72)',
  api  : 'arc',
  div  : '72',
  func : function runme() { return arc({radius: 100, startangle: 0, endangle: 180, segments: 72}) }
}

const arc_144 = {
  name : 'arc(segments: 144)',
  api  : 'arc',
  div  : '144',
  func : function runme() { return arc({radius: 100, startangle: 0, endangle: 180, segments: 144}) }
}

const arc_360 = {
  name : 'arc(segments: 360)',
  api  : 'arc',
  div  : '360',
  func : function runme() { return arc({radius: 100, startangle: 0, endangle: 180, segments: 360}) }
}

const arc_720 = {
  name : 'arc(segments: 720)',
  api  : 'arc',
  div  : '720',
  func : function runme() { return arc({radius: 100, startangle: 0, endangle: 180, segments: 720}) }
}

module.exports = {
  arc_12,
  arc_36,
  arc_72,
  arc_144,
  arc_360,
  //arc_720
}
