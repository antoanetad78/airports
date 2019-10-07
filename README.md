This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
It should create s simplified map, representing an airport runways, using certain format of data.

## To view:

Locate build/index.html and double click. It should show in the browser with the Chicago airport map as initial.

## To run in production :

- download the repo
- yarn install
- yarn start

It does:

1. Upon changing the data in the texteare field, attemts to read the data and use it to buid a map. If the provided data has the same properties as the sample it should render a map, similar to the initial one.

### General:

The app uses Redux to keep the global state separate and easily accessible by every component that needs to access it.

### Components:

## App :

The main component. It renders two child components - TextareaForm and CanvasContainer

## TextareaForm:

- Is connected to the Redux store.
- Is responsible for rendering the textarea field with its initial value and reading the data from it. Clearing of the <textarea> removes the currently displayed map and, provides an easy way to paste new set of data or change some value in the existing one.
- Works with a single set of data.
- Extracts the RWY, NAME and MAGNETICVARIATION properties from the airport object and passes them to the respective functions to be dispathed to the store.
  -- getData - takes the textarea value, extracts the RWY property only, then filters to leave only the full runways. Passes the new list to pairs()
  -- pairs - takes the list of full runways and redices it to a list of pairs of runways. It matches the names (by number and letter).
  -- loadRunwayList: the action that dispatches the list of runway pairs to the Redux store. It is placed in an Effect hook and runs every time the data in the textarea field changes.
  -- airportDataAll - extracts the NAME and MAGNETICVARIATION properties from the textarea value. The NAME is not used, MAGNETICVARIATION helps to adjust the drawing's angle. The returned value is passed to an action getAirportData:
  -- getAirportData - the action that sends the airport object {NAME, MAGNETICVARIATION} to the Redux store.

## CanvasContainer:

- Connected to the Store, takes the list of runways and the airport.MAGNETICVARIATION properties. It uses a set of helper functions to calculate and add x,y coordinates to each runway object and the angle correction for the drawing.
- Renders the Drawing component and passes it the runways list and the angle of the drawing as props.
- The x,y coordinates are calculated as the distance between a reference point and the beginning of each runway.
- The reference point's coordinates are calculated by adding 2 geographical seconds to the western-most and northern-most runway coordinate.

## Drawing :

- A stateless components, takes a list of runways and an number as angle correction.
- Creates one <svg> element and fills it with <rect> and <text> elements. Proportions are kept on resize.
- Maps through the list and for each element renders a rectangle with width = runway's length, height = runway's width, both divided by 10 for saving space, rotated using the angle of the runway, corrected with the correction angle and takes into account the svg rotation directions.
- x,y coordinates for the <rect> elements are runway's x,y coordinates\*100. This is enough space for this width and height but will require adjustment if the <rect>s should be rendered bigger.
- Pairs of names of the runways are displayed at the beginning of each <rect>

## Available Scripts

In the project directory, you can run:

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

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
