// primitives
const arcs = require('./arcs.js')
const circles = require('./circles.js')
const cylinders = require('./cylinders.js')
const roundedRectangles = require('./roundedRectangles.js')
const roundedCylinders = require('./roundedCylinders.js')
const roundedCuboids = require('./roundedCuboids.js')
const spheres = require('./spheres.js')

// geometries - path2
const appendArc = require('./appendArc')
const appendBezier = require('./appendBezier')

// measurements
const measureArea = require('./measureArea')
const measureBounds = require('./measureBounds')
const measureBoundingSphere = require('./measureBoundingSphere')
const measureVolume = require('./measureVolume')

// booleans
const intersect = require('./intersect')
const scission = require('./scission')
const subtract = require('./subtract')
const union = require('./union')

// transforms
const align = require('./align')
const center = require('./center')
const transforms = require('./transforms')

// expansions
const expand = require('./expand')

// extrusions
const extrudeLinear = require('./extrudeLinear')
const extrudeRectangular = require('./extrudeRectangular')
const extrudeRotate = require('./extrudeRotate')
const project = require('./project')

// hulls
const hull = require('./hull')
// FIXME const hullChain = require('./hullChain')

// modifiers
// FIXME const insertTjunctions = require('./insertTjunctions')
// FIXME const mergePolygons = require('./mergePolygons')
// FIXME const retessellate = require('./retessellate')
// FIXME const snap = require('./snap')
// FIXME const triangulatePolygons = require('./triangulatePolygons')

const allExports = Object.assign({},
  arcs, circles, roundedRectangles, cylinders, roundedCylinders, roundedCuboids, spheres,
  appendArc, appendBezier,
  measureArea, measureBounds, measureBoundingSphere, measureVolume,
  intersect, scission, subtract, union,
  // expand,
  extrudeLinear, extrudeRectangular, extrudeRotate,
  hull,
  align, center, transforms
)

module.exports = allExports
