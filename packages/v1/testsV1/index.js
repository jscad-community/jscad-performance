// primitives
const arcs = require('./arcs.js')
const circles = require('./circles.js')
const cylinders = require('./cylinders.js')
const roundedCubes = require('./roundedCubes.js')
const roundedCylinders = require('./roundedCylinders.js')
const roundedRectangles = require('./roundedRectangles.js')
const spheres = require('./spheres.js')

// geometries - path2
const appendArc = require('./appendArc.js')
const appendBezier = require('./appendBezier.js')

// measurements
const measureArea = require('./measureArea')
const measureBounds = require('./measureBounds')
const measureVolume = require('./measureVolume')

// booleans
const intersect = require('./intersect')
const subtract = require('./subtract')
const union = require('./union')

// transforms
const center = require('./center')
const transforms = require('./transforms')

// expansions
const expand = require('./expand')

// extrusions
const extrudeLinear = require('./extrudeLinear')
const extrudeRectangular = require('./extrudeRectangular')
const extrudeRotate = require('./extrudeRotate')

// hulls
const hull = require('./hull')

const allExports = Object.assign({},
  arcs, circles, cylinders, roundedCylinders, roundedCubes, roundedRectangles, spheres,
  appendArc, appendBezier,
  measureArea, measureBounds, measureVolume,
  intersect, subtract, union,
  expand,
  extrudeLinear, extrudeRectangular, extrudeRotate,
  hull,
  center, transforms,
)

module.exports = allExports
