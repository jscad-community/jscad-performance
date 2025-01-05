# JSCAD Performance Suite

There are performance suites for each version of the JSCAD modeling package.
- JSCAD V1 CSG package
- JSCAD V2 modeling package
- JSCAD V3 modeling package

The suites must be run manually, and require a extended period of time to complete.

The next steps require [NPM](https://www.npmjs.com/) and [Node.js](https://nodejs.org).
The JSCAD project always develops with the latest LTS releases, so install these versions.

## Installation

Just clone this repository, and run the following command.

```
node install
npm run bootstrap
```

This will install the required modules, including the latest versions of the JSCAD packages.

## Execution

If you are ready then use these commands to initiate the performance suites.

```
cd packages/v3
npm run suite
```

As always, performance is RELATIVE, so all suites need to be executed on the SAME MACHINE.
It would be wise to complete these suites when there is little or no load as well.

## Tips

The list of tests is controlled by the index.js found in testsV1, testV2, and testV2 directorires.

In addition, each functional area has a set of tests exported. For example, see the exports at the end of circles.js

## Statistics

There are two scripts to load and convert the performace statistics.
The statistics are loaded into a sqlite3 database by load_stats.py; jscad.stats.db
The statistics are converted into reports (html) by convert_stats.py; index.html

The database can be accessed using sqlite3 as well.
```
sqlite3 jscad.stats.db
```

The database tables are:
```
CREATE TABLE daily (date TEXT, name TEXT, weight INTEGER, interations INTEGER, average NUMERIC, allocation INTEGER);
CREATE TABLE environment (date TEXT, hostname TEXT, hardware TEXT, os TEXT, node TEXT);
```

## License

The MIT License (MIT)
