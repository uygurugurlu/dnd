#!/usr/bin/env bash
# Ager sitesini yerelde ac.
#   ./serve.sh          -> index'i yenile + sunucuyu baslat (port 8787)
#   ./serve.sh 9000     -> baska portta
set -e
cd "$(dirname "$0")"
PORT="${1:-8787}"

python3 site/build.py

echo
echo "  ⚜  http://localhost:$PORT"
echo "     (kapatmak icin Ctrl+C)"
echo

command -v open >/dev/null && (sleep 1; open "http://localhost:$PORT") &
exec python3 -m http.server "$PORT" --bind 127.0.0.1
