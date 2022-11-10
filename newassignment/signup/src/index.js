import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from "react-redux";
// import Navigation from './Navigation';
import Navigation from './Navigation';
import store from "./store";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <Navigation />
    </Provider>
  </React.StrictMode>
);