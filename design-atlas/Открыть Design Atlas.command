#!/bin/zsh
set -e
atlas_dir="${0:A:h}"
cd "$atlas_dir"
export PATH="/usr/local/bin:/opt/homebrew/bin:$PATH"
if ! command -v node >/dev/null 2>&1; then
  print 'Для запуска нужен Node.js. Инструкция находится в README.md.'
  read 'atlas_wait?Нажмите Enter, чтобы закрыть окно.'
  exit 1
fi
if [[ ! -d node_modules ]]; then npm ci; fi
if curl -fsS http://127.0.0.1:5173/ 2>/dev/null | rg -q 'Design Atlas'; then
  open 'http://127.0.0.1:5173/'
  exit 0
fi
npm run dev &
atlas_server_pid=$!
trap 'kill "$atlas_server_pid" 2>/dev/null || true' EXIT INT TERM
for atlas_attempt in {1..30}; do
  if curl -fsS http://127.0.0.1:5173/ >/dev/null 2>&1; then
    open 'http://127.0.0.1:5173/'
    print 'Design Atlas открыт. Оставьте это окно работающим. Для остановки нажмите Ctrl+C.'
    wait "$atlas_server_pid"
    exit 0
  fi
  sleep 0.3
done
print 'Сервер не запустился. Возможно, порт 5173 занят другим приложением.'
wait "$atlas_server_pid"
