# Basic Webpack configuration for my projects

Just download it => install npm pakages => GO!

```bash
npm init
#will guide you throgh settins (chamge it manualy later)
npm install
```

!!! Dont forget to change name of the project in package.json  and webpack.common.js
```javascript
plugins: [
        new HtmlWebpackPlugin({
            title: 'My App', // Your App name here
        }),
    ],
```

## Start 
Will run the project in developmemt mode on localhost

```bash
npm run start
```

## Build 
Will run the production mode and put everything in ./dist folder (ready to publish project)

```bash
npm run build
```

### Loaders

[LESS] This project config is equiped with Less(Css) loader, so you can just set main.less frile in your ./src folder and import all compoents to it
Please import it in index.js to load to the page

[images] All images will be loaded to /dist folder on production mode. You need to import them to appropriate .js files to use as varioables

EX
```javascript
import Icon from './images/icon.png'

function App(){
    return <img src={Icon} />
}
```
works for .png .svg .jpeg .jpg and .gif




