#!/bin/bash

echo "Deploying Frontend"
cd WritingDrive

echo "Installing dependencies"
npm install

echo "Building Frontend"
npm run build

echo "Deploying Frontend to VPS"

# Using sshpass to automate the password entry for scp
sshpass -p '31XucZe00WoY2F4W4u+T' scp -r dist/* root@88.222.213.64:/var/www/writingdrive.com

echo "Frontend deployed successfully"

cd ..
