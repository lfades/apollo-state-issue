This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Getting Started

In the project directory, run:

### `yarn start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>

## Issues

- The GraphQL query to the local store returns an `error`, `<Query />` receives the error and renders its children again, but immediately after it runs again with `error` as `undefined`.
- Apollo Devtools doesn't show the local schema but an infinite loader spinner instead.
