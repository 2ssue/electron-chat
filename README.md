# Electron-Chat

This project converted this book's examples (electron-chat) to current version react and electron.

<img src='http://image.yes24.com/momo/TopCate1389/MidCate008/138872871.jpg' width='300px'/>

## 🏠 [PUBLISH PAGE](http://106.10.46.87:3000)

## Install

```bash
$ npm install
```

## Usage

```bash
# Note
#
# You have to make .env file before start.
# This project don't inform database information. checkout `dev.env`
#
# start react dev server
$ npm start 
# start electron app when react server start complete
$ npm run electron 
```

## Project Structure

This project's structure is based on [express generator](https://expressjs.com/ko/starter/generator.html)

```bash
electron-chat
├── 📁public
├── 📂src
│   ├── 📁electron              # about electron source
│   ├── 📁router                # react component source
│   ├── 📄 App.js
│   ├── 📄 index.css
│   ├── 📄 index.js             # entry point
│   └── 📄 logo.svg
├── .env                        # config file related firebase api. check dev.env
├── package-lock.json       
└── package.json            
```

## Tech

| module name                                                         | description                                                                                                                                                                                                       |
| ------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [dotenv](https://www.npmjs.com/package/dotenv)                      | Dotenv is a zero-dependency module that loads environment variables from a .env file into process.env. Storing configuration in the environment separate from code is based on The Twelve-Factor App methodology. |
| [create-react-app](https://www.npmjs.com/package/create-react-app)  | Create React apps with no build configuration.                                                                                                                                                                    |
| [styled component](https://www.npmjs.com/package/styled-components) | Visual primitives for the component age. Use the best bits of ES6 and CSS to style your apps without stress 💅                                                                                                    |
| [electron](https://www.npmjs.com/package/electron)|The Electron framework lets you write cross-platform desktop applications using JavaScript, HTML and CSS. It is based on Node.js and Chromium and is used by the Atom editor and many other apps.|
|[firebase](https://www.npmjs.com/package/firebase)|Firebase provides the tools and infrastructure you need to develop, grow, and earn money from your app. This package supports web (browser), mobile-web, and server (Node.js) clients.|

## Author

Sujeong Lee

- Github: [@2ssue](https://github.com/2ssue)
