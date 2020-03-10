# JSCAD Performance Suite

There are performance suites for these versions of the JSCAD CSG module.
- CSG V1
- Modeling V2

The suites must be run manually, and require a extended period of time to complete.

# Installation

Just clone this repository, and run the following command.

node install

This will install the required modules, including the last V1 version of the CSG library (@jscad/csg).

The V2 version of the CSG library (@jscad/modeling) is now part of the OpenJSCAD.org project.

cd node_modules/@jscad/
ln -s ../../../OpenJSCAD.org/packages/modeling modeling
cd ../..

# Execution

If you are ready then use these commands to initiate the performance suites.

node --expose_gc --always_compact ./performanceV1.js

node --expose_gc --always_compact ./performanceV2.js

As always, performance is RELATIVE, so all suites need to be executed on the SAME MACHINE.
It would be wise to complete these suites when there is little or no load as well.

# Tips

The list of tests is controlled by the index.js found in testsV1 and testV2 directory.

In addition, each functional area has a set of tests exported. For example, see the exports at the end of circles.js
