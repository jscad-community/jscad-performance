import { circle, extrudeLinear } from '@jscad/modeling'

let circle10 = null // 10 points
let circle50 = null // 50 points
let circle100 = null // 100 points

export const _setupExtrudeLinear = {
  name: 'extrudeLinear setup',
  api: 'setup',
  div: '0',
  func: function runme () {
    circle10 = circle({ radius: 100, segments: 10 })
    circle50 = circle({ radius: 100, segments: 50 })
    circle100 = circle({ radius: 100, segments: 100 })
    return {}
  }
}

// EXTRUSIONS... extrudeLinear

export const extrudeLinear100 = {
  name: 'extrudeLinear',
  api: 'extrudeLinear',
  div: '100',
  func: function run () { return extrudeLinear({ offset: [0, 0, 100], twistAngle: 5, twistSteps: 10 }, circle10) }
}

export const extrudeLinear500 = {
  name: 'extrudeLinear',
  api: 'extrudeLinear',
  div: '500',
  func: function run () { return extrudeLinear({ offset: [0, 0, 100], twistAngle: 5, twistSteps: 10 }, circle50) }
}

export const extrudeLinear1000 = {
  name: 'extrudeLinear',
  api: 'extrudeLinear',
  div: '1000',
  func: function run () { return extrudeLinear({ offset: [0, 0, 100], twistAngle: 5, twistSteps: 10 }, circle100) }
}

export const extrudeLinear5000 = {
  name: 'extrudeLinear',
  api: 'extrudeLinear',
  div: '5000',
  func: function run () { return extrudeLinear({ offset: [0, 0, 100], twistAngle: 5, twistSteps: 50 }, circle100) }
}

export const extrudeLinear10000 = {
  name: 'extrudeLinear',
  api: 'extrudeLinear',
  div: '10000',
  func: function run () { return extrudeLinear({ offset: [0, 0, 100], twistAngle: 5, twistSteps: 100 }, circle100) }
}
