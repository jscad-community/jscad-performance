const { primitives } = require('@jscad/modeling')

const sphere_12 = {
  name: 'sphere(segments: 12)',
  api: 'sphere',
  div: '12',
  func: function runme () { return primitives.sphere({ radius: 100, segments: 12 }) }
}

const sphere_36 = {
  name: 'sphere(segments: 36)',
  api: 'sphere',
  div: '36',
  func: function runme () { return primitives.sphere({ radius: 100, segments: 36 }) }
}

const sphere_72 = {
  name: 'sphere(segments: 72)',
  api: 'sphere',
  div: '72',
  func: function runme () { return primitives.sphere({ radius: 100, segments: 72 }) }
}

const sphere_144 = {
  name: 'sphere(segments: 144)',
  api: 'sphere',
  div: '144',
  func: function runme () { return primitives.sphere({ radius: 100, segments: 144 }) }
}

const sphere_360 = {
  name: 'sphere(segments: 360)',
  api: 'sphere',
  div: '360',
  func: function runme () { return primitives.sphere({ radius: 100, segments: 360 }) }
}

module.exports = {
  sphere_12,
  sphere_36,
  sphere_72,
  sphere_144,
  sphere_360
}
