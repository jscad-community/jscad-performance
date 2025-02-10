# CAG.hull available from 0.5.0
versions=(
0.1.1
0.1.2
0.1.3
0.1.4
0.2.1
0.2.2
0.2.3
0.2.4
0.3.0
0.3.1
0.3.4
0.3.5
0.3.6
0.3.7
0.3.8
0.4.0
0.4.1
0.5.0
0.5.1
0.5.2
0.5.3
0.5.4
0.6.0
0.7.0
)

for v in ${versions[@]}; do
  echo "########## Replay for ${v}"
  date
  npm install @jscad/csg@${v}
  npm run suite > results_v1_${v}.csv
  date
  sleep 30
done

