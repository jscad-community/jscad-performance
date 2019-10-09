// primitives
const arcs = require('./arcs.js')
const circles = require('./circles.js')
const cylinders = require('./cylinders.js')
const roundedCylinders = require('./roundedCylinders.js')
const roundedCubes = require('./roundedCubes.js')
const spheres = require('./spheres.js')

//const allExports = Object.assign({}, arcs, circles, cylinders, roundedCylinders, roundedCubes, spheres)

// measurements
const measureArea = require('./measureArea')
const measureBounds = require('./measureBounds')
const measureVolume = require('./measureVolume')

//const allExports = Object.assign({}, measureArea, measureBounds, measureVolume)

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

const allExports = Object.assign({}, hull)

module.exports = allExports
