<p align="center">
  <a href="http://reactjs.org">
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/768px-React-icon.svg.png" alt="Logo" width="100" height="100">
  </a>

  <h3 align="center">React Tic-Tac-Toe</h3>

  <p align="center">
    Game implementation on React Hooks.
    <br />
    <a target="_blank" href="http://tchat.space/">Live Demo</a>
  </p>
</p>


<!-- ABOUT THE PROJECT -->
## About The Project
This project built for improve vue and cloud skills.
* Routing with Vue-Router and state management on Vuex.
* Users are stored in <a href="https://firebase.google.com/docs/database/" target="_blank">Firebase Realtime Db</a>. To remember the users kept the information in cookie with <a href="https://github.com/brix/crypto-js" target="_blank">crypted</a> data.
* Messages are delivered with RabbitMQ (dockerize and runnig on ec2), connection with <a href="https://github.com/eclipse/paho.mqtt.javascript" target="_blank">Paho-MQTT</a> framework.
* Auto translate with <a href="https://tech.yandex.com/translate/" target="_blank">Yandex Translate API</a> between selected language on user login.
* <a href="http://tchat.space/" target="_blank">Live demo</a> on AWS S3 bucket. Used vue-cli <a href="https://github.com/multiplegeorges/vue-cli-plugin-s3-deploy" target="_blank">s3 deploy plugin</a> for production.





### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

