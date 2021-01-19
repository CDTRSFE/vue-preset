#! /usr/bin/env bash

node build.js

cp -r package.json ./dist/package.json
cp -r package.json ./dist/v2/package.json

cp -r index.js ./dist/index.js
cp -r index.js ./dist/v2/index.js

cp -r generator ./dist/generator
cp -r generator ./dist/v2/generator

cd dist
npm publish
cd -
