#!/usr/bin/env bash
set -euo pipefail

max_bytes="${IMAGE_MAX_BYTES:-2097152}"

if [ "$#" -eq 0 ]; then
  set -- content static assets
fi

oversized="$(mktemp)"
trap 'rm -f "$oversized"' EXIT

find "$@" -type f \( \
  -iname '*.png' -o \
  -iname '*.jpg' -o \
  -iname '*.jpeg' -o \
  -iname '*.webp' -o \
  -iname '*.avif' \
\) -size +"${max_bytes}c" -printf '%s %p\n' | sort -nr > "$oversized"

if [ -s "$oversized" ]; then
  echo "::error::Source images exceed IMAGE_MAX_BYTES=${max_bytes}. Convert, resize, or justify an explicit exception."
  awk '{ printf "%.2f MiB %s\n", $1 / 1048576, $2 }' "$oversized"
  exit 1
fi

echo "No oversized source images found above ${max_bytes} bytes."
