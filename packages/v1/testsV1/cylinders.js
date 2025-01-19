const { CSG } = require('@jscad/csg')

const cylinder_12 = {
  name: 'CSG.cylinder(resolution: 12)',
  api: 'cylinder',
  div: '12',
  func: function runme () { return CSG.cylinder({ radius: 100, resolution: 12 }) }
}

const cylinder_36 = {
  name: 'CSG.cylinder(resolution: 36)',
  api: 'cylinder',
  div: '36',
  func: function runme () { return CSG.cylinder({ radius: 100, resolution: 36 }) }
}

const cylinder_72 = {
  name: 'CSG.cylinder(resolution: 72)',
  api: 'cylinder',
  div: '72',
  func: function runme () { return CSG.cylinder({ radius: 100, resolution: 72 }) }
}

const cylinder_144 = {
  name: 'CSG.cylinder(resolution: 144)',
  api: 'cylinder',
  div: '144',
  func: function runme () { return CSG.cylinder({ radius: 100, resolution: 144 }) }
}

const cylinder_360 = {
  name: 'CSG.cylinder(resolution: 360)',
  api: 'cylinder',
  div: '360',
  func: function runme () { return CSG.cylinder({ radius: 100, resolution: 360 }) }
}

module.exports = {
  cylinder_12,
  cylinder_36,
  cylinder_72,
  cylinder_144,
  cylinder_360
}
