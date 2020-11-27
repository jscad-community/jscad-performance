// primitives
const arcs = require('./arcs.js')
const circles = require('./circles.js')
const cylinders = require('./cylinders.js')
const roundedRectangles = require('./roundedRectangles.js')
const roundedCylinders = require('./roundedCylinders.js')
const roundedCuboids = require('./roundedCuboids.js')
const spheres = require('./spheres.js')

//const allExports = Object.assign({}, arcs, circles, cylinders, roundedCylinders, roundedCuboids, spheres)

// measurements
const measureArea = require('./measureArea')
const measureBoundingBox = require('./measureBoundingBox')
const measureVolume = require('./measureVolume')

//const allExports = Object.assign({}, measureArea, measureBoundingBox, measureVolume)

// booleans
const intersect = require('./intersect')
const subtract = require('./subtract')
const union = require('./union')

//const allExports = Object.assign({}, intersect, subtract, union)

// transforms
const center = require('./center')
const transforms = require('./transforms')

//const allExports = Object.assign({}, center, transforms)

// hulls
const hull = require('./hull')

//const allExports = Object.assign({}, hull)

// expansions
const expand = require('./expand')

//const allExports = Object.assign({}, expand)

// extrusions
const extrudeLinear = require('./extrudeLinear')
const extrudeRectangular = require('./extrudeRectangular')
const extrudeRotate = require('./extrudeRotate')

//const allExports = Object.assign({}, extrudeLinear, extrudeRectangular, extrudeRotate)

const allExports = Object.assign({},
  arcs, circles, roundedRectangles, cylinders, roundedCylinders, roundedCuboids, spheres,
  measureArea, measureBoundingBox, measureVolume,
  intersect, subtract, union,
  center, transforms,
  hull,
  expand,
  extrudeLinear, extrudeRectangular, extrudeRotate)

module.exports = allExports
