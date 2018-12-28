rm -rf build
yarn build
scp -r build root@45.40.248.122:/var/www/resource_record_front/
