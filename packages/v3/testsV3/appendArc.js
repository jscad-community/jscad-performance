import { path2 } from '@jscad/modeling'

const startpoint = path2.create([[0, 0]])
const endpoint = [100, 100]

export const appendArc12 = {
  name: 'appendArc(segments: 12)',
  api: 'appendArc',
  div: '12',
  func: function runme () { return path2.appendArc({ endpoint, radius: [10, 10], segments: 12 }, startpoint) }
}

export const appendArc36 = {
  name: 'appendArc(segments: 36)',
  api: 'appendArc',
  div: '36',
  func: function runme () { return path2.appendArc({ endpoint, radius: [10, 10], segments: 36 }, startpoint) }
}

export const appendArc72 = {
  name: 'appendArc(segments: 72)',
  api: 'appendArc',
  div: '72',
  func: function runme () { return path2.appendArc({ endpoint, radius: [10, 10], segments: 72 }, startpoint) }
}

export const appendArc144 = {
  name: 'appendArc(segments: 144)',
  api: 'appendArc',
  div: '144',
  func: function runme () { return path2.appendArc({ endpoint, radius: [10, 10], segments: 144 }, startpoint) }
}

export const appendArc360 = {
  name: 'appendArc(segments: 360)',
  api: 'appendArc',
  div: '360',
  func: function runme () { return path2.appendArc({ endpoint, radius: [10, 10], segments: 360 }, startpoint) }
}
