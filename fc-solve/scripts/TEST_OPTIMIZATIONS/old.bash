export SRC_DIR="$(pwd)/../source/" ARGS="--worker-step 16 -l as" num_cpus="$(cat /proc/cpuinfo | grep -P '^processor\s*:' | wc -l)"; bash "${SRC_DIR:-.}"/scripts/time-threads-num.bash "$num_cpus" "$num_cpus"
