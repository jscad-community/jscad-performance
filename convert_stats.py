#! /usr/bin/python
# -*- coding: utf-8

import codecs
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
templatePath  = homeDir + '/template.html'
indexPath = homeDir + '/index.html'

dbPath = homeDir + '/jscad.stats.db'

#
#
csv_re = re.compile( '([\w\(\)]*),([\d]*),([\d]*),([\d\.]*),([\d]*)' )

#------------------------------------------------------------
#------------------------------------------------------------
def getListOfDates() :
  # load the list of unique dates
  dbcursor = dbconn.cursor()
  dbcursor.execute('select distinct(date) from daily order by date')
  dbresults = dbcursor.fetchall()
  listofdates = ''
  for dbrow in dbresults :
    listofdates = listofdates + '"' + dbrow[0] + '", '
  return listofdates

#------------------------------------------------------------
#------------------------------------------------------------
def getListOfVersions() :
  # load the list of unique dates
  dbcursor = dbconn.cursor()
  dbcursor.execute('select distinct(version) from daily order by date')
  dbresults = dbcursor.fetchall()
  listofversions = ''
  for dbrow in dbresults :
    listofversions = listofversions + '"' + dbrow[0] + '", '
  return listofversions

#------------------------------------------------------------
#------------------------------------------------------------
def getDataSet(chindex, name, dsindex, weight) :
  configId = 'config{:02}'.format(chindex)
  dsId = 'dataset{:02}{:02}'.format(chindex, dsindex)
  # load the weights
  dbcursor = dbconn.cursor()
  dbcursor.execute('select average from daily where name = "{0}" and weight = {1} order by date'.format(name, weight))
  dbresults = dbcursor.fetchall()
  dataset = 'let ' + dsId + ' = {\n'
  dataset += '  label: "{0} {1}",\n'.format(name, weight)
  dataset += '  data: ['
  for dbrow in dbresults :
    dataset += '{0:.8f}, '.format(dbrow[0])
  # add the binding between dataset and configuration
  dataset += ']\n'
  dataset += '}\n'
  dataset += 'addDataset({0}, {1})\n\n'.format(configId, dsId)
  return dataset

#------------------------------------------------------------
#------------------------------------------------------------
def getDataSets(chindex, name) :
  configId = 'config{:02}'.format(chindex)
  # load the list of data sets
  dbcursor = dbconn.cursor()
  dbcursor.execute('select distinct(weight) from daily where name = "{0}" order by date'.format(name))
  dbresults = dbcursor.fetchall()
  datasets = ''
  dsindex = 1
  for dbrow in dbresults :
    datasets += getDataSet(chindex, name, dsindex, dbrow[0])
    dsindex += 1
  return datasets

#------------------------------------------------------------
#------------------------------------------------------------
def getChartDefinition(chindex, name) :
  configId = 'config{:02}'.format(chindex)
  configTitle = "'JSCAD Performance - {0}'".format(name.upper())
  definition = '<div>\n  <canvas id="{0}" class="statistics"></canvas>\n</div>\n'.format(configId)
  definition += '<script>\n'
  definition += 'let {0} = addConfig({1})\n'.format(configId, configTitle)
  definition += getDataSets(chindex, name)
  definition += '</script>\n'
  #print definition

  return definition

#------------------------------------------------------------
#------------------------------------------------------------
def getListOfCharts() :
  charts = ''
  # load the list of charts (statistics)
  dbcursor = dbconn.cursor()
  dbcursor.execute('select distinct(name) from daily order by name')
  dbresults = dbcursor.fetchall()
  chindex = 1
  for dbrow in dbresults :
    charts += getChartDefinition(chindex, dbrow[0])
    chindex += 1
  return charts

#------------------------------------------------------------
# Main Program Entry
#------------------------------------------------------------
xtoday = date.today()
print 'Loading JSCAD Performace Statistics:',xtoday

dbconn = sqlite3.connect( dbPath )

listofdates_re  = re.compile( '.*(__LIST_OF_DATES__)' )
listofversions_re  = re.compile( '.*(__LIST_OF_VERSIONS__)' )
listofcharts_re = re.compile( '.*(__LIST_OF_CHARTS__)' )

with codecs.open( templatePath, mode='rt', encoding='utf-8' ) as inputfile :
  print 'opened template'
  with codecs.open( indexPath, mode='w+', encoding='utf-8' ) as outputfile :
    print 'opened index'
    for line in inputfile:
      # replace list of dates
      xmatch = listofdates_re.match( line )
      if xmatch:
        macro = xmatch.group(1)
        outputfile.write(re.sub(macro, getListOfDates(), line))
        continue

      # replace list of versions
      xmatch = listofversions_re.match( line )
      if xmatch:
        macro = xmatch.group(1)
        outputfile.write(re.sub(macro, getListOfVersions(), line))
        continue

      # replace list of charts
      xmatch = listofcharts_re.match( line )
      if xmatch:
        macro = xmatch.group(1)
        outputfile.write(re.sub(macro, getListOfCharts(), line))
        continue

      outputfile.write(line)

    outputfile.close()
  inputfile.close()

dbconn.close() 

