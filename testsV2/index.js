// primitives
const arcs = require('./arcs.js')
const circles = require('./circles.js')
const cylinders = require('./cylinders.js')
const roundedCylinders = require('./roundedCylinders.js')
const roundedCuboids = require('./roundedCuboids.js')
const spheres = require('./spheres.js')

//const allExports = Object.assign({}, arcs, circles, cylinders, roundedCylinders, roundedCuboids, spheres)

// measurements
const measureArea = require('./measureArea')
const measureBounds = require('./measureBounds')
const measureVolume = require('./measureVolume')

const allExports = Object.assign({}, measureBounds)
//const allExports = Object.assign({}, measureArea, measureBounds, measureVolume)

// booleans
const intersect = require('./intersect')
const subtract = require('./subtract')
const union = require('./union')

//const allExports = Object.assign({}, intersect, subtract, union)

module.exports = allExports
