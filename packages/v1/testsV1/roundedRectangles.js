const { CAG } = require('@jscad/csg')

const roundedRectangle_12 = {
  name: 'roundedRectangle',
  api: 'roundedRectangle',
  div: '12',
  func: function runme () { return CAG.roundedRectangle({ radius: [50, 50], roundradius: 10, resolution: 12 }) }
}

const roundedRectangle_36 = {
  name: 'roundedRectangle',
  api: 'roundedRectangle',
  div: '36',
  func: function runme () { return CAG.roundedRectangle({ radius: [50, 50], roundradius: 10, resolution: 36 }) }
}

const roundedRectangle_72 = {
  name: 'roundedRectangle',
  api: 'roundedRectangle',
  div: '72',
  func: function runme () { return CAG.roundedRectangle({ radius: [50, 50], roundradius: 10, resolution: 72 }) }
}

const roundedRectangle_144 = {
  name: 'roundedRectangle',
  api: 'roundedRectangle',
  div: '144',
  func: function runme () { return CAG.roundedRectangle({ radius: [50, 50], roundradius: 10, resolution: 144 }) }
}

const roundedRectangle_360 = {
  name: 'roundedRectangle',
  api: 'roundedRectangle',
  div: '360',
  func: function runme () { return CAG.roundedRectangle({ radius: [50, 50], roundradius: 10, resolution: 360 }) }
}

module.exports = {
  roundedRectangle_12,
  roundedRectangle_36,
  roundedRectangle_72,
  roundedRectangle_144,
  roundedRectangle_360
}
