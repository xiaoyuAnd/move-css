# 构建
rm -rf dist && parcel build src/index.html --public-url ./ --no-cache --no-minify

# 进入生成的构建文件夹
cd dist

# 初始化 git
git init
git add -A
git commit -m 'deploy'

# 部署到 GitHub Pages
git push -f git@github.com:Hyuain/usagi-piske-animated.git master:gh-pages

cd -