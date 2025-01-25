const { primitives, measurements } = require('@jscad/modeling')

let sphere_7 = null // 98 points
let sphere_22 = null // 1012 points
let sphere_70 = null // 9940 points
let sphere_224 = null // 99904 points

const setupVolume = {
  name: 'measurementVolume setup',
  api: 'setup',
  div: '0',
  func: function runme () {
    sphere_7 = primitives.sphere({ radius: 100, segments: 7 })
    sphere_22 = primitives.sphere({ radius: 100, segments: 22 })
    sphere_70 = primitives.sphere({ radius: 100, segments: 70 })
    sphere_224 = primitives.sphere({ radius: 100, segments: 224 })
    return {}
  }
}

const measureVolume_sphere_100 = {
  name: 'measureVolume(100)',
  api: 'measureVolume(sphere)',
  div: '100',
  func: function runme () { return measurements.measureVolume(sphere_7) }
}

const measureVolume_sphere_1000 = {
  name: 'measureVolume(1000)',
  api: 'measureVolume(sphere)',
  div: '1000',
  func: function runme () { return measurements.measureVolume(sphere_22) }
}

const measureVolume_sphere_10000 = {
  name: 'measureVolume(10000)',
  api: 'measureVolume(sphere)',
  div: '10000',
  func: function runme () { return measurements.measureVolume(sphere_70) }
}

const measureVolume_sphere_100000 = {
  name: 'measureVolume(100000)',
  api: 'measureVolume(sphere)',
  div: '100000',
  func: function runme () { return measurements.measureVolume(sphere_224) }
}

module.exports = {
  setupVolume,

  measureVolume_sphere_100,
  measureVolume_sphere_1000,
  measureVolume_sphere_10000,
  measureVolume_sphere_100000
}
