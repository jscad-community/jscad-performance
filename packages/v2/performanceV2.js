const os = require('os')

const tests = require('./testsV2')

const microtime = require('microtime')

const MICROPERSECOND = 1000000

const calculateUsage = (allocations) => {
  const heapMean = allocations.reduce((sum, sample) => sum + sample.heap, 0) / allocations.length
  const rssMean = allocations.reduce((sum, sample) => sum + sample.rss, 0) / allocations.length
  return {
    heapMean: heapMean / 1024,
    rssMean: rssMean / 1024
  }
}

/**
 * T-Distribution two-tailed critical values for 95% confidence.
 * For more info see http://www.itl.nist.gov/div898/handbook/eda/section3/eda3672.htm.
 */
const tTable = {
  1: 12.706,
  2: 4.303,
  3: 3.182,
  4: 2.776,
  5: 2.571,
  6: 2.447,
  7: 2.365,
  8: 2.306,
  9: 2.262,
  10: 2.228,
  11: 2.201,
  12: 2.179,
  13: 2.16,
  14: 2.145,
  15: 2.131,
  16: 2.12,
  17: 2.11,
  18: 2.101,
  19: 2.093,
  20: 2.086,
  21: 2.08,
  22: 2.074,
  23: 2.069,
  24: 2.064,
  25: 2.06,
  26: 2.056,
  27: 2.052,
  28: 2.048,
  29: 2.045,
  30: 2.042,
  infinity: 1.96
}

const calculateStatistics = (samples) => {
  const df = samples.length - 1
  const mean = samples.reduce((sum, sample) => sum + sample, 0) / samples.length
  const variance = samples.reduce((sum, sample) => sum + Math.pow(sample - mean, 2), 0) / df
  const deviation = Math.sqrt(variance)
  const error = deviation / Math.sqrt(samples.length)
  const marginOfError = error * (tTable[Math.round(df)] || tTable.infinity)
  const relativeError = marginOfError / mean * 100
  return {
    df: df,
    mean: mean,
    variance: variance,
    deviation: deviation,
    error: error,
    marginOfError: marginOfError,
    relativeError: relativeError
  }
}

// extract environment information
const cpus = os.cpus()
const env = []
env.push(os.platform())
env.push(os.release())
env.push(cpus[0].model)
env.push(cpus[0].speed)
env.push(os.arch())
env.push(os.totalmem() / 1048576)

if (!global.gc) {
  console.log('**** WARNING: global.gc is not available')
}

const entries = Object.entries(tests)
entries.forEach((entry) => {
  // setup the performance test
  if (entry) {
    const item = entry[0]
    const test = entry[1]

    // obtain the details of the test
    const name = test.name
    const api = test.api
    const div = test.div
    const performance = test.func

    // console.log('Test: ' + name + ' (' + api + ',' + div + ')')

    let samples = 0
    let maxsamples = 1000
    const timings = []
    const allocations = []
    let totalElapse = 0

    if (api === 'setup') maxsamples = 1

    try {
      while (samples < maxsamples) {
        const startusage = process.memoryUsage()
        const starttime = microtime.now()

        const result = performance()

        const endtime = microtime.now()
        const endusage = process.memoryUsage()

        const timing = (endtime - starttime) / MICROPERSECOND
        timings.push(timing)
        totalElapse += timing

        let rss = endusage.rss - startusage.rss
        let heap = endusage.heapUsed - startusage.heapUsed
        if (rss < 0) rss = 0
        if (heap < 0) heap = 0
        allocations.push({ rss: rss, heap: heap })

        samples++
      }

      if (maxsamples > 1) {
        // crunch the timings and the allocations
        const usage = calculateUsage(allocations)
        const meanrss = Math.floor(usage.rssMean)

        const stats = calculateStatistics(timings)
        const meanms = stats.mean

        console.log(api + ',' + div + ',' + samples + ',' + meanms + ',' + meanrss)
      }
    } catch (TypeError) {
    }
  }
})
