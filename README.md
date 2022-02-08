# Frontend
This will be an interface for user to provide inputs, get results. Frontend can interact with API gateway and can not access the functionality of other micro services without authentication. Frontend will accept user input and will pass it to API-gateway in JSON format. Based on user instruction and gateway responses, UI will reflect the changes.

### Framework/Library used
- ReactJS
- NodeJS

### Environment setup

Steps to follow: 
1. Install NodeJS
	 To download the latest version of npm, on the command line, run the following command 
	 > npm install -g npm
	 
2. Install Create-React-App
	 Execute command below to install create react app 
	 > npm install -g create-react-app

3. Create new project
	 Execute command below to create create-react-app 
	 > npx create-react-app <project-name>

4. Run project
	 Execute below command to start react app
	 >npm start



### Interactions from/to frontend: 
1. POST /signup:
	 Send user details to api gateway, based on the response display success if registered failure message if encountered any error 
2. POST /login:
	 Send user credential to api gateway, get authentication and navigate to profile id status is authorized
3. POST /plotting:
	 Send date, time, radar station to API gateway, expected response is link to the storage where output image is stored.  Open the link in new window.  	
4. POST /logging:
	
	 On clicking get history, send token and userId to API gateway, in response get the logs(past user activity). 
    
  
### Steps to start application: 
Create application < npx create-react-app my-app >
Go into the application folder <cd my-app>
Start application <npm start>

### LINKS AND REFERENCES
https://reactjs.org/docs/create-a-new-react-app.html
	
https://react-bootstrap.github.io/ 
	
https://youtube.com/c/Codevolution 
	

  
# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
