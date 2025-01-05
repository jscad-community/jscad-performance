const { CSG } = require('@jscad/csg')

const roundedCube_12 = {
  name: 'CSG.roundedCube(resolution: 12)',
  api: 'roundedCube',
  div: '12',
  func: function runme () { return CSG.roundedCube({ radius: 100, roundedradius: 10, resolution: 12 }) }
}

const roundedCube_36 = {
  name: 'CSG.roundedCube(resolution: 36)',
  api: 'roundedCube',
  div: '36',
  func: function runme () { return CSG.roundedCube({ radius: 100, roundedradius: 10, resolution: 36 }) }
}

const roundedCube_72 = {
  name: 'CSG.roundedCube(resolution: 72)',
  api: 'roundedCube',
  div: '72',
  func: function runme () { return CSG.roundedCube({ radius: 100, roundedradius: 10, resolution: 72 }) }
}

const roundedCube_144 = {
  name: 'CSG.roundedCube(resolution: 144)',
  api: 'roundedCube',
  div: '144',
  func: function runme () { return CSG.roundedCube({ radius: 100, roundedradius: 10, resolution: 144 }) }
}

const roundedCube_360 = {
  name: 'CSG.roundedCube(resolution: 360)',
  api: 'roundedCube',
  div: '360',
  func: function runme () { return CSG.roundedCube({ radius: 100, roundedradius: 10, resolution: 360 }) }
}

const roundedCube_720 = {
  name: 'CSG.roundedCube(resolution: 720)',
  api: 'roundedCube',
  div: '720',
  func: function runme () { return CSG.roundedCube({ radius: 100, roundedradius: 10, resolution: 720 }) }
}

module.exports = {
  roundedCube_12,
  roundedCube_36,
  roundedCube_72
//  roundedCube_144
//  roundedCube_360
//  roundedCube_720
}
