import { circle, translate, extrudeRotate } from '@jscad/modeling'

let circle10 = null // 10 points
let circle50 = null // 50 points

export const _setupExtrudeRotate = {
  name: 'extrudeRotate setup',
  api: 'setup',
  div: '0',
  func: function runme () {
    circle10 = translate([0, 500], circle({ radius: 100, segments: 10 }))
    circle50 = translate([0, 500], circle({ radius: 100, segments: 50 }))
    return {}
  }
}

// EXTRUSIONS... extrudeRoate

export const extrudeRotate100 = {
  name: 'extrudeRotate',
  api: 'extrudeRotate',
  div: '100',
  func: function run () { return extrudeRotate({ segments: 10 }, circle10) }
}

export const extrudeRotate500 = {
  name: 'extrudeRotate',
  api: 'extrudeRotate',
  div: '500',
  func: function run () { return extrudeRotate({ segments: 50 }, circle10) }
}

export const extrudeRotate1000 = {
  name: 'extrudeRotate',
  api: 'extrudeRotate',
  div: '1000',
  func: function run () { return extrudeRotate({ segments: 20 }, circle50) }
}

export const extrudeRotate5000 = {
  name: 'extrudeRotate',
  api: 'extrudeRotate',
  div: '5000',
  func: function run () { return extrudeRotate({ segments: 100 }, circle50) }
}

export const extrudeRotate10000 = {
  name: 'extrudeRotate',
  api: 'extrudeRotate',
  div: '10000',
  func: function run () { return extrudeRotate({ segments: 200 }, circle50) }
}
