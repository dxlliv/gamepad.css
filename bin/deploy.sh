#!/bin/sh

# yeah dude, you see i'm not the master of deployment;
# dunno how to use github actions and merge two dist folders

rm -rf ./dist

yarn build-css

cp ./README.md ./dist/README.md

jsonFile=package.json;

node > ./dist/${jsonFile} <<EOF
const data = require('./${jsonFile}');

delete data.private
delete data.scripts
delete data.dependencies
delete data.devDependencies
delete data.packageManager

// output package.json
console.log(JSON.stringify(data, null, "\t"));

EOF

git add .
git commit -m "Update dist folder"

rm -rf ./docs

yarn build
yarn build-storybook
touch docs/.nojekyll

# commit, then deploy on GitHub Pages
git add .
git commit -m "Update docs folder"
