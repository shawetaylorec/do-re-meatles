#!/usr/bin/env bash
# Stamp the service worker with a hash of the app's content. Run before every commit
# that changes the app: a new hash means a new cache name, which is what makes
# installed copies notice the update.
#   usage: bash tools/stamp.sh
set -euo pipefail
cd "$(dirname "$0")/.."
V=$(cat index.html vendor/abcjs-basic-min.js data/phrases.js manifest.webmanifest | sha1sum | cut -c1-10)
sed -i "s/^const VERSION = .*/const VERSION = \"$V\";/" sw.js
echo "service worker version $V"
