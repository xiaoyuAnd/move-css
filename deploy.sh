# 构建
rm -rf dist && yarn build src/index.html --public-url ./ --no-cache --no-minify
# rm -rf dist && rm -rf .cache
# 进入生成的构建文件夹
cd dist

# 初始化 git
git init
git add -A
git commit -m 'deploy'

# 部署到 GitHub Pages
git push -f git@github.com:xiaoyuAnd/move-css.git master:gh-pages
git push -f git@github.com:xiaoyuAnd/move-css.git master:gh-pages

cd -