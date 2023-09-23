SCRIPTS -  "scripts": {
    "test": "npm run test",
    
    "start:frontend": "webpack --watch --mode development", // This command will only watch for the webpack to be rebuilt due to changes in the code and then you will be able to see the changes on the backend in realtime, however there will be no webpack dev server to load up and see frontend changes in realtime (keep in mind for this you need to do a hard reset to see backend changes) //

    "start:frontend": "webpack serve --mode development --open", // This command will only start up a webpack dev server and you will have live changes for frontend but the backend you will have to rebuild the webpack everytime you want to see changes. //

    "start:backend": "nodemon --exec ts-node server.ts",
    "prestart": "npm run build", // added this in so every time you run start the webpack will manually build and you will be able to do a hard reset to see backend changes versus running a seperate command every time. //

    "start": "concurrently \"npm run start:frontend\" \"npm run start:backend\"", // This runs both at once using the npm method concurrently. //

    "build": "webpack --mode production"
  },