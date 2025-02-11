versions=(
2.0.0
2.1.0
2.2.0
2.3.0
2.4.0
2.5.0
2.5.1
2.5.2
2.5.3
2.6.0
2.6.1
2.7.0
2.7.1
2.7.2
2.8.0
2.9.0
2.9.1
2.9.2
2.9.3
2.9.4
2.9.5
2.9.6
2.10.0
2.11.0
2.11.1
2.12.0
2.12.1
2.12.2
2.12.3
2.12.4
2.12.5
)

for v in ${versions[@]}; do
  date
  npm install @jscad/modeling@${v}
  npm run suite > results_v2_${v}.csv
  date
  sleep 30
done

