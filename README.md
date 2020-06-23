<div align="center">
  <img src="https://user-images.githubusercontent.com/41703972/85446115-76a66a80-b56a-11ea-9e8f-3dd88b1fbf15.png">
</div>

<p align="center">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/ribeiromatheus/ecoplace">

  <img alt="Repository size" src="https://img.shields.io/github/repo-size/ribeiromatheus/ecoplace">
  
  <a href="https://github.com/ribeiromatheus/ecoplace/commits/master">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/ribeiromatheus/ecoplace">
  </a>

  <img alt="Packagist" src="https://img.shields.io/badge/License-MIT-green.svg">
</p>

**<p align="center">The ecological marketplace</p>**

## 🛠️ Technologies
- [Node.js](https://nodejs.org)
- [ReactJS](https://reactjs.org)
- [React Native](https://reactnative.dev)
- [Expo](https://expo.io/learn)
- [TypeScript](https://www.typescriptlang.org)

## 📂 Libs/Modules
### 🚪 Server
- [express](https://github.com/expressjs/express) - for server creation.
- [cors](https://github.com/expressjs/cors) - to allow the API to be accessible to the web application.
- [Knex.js](https://github.com/knex/knex) - SQL query builder for Javascript.

### 🌐 Web
- [axios](https://github.com/axios/axios) - make HTTP requests to nodejs API.
- [react-router-dom](https://github.com/ReactTraining/react-router/tree/master/packages/react-router-dom) - create routes and handle it.
- [react-icons](https://github.com/react-icons/react-icons) - to add icons.
- [leaflet](https://leafletjs.com) - a JavaScript library for interactive maps.
- [react-leaflet](https://react-leaflet.js.org) - React components for Leaflet maps.


### 📱 Mobile
- [@react-navigation](https://reactnavigation.org/docs/getting-started) - create routes and handle it.
- [@react-navigation/stack](https://reactnavigation.org/docs/hello-react-navigation) - a way for the app to transition between screens.
- [react-native-maps](https://docs.expo.io/versions/latest/sdk/map-view/) - to use map.
- [react-native-svg](https://github.com/react-native-community/react-native-svg) - for SVG icons.
- [expo-mail-composer](https://docs.expo.io/versions/latest/sdk/mail-composer/) - allows us to compose and send email quickly and easily using the OS UI.
- [expo-location](https://docs.expo.io/versions/latest/sdk/location/) - allows reading geolocation information from the device.
- @expo/vector-icons (installed by default) - to add icons.
- [axios](https://github.com/axios/axios) - make HTTP requests to nodejs API.

## 💻 About the application
**Ecoplace** is a web and mobile app to register and search for a waste collection point, such as light bulbs, organic and electronic waste, paper, cardboard and cooking oil.

### 🚪 Server
The server is an API Restful; you must run it to use the web and mobile app.

### 🌐 Web app
The web app is for registering a waste collection point.

#### Home Page
Here is the **Home Page**; click the button to register your waste collection point.

![image](https://user-images.githubusercontent.com/41703972/85443946-347c2980-b568-11ea-9d62-554313ece188.png)

#### Registration Page
Here is the **Registration Page**; fill in the fields to get your waste collection point registered and ready to be found.

<div style="display: flex; justify-content: space-between">
  <img src="https://user-images.githubusercontent.com/41703972/85444907-34c8f480-b569-11ea-8b0f-93352145f828.png" width="200">

  <img src="https://user-images.githubusercontent.com/41703972/85445362-ad2fb580-b569-11ea-8077-08f1c9ae37ec.png" width="200">

  <img src="https://user-images.githubusercontent.com/41703972/85445611-f2ec7e00-b569-11ea-9772-e00ca09b02a5.png" width="200">
</div>

### 📱 Mobile app
The mobile app is where you can find the waste collection point. You can contact the owner's waste collection point via email and whatsapp for more details.

#### Home
Here is the **Home Screen**; fill in the fields with your state and city to check out the available waste collection point near you.

<img src="https://user-images.githubusercontent.com/41703972/85446939-6f339100-b56b-11ea-87e5-4d0f1a5050ca.jpg" width="200">

#### Points
Here is the **Points Screen**; select the kind of residue you would like so you can see the available waste collection point near you.

<img src="https://user-images.githubusercontent.com/41703972/85446942-7064be00-b56b-11ea-99bd-8f7d4892315f.jpg" width="200">

#### Detail
Here is the **Detail Screen**; here you can see more about the waste collection point and send a whatsapp message or email it.

<img src="https://user-images.githubusercontent.com/41703972/85446937-6d69cd80-b56b-11ea-8c77-f817943880ba.jpg" width="200">

## 🚀 Get started
### ⚠️ Requirements
- [Node.js](https://nodejs.org)
- [Expo](https://expo.io/learn)

### 🧭 Cloning, installing and some configs
1. At first, clone the repo by running `git clone https://github.com/ribeiromatheus/ecoplace.git` or `hub clone ribeiromatheus/ecoplace` - if you have [hub](https://hub.github.com/) installed on your machine - on your favorite terminal.
2. After cloning run `yarn` or `npm install` on **server**, **web** and **mobile** folder.
3. After that, go to **server** folder and rename `sample.env` file to `.env`, then enter your own credentials.
4. Next, go to `mobile/src` folder and create a folder named **credentials**, then create a json file named **baseUrl** so you can add your **ip address** followed by **server port** or your **server url** only.

```json
{
    "ip": "http://<ip goes here>:<port goes here>"
}
```

### 🎲 Running the server (API) 
```powershell
# run with yarn
cd ecoplace/server
yarn dev

# run with npm
npm run dev
```

### 🎲 Running the Web app
```powershell
# run with yarn
cd ecoplace/web
yarn start

# run with npm
npm run start
```

### 🎲 Running the Mobile app
```powershell
# run with yarn
cd ecoplace/mobile
yarn start

# run with npm
npm run start
```

## 📝 License
This project is under the MIT license. See the [LICENSE](https://github.com/ribeiromatheus/ecoplace/blob/master/LICENSE) file for more details.