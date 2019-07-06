#
# This script runs the benchmark suite continously.
# The output can be redirected to a file for further analysis.
#
DELAY=2

while  [ 0 -le 1 ]
do
  sleep $DELAY
  node --expose-gc --always_compact ./performanceV1.js
done
