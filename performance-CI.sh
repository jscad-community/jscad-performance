#!/bin/bash

export PATH="/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin"

DATE=`date '+%Y-%m-%d_%H-%M-%S'`
DATECSV=`date '+%Y-%m-%d'`

# git repository information (FOR MONITORING CHANGES)
REPODIR=/Users/zdev/dev/mamp/apache2/htdocs/jscad/OpenJSCAD.org.v2.performace
REPOBRANCH=V2

# performance suite information
PERFDIR=/Users/zdev/dev/mamp/apache2/htdocs/jscad/jscad-performance

# determine if the git repository has changed
cd ${REPODIR}

# LOCALSHA=`git rev-parse --verify origin/${REPOBRANCH}`
LOCALSHA=`git show-ref --hash refs/heads/${REPOBRANCH}`
REMOTESHA=`git ls-remote origin ${REPOBRANCH} | awk '{print $1}'`

# echo "local: ${LOCALSHA}"
# echo "remote: ${REMOTESHA}"

if [[ "$LOCALSHA" == "$REMOTESHA" ]];
then
  echo "${DATECSV} : no changes"
  exit 1
fi

echo "${DATECSV} : changes found, executing performance suite"

# updates are present
git checkout ${REPOBRANCH}
if [ $? -ne 0 ]
then
  exit 1
fi
git pull
if [ $? -ne 0 ]
then
  exit 1
fi

#
# prepare to run the performace suite
#
HOSTNAME=`hostname`
MACHINE=`uname -m`
OS=`uname -r -s`
NODE=`node --version`

CSVOUT=${PERFDIR}/performance_${DATECSV}.csv

echo "$HOSTNAME $MACHINE $OS $NODE $DATE $CSVOUT"

#
# run the performance suite
#
cd ${PERFDIR}

date
node --expose_gc --always_compact ./performanceV2.js > ${CSVOUT}
date

#
# crunch the data into the DB
#

#
# generate a report
#

#
# send the report
#

echo "${DATECSV} : completed performance suite"
