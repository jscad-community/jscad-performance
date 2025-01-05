const { CAG } = require('@jscad/csg')

const circle_12 = {
  name: 'CAG.circle(resolution: 12)',
  api: 'circle',
  div: '12',
  func: function runme () { return CAG.circle({ radius: 100, resolution: 12 }) }
}

const circle_36 = {
  name: 'CAG.circle(resolution: 36)',
  api: 'circle',
  div: '36',
  func: function runme () { return CAG.circle({ radius: 100, resolution: 36 }) }
}

const circle_72 = {
  name: 'CAG.circle(resolution: 72)',
  api: 'circle',
  div: '72',
  func: function runme () { return CAG.circle({ radius: 100, resolution: 72 }) }
}

const circle_144 = {
  name: 'CAG.circle(resolution: 144)',
  api: 'circle',
  div: '144',
  func: function runme () { return CAG.circle({ radius: 100, resolution: 144 }) }
}

const circle_360 = {
  name: 'CAG.circle(resolution: 360)',
  api: 'circle',
  div: '360',
  func: function runme () { return CAG.circle({ radius: 100, resolution: 360 }) }
}

const circle_720 = {
  name: 'CAG.circle(resolution: 720)',
  api: 'circle',
  div: '720',
  func: function runme () { return CAG.circle({ radius: 100, resolution: 720 }) }
}

module.exports = {
  circle_12,
  circle_36,
  circle_72,
  circle_144,
  circle_360
  // circle_720
}
