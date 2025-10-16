@echo off
REM Deployment script for Firebase Hosting (Windows)

echo 🚀 Starting deployment process...

echo 📦 Installing dependencies...
npm ci

echo 🔧 Building the application...
npm run build

echo 🌐 Deploying to Firebase Hosting...
firebase deploy --only hosting

echo ✅ Deployment completed successfully!
echo 🎉 Your site should be available at: https://calmarco.web.app

pause