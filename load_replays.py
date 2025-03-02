#! /usr/bin/python

import json
import os
import re
from datetime import date
from datetime import datetime
from collections import defaultdict

import sqlite3

#
# GLOBAL variables
#
#homeDir = '/Users/zdev/dev/mamp/apache2/htdocs/jscad/jscad-performance'
homeDir = '/Users/z3dev/dev/performance/jscad-performance'

replayV = 'v1'
replayDir  = homeDir + '/packages/' + replayV

dbPath = homeDir + '/jscad.stats.db'

maxDelta = 1;


#
# regular expressions for parsing statistics
#
csv_re = re.compile( '([\w\(\)]*),([\d]*),([\d]*),([\d\.]*),([\d]*)' )

#------------------------------------------------------------
#------------------------------------------------------------
def loadVersions() :
  xfilepath = replayDir + '/versions.json'
  with open( xfilepath, 'r' ) as fp :
    versions = json.load(fp)

  # convert the timestamps to just dates
  for key, value in versions.items():
    versions[key] = datetime.strptime(value, '%Y-%m-%dT%H:%M:%S.%fZ').strftime('%Y-%m-%d')

  return versions

#------------------------------------------------------------
#------------------------------------------------------------
def loadCsv( filepath ) :
  with open( filepath, 'r' ) as fp :
    data = []
    for xline in fp :
      xline = xline.strip()
      #print 'line [',xline,']'
      xmatch = csv_re.match( xline )
      if xmatch:
        xname = xmatch.group(1)
        xweight = xmatch.group(2)
        xinterations = xmatch.group(3)
        xaverage = xmatch.group(4)
        xallocation = xmatch.group(5)
        #print 'match',xname,xweight,xinterations,xaverage,xallocation
        data.append([xname, xweight, xinterations, xaverage, xallocation])

    return data

#------------------------------------------------------------
# TABLE:
#   CREATE TABLE daily (revision TEXT, version TEXT, date TEXT, name TEXT, weight INTEGER, interations INTEGER, average NUMERIC, allocation INTEGER)
#------------------------------------------------------------
def insertStatistics( db, revision, version, released, data ) :
  #print revision, version, released
  for index, stats in enumerate(data) :
    #print stats[0]
    db.execute("insert into daily values(?, ?, ?, ?, ?, ?, ?, ?)", (revision, version, released, stats[0], stats[1], stats[2], stats[3], stats[4]))
    db.commit()

#------------------------------------------------------------
# Main Program Entry
#------------------------------------------------------------
print 'Loading JSCAD Performace Statistics from Replays', replayV

versions = loadVersions()

dbconn = sqlite3.connect( dbPath )

version_re = re.compile( 'results_' + replayV + '_(.*)\.csv' )
for filename in os.listdir(replayDir):
  xmatch = version_re.match( filename )
  if xmatch:
    version = xmatch.group(1)
    if version in versions:
      revision = replayV
      released = versions[version]
      filepath = replayDir + '/' + filename

      print revision, version, released

      data = loadCsv( filepath )
      insertStatistics(dbconn, revision, version, released, data)

dbconn.close() 
