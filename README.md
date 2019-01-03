# Documentation
This project is a boiler plate react app ready to be used for any react app projects.

## How to install?
`npm install`

## How to Start?
`npm start`

## Where does it start?
[https://localhost:9000/](https://localhost:9000/)


### Modules used:
- Babel7
- Webpack4
- React16

### TODO::
 To add more documentation...

Tasks to be closed today:
How to run the bundle ? -> Anand
Understand Minification and inject that...
Concept of Loaders -> babel?webpack?
babel -> api docs
React View -> Handler -> Action -> Reducer -> Store -> React View ...
redux snippets
    Entity: {key:value}
    EntityList: [Entity]
Redux
ReduxThunk:
    React View -> Handler -> Action -> Middleware -> Dispatcher -> Reducer -> Store -> React View ...
redux Promise
    React View -> Handler -> Action -> Middleware -> Dispatcher -> Reducer -> Store -> React View ...

use babel-node for npm run build??


Learning/Notes:
`webpack-dev-server --mode development  --config webpack.config.dev.js --hot` has a dependency on the contents of the `dist` folder. Hence, make sure the contents are there or if you are running it for first time, make sure you run `npm run build` before you run `npm start`.
Use `file-loader` for loading images.
Added a plugin for handling class properties:
 1. npm install --save-dev @babel/plugin-proposal-class-properties
 2. Add plugin under babel loader                    
`         options: {
                        plugins:  ['@babel/plugin-proposal-class-properties'],
                        presets:  ['@babel/preset-env', '@babel/preset-react']
                    }`

