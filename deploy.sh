#!/bin/bash
# $1 should be production or development

if [ $1 != production ] && [ $1 != development ]; then
  echo Please defined deploy production or development
  exit 0
fi

yarn build
timestamp=$(date +%Y%m%d%H%M%S)

if [ $1 == production ]; then
  # 這裡的帳號就是登入主機上的帳號（類似 ssh 指令的用法），如果省略帳號與主機，只寫一般的檔案路徑的話，就是代表本機的檔案。
  $ scp ./build [帳號@目的主機]:專案/build_version
  ssh user@your.production.ip
  cd ~/your/app
  ln -s build_version/$timestamp build
fi

if [ $1 == development ]; then
  cp -R ./build ./deploy_test/build_version/$timestamp
  cd ./deploy_test
  ln -s build_version/$timestamp build
  echo '測試部署完成, 你可以在 deploy_test 資料夾底下 $node server.js 打開測試'
fi

cd build_version
count=$(find . -type d -maxdepth 0 | wc -c)
echo now has $count versions
