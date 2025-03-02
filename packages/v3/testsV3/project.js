import { sphere, project } from '@jscad/modeling'

let sphere7 = null // 98 points
let sphere22 = null // 1012 points
let sphere70 = null // 9940 points
let sphere224 = null // 99904 points

export const _setupProject = {
  name: 'project setup',
  api: 'setup',
  div: '0',
  func: function runme () {
    sphere7 = sphere({ radius: 100, segments: 7 })
    sphere22 = sphere({ radius: 100, segments: 22 })
    sphere70 = sphere({ radius: 100, segments: 70 })
    return {}
  }
}

export const projectSphere100 = {
  name: 'project(100)',
  api: 'project(sphere)',
  div: '100',
  func: function runme () { return project({}, sphere7) }
}

export const projectSphere1000 = {
  name: 'project(1000)',
  api: 'project(sphere)',
  div: '1000',
  func: function runme () { return project({}, sphere22) }
}

export const projectSphere10000 = {
  name: 'project(10000)',
  api: 'project(sphere)',
  div: '10000',
  func: function runme () { return project({}, sphere70) }
}
