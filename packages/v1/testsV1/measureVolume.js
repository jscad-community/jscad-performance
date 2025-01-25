const { CSG, CAG } = require('@jscad/csg')

let sphere_7 = null // 98 points
let sphere_22 = null // 1012 points
let sphere_70 = null // 9940 points
let sphere_224 = null // 99904 points

const setupVolume = {
  name: 'measureVolume setup',
  api: 'setup',
  div: '0',
  func: function runme () {
    sphere_7 = CSG.sphere({ radius: 100, resolution: 7 })
    sphere_22 = CSG.sphere({ radius: 100, resolution: 22 })
    sphere_70 = CSG.sphere({ radius: 100, resolution: 70 })
    sphere_224 = CSG.sphere({ radius: 100, resolution: 224 })
    return {}
  }
}

const measureVolume_sphere_100 = {
  name: 'measureVolume(100)',
  api: 'measureVolume(sphere)',
  div: '100',
  func: function runme () { return sphere_7.getFeatures('volume') }
}

const measureVolume_sphere_1000 = {
  name: 'measureVolume(1000)',
  api: 'measureVolume(sphere)',
  div: '1000',
  func: function runme () { return sphere_22.getFeatures('volume') }
}

const measureVolume_sphere_10000 = {
  name: 'measureVolume(10000)',
  api: 'measureVolume(sphere)',
  div: '10000',
  func: function runme () { return sphere_70.getFeatures('volume') }
}

const measureVolume_sphere_100000 = {
  name: 'measureVolume(100000)',
  api: 'measureVolume(sphere)',
  div: '100000',
  func: function runme () { return sphere_224.getFeatures('volume') }
}

module.exports = {
  setupVolume,

  measureVolume_sphere_100,
  measureVolume_sphere_1000,
  measureVolume_sphere_10000,
  measureVolume_sphere_100000
}
