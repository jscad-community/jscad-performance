#! /usr/bin/python

import os
import re
from datetime import date
from datetime import datetime
from collections import defaultdict

import sqlite3

#
# GLOBAL variables
#
homeDir = '/Users/zdev/dev/mamp/apache2/htdocs/jscad/jscad-performance'
csvDir  = homeDir + '/csvs'
statDir = homeDir + '/reports'

maxDelta = 1;

dbPath = homeDir + '/jscad.stats.db'

#
# regular expressions for parsing statistics
#
csv_re = re.compile( '([\w\(\)]*),([\d]*),([\d]*),([\d\.]*),([\d]*)' )

#------------------------------------------------------------
#------------------------------------------------------------
def loadCsv( fp ) :
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
#   CREATE TABLE daily (date TEXT, name TEXT, weight INTEGER, interations INTEGER, average NUMERIC, allocation INTEGER)
#------------------------------------------------------------
def insertStatistics( db, today, data ) :
  xtoday = today.isoformat()

  for index, stats in enumerate(data) :
    #print stats[0]
    db.execute("insert into daily values(?, ?, ?, ?, ?, ?)", (xtoday, stats[0], stats[1], stats[2], stats[3], stats[4]))
    db.commit()

#------------------------------------------------------------
# Main Program Entry
#------------------------------------------------------------
xtoday = date.today()
xtoday = date(2020, 6, 12)
print 'Loading JSCAD Performace Statistics:',xtoday

dbconn = sqlite3.connect( dbPath )

xfilepath = homeDir + '/performance_' + xtoday.isoformat() + '.csv'
with open( xfilepath, 'r' ) as fp :
  csvdata = loadCsv(fp)
  #print csvdata

  fp.close()

  insertStatistics(dbconn, xtoday, csvdata)

dbconn.close() 

