versions=(
3.0.0-alpha.0
3.0.1-alpha.0
)

for v in ${versions[@]}; do
  echo "########## Replay for ${v}"
  date
  npm install @jscad/modeling@${v}
  npm run suite > results_v3_${v}.csv
  date
  sleep 30
done

