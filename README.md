# CSG Performance Suite

Currently, there are performance suites for these versions of the JSCAD CSG library.
- CSG V1
- CSG V2

The suites must be run manually, and require a extended period of time to complete.

# Installation

Just clone this repository, and run the following command.

node install

This will install the required libraries, including the latest V1 version of the CSG library.

At this time (2019-07), the V2 version of the CSG library is not available. So, you will have to do the following.

cd testsV2

git clone https://github.com/jscad/csg.js.git

# Execution

If you are ready then use these commands to initiate the performance suites.

node --expose_gc --always_compact ./performanceV1.js

node --expose_gc --always_compact ./performanceV2.js

As always, performance is RELATIVE so these need to be completed on the SAME MACHINE.
It would be wise to complete these suites when there is little or no load as well.

# Tips

The list of tests is controlled by the index.js found in testsV1 and testV2 directory.

In addition, each functional area has a set of tests exported. For example, see the exports at the end of circles.js
