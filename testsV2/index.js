// primitives
const arcs = require('./arcs.js')
const circles = require('./circles.js')
const cylinders = require('./cylinders.js')
const roundedRectangles = require('./roundedRectangles.js')
const roundedCylinders = require('./roundedCylinders.js')
const roundedCuboids = require('./roundedCuboids.js')
const spheres = require('./spheres.js')

//const allExports = Object.assign({}, arcs, circles, cylinders, roundedCylinders, roundedCuboids, spheres)

// geometries - path2
const appendArc = require('./appendArc')
const appendBezier = require('./appendBezier')

//const allExports = Object.assign({}, appendArc, appendBezier)

// measurements
const measureArea = require('./measureArea')
const measureBounds = require('./measureBounds')
const measureBoundingSphere = require('./measureBoundingSphere')
const measureVolume = require('./measureVolume')

//const allExports = Object.assign({}, measureArea, measureBounds, measureBoundingSphere, measureVolume)

// booleans
const intersect = require('./intersect')
const scission = require('./scission')
const subtract = require('./subtract')
const union = require('./union')

//const allExports = Object.assign({}, intersect, scission, subtract, union)

// transforms
const align = require('./align')
const center = require('./center')
const transforms = require('./transforms')

//const allExports = Object.assign({}, align, center, transforms)

// expansions
const expand = require('./expand')

//const allExports = Object.assign({}, expand)

// extrusions
const extrudeLinear = require('./extrudeLinear')
const extrudeRectangular = require('./extrudeRectangular')
const extrudeRotate = require('./extrudeRotate')
const project = require('./project')

//const allExports = Object.assign({}, extrudeLinear, extrudeRectangular, extrudeRotate, project)

// hulls
const hull = require('./hull')
//const hullChain = require('./hullChain')

//const allExports = Object.assign({}, hull)

// modifiers
//const insertTjunctions = require('./insertTjunctions')
//const mergePolygons = require('./mergePolygons')
//const retessellate = require('./retessellate')
//const snap = require('./snap')
//const triangulatePolygons = require('./triangulatePolygons')

//const allExports = Object.assign({}, hull)

const allExports = Object.assign({},
  arcs, circles, roundedRectangles, cylinders, roundedCylinders, roundedCuboids, spheres,
  appendArc, appendBezier,
  measureArea, measureBounds, measureBoundingSphere, measureVolume,
  intersect, scission, subtract, union,
  expand,
  extrudeLinear, extrudeRectangular, extrudeRotate,
  hull,
  align, center, transforms,
)

module.exports = allExports
