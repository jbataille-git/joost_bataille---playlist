import React from "react";
import ReactDOM from "react-dom";
import "./reset.css";
import "./style.css";
import App from "./App.js";

import { createStore } from "redux";
import allReducers from "./reducers/index.js"; // webPack kan zonder /index.js maar ik zet het er toch evn bij
import { Provider} from "react-redux"

// STORE, GLOBALIZED STORE
const store = createStore(
  allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// display on the console
// store.subscribe(() => console.log(store.getState()));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);


