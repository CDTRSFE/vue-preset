#! /usr/bin/env bash

set -e
node build.js

cp -r index.js ./dist/index.js
cp -r index.js ./dist/v2/index.js

cp -r generator ./dist/generator
cp -r generator ./dist/v2/generator

cp -r prompts.js ./dist/prompts.js
cp -r prompts.js ./dist/v2/prompts.js

cp -r README.md ./dist/README.md
cp -r LICENSE ./dist/LICENSE

cd dist
npm publish
cd -
