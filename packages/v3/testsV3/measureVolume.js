import { sphere, measureVolume } from '@jscad/modeling'

let sphere7 = null // 98 points
let sphere22 = null // 1012 points
let sphere70 = null // 9940 points
let sphere224 = null // 99904 points

export const _setupVolume = {
  name: 'measurements setup',
  api: 'setup',
  div: '0',
  func: function runme () {
    sphere7 = sphere({ radius: 100, segments: 7 })
    sphere22 = sphere({ radius: 100, segments: 22 })
    sphere70 = sphere({ radius: 100, segments: 70 })
    sphere224 = sphere({ radius: 100, segments: 224 })
    return {}
  }
}

export const measureVolumeSphere100 = {
  name: 'measureVolume(100)',
  api: 'measureVolume(sphere)',
  div: '100',
  func: function runme () { return measureVolume(sphere7) }
}

export const measureVolumeSphere1000 = {
  name: 'measureVolume(1000)',
  api: 'measureVolume(sphere)',
  div: '1000',
  func: function runme () { return measureVolume(sphere22) }
}

export const measureVolumeSphere10000 = {
  name: 'measureVolume(10000)',
  api: 'measureVolume(sphere)',
  div: '10000',
  func: function runme () { return measureVolume(sphere70) }
}

export const measureVolumeSphere100000 = {
  name: 'measureVolume(100000)',
  api: 'measureVolume(sphere)',
  div: '100000',
  func: function runme () { return measureVolume(sphere224) }
}
