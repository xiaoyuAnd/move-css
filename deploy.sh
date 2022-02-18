#!/usr/bin/env sh

# 终止一个错误
set -e

# 构建
rm -rf dist && parcel build src/index.html --no-cache --no-minify

# 进入生成的构建文件夹
cd dist

# 如果你是要部署到自定义域名
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# 部署到 GitHub Pages
git push -f git@github.com:xiaoyuAnd/move-css.git master:gh-pages

cd -