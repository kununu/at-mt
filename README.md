This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm run start`

Starts up the server on port 3001 in prod mode.

### `npm run dev`

Starts up the server on port 3001 in dev mode (using nodemon).


### `npm run start:app`

Starts up the react app on port 3000

### `npm run build`

Builds the frontend part for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

Also, it will copy the build into root folder in order to make it ready for deployment


### `npm run deploy`

This will push the code to heroku master.
For this you need to have heroku account connected.
If you want to deploy whole application then run deploy:full

### `npm run deploy:full`

This will create production build of application, and deploy everything to heroku.

### `npm run test`

To run tests for backend part

### `npm run logs`

To follow logs from heroku.
