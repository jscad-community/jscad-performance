const { CSG } = require('@jscad/csg')

const sphere_12 = {
  name: 'CSG.sphere(resolution: 12)',
  api: 'sphere',
  div: '12',
  func: function runme () { return CSG.sphere({ radius: 100, resolution: 12 }) }
}

const sphere_36 = {
  name: 'CSG.sphere(resolution: 36)',
  api: 'sphere',
  div: '36',
  func: function runme () { return CSG.sphere({ radius: 100, resolution: 36 }) }
}

const sphere_72 = {
  name: 'CSG.sphere(resolution: 72)',
  api: 'sphere',
  div: '72',
  func: function runme () { return CSG.sphere({ radius: 100, resolution: 72 }) }
}

const sphere_144 = {
  name: 'CSG.sphere(resolution: 144)',
  api: 'sphere',
  div: '144',
  func: function runme () { return CSG.sphere({ radius: 100, resolution: 144 }) }
}

const sphere_360 = {
  name: 'CSG.sphere(resolution: 360)',
  api: 'sphere',
  div: '360',
  func: function runme () { return CSG.sphere({ radius: 100, resolution: 360 }) }
}

const sphere_720 = {
  name: 'CSG.sphere(resolution: 720)',
  api: 'sphere',
  div: '720',
  func: function runme () { return CSG.sphere({ radius: 100, resolution: 720 }) }
}

module.exports = {
  sphere_12,
  sphere_36,
  sphere_72,
  sphere_144,
  sphere_360
//  sphere_720
}
