const { primitives, extrusions } = require('@jscad/modeling')

let sphere_7 = null // 98 points
let sphere_22 = null // 1012 points
let sphere_70 = null // 9940 points
let sphere_158 = null // 50244 points

const setupVolume = {
  name: 'measureVolume setup',
  api: 'setup',
  div: '0',
  func: function runme () {
    sphere_7 = primitives.sphere({ radius: 100, segments: 7 })
    sphere_22 = primitives.sphere({ radius: 100, segments: 22 })
    sphere_70 = primitives.sphere({ radius: 100, segments: 70 })
    sphere_158 = primitives.sphere({ radius: 100, segments: 158 })
    return {}
  }
}

const project_sphere_100 = {
  name: 'project(100)',
  api: 'project(sphere)',
  div: '100',
  func: function runme () { return extrusions.project({}, sphere_7) }
}

const project_sphere_1000 = {
  name: 'project(1000)',
  api: 'project(sphere)',
  div: '1000',
  func: function runme () { return extrusions.project({}, sphere_22) }
}

const project_sphere_10000 = {
  name: 'project(10000)',
  api: 'project(sphere)',
  div: '10000',
  func: function runme () { return extrusions.project({}, sphere_70) }
}

module.exports = {
  setupVolume,

  project_sphere_100,
  project_sphere_1000,
  project_sphere_10000
}
