Build status 
AzurePipelinesCI [![Build Status](https://dev.azure.com/nithinmohantk-ghub/react-cosmos-db-js-sdk-sample/_apis/build/status/JSContrib.react-cosmos-db-js-sdk-sample)](https://dev.azure.com/nithinmohantk-ghub/react-cosmos-db-js-sdk-sample/_build/latest?definitionId=1)

TravisCI [![Build Status](https://travis-ci.org/JSContrib/react-cosmos-db-js-sdk-sample.svg?branch=master)](https://travis-ci.org/JSContrib/react-cosmos-db-js-sdk-sample)

# React Cosmos DB JS SDK 2.0 Sample

This is a sample built to showcase the use of latest Cosmos DB Javascript SDK v2.0 . We will be using a simple react application with static page serving using [serve] npm module. 

### Install Cosmos DB JS SDK 2.0
```
npm install @azure/cosmos
```

### Build the application 

Open the VisualStudio Code Terminal 
```
npm run build
```

### Debug the application 
The build folder is ready to be deployed.
You may serve it with a static server:
```
npm install -g serve
serve -s build
```

### Launch the Browser and Open the following URL in your Browser 
```
Serving!                                    │
   │                                               │
   │   - Local:            http://localhost:5000   │
   │   - On Your Network:  http://10.0.75.1:5000 
```
