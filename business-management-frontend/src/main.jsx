import React from 'react';
import ReactDOM from 'react-dom/client'; // React 18+ uses the `createRoot` API for rendering
import './index.css'; // Assuming you have styles in this file
import App from './App'; // Your main App component
import { Provider } from 'react-redux'; // To provide the Redux store to your app
import store from './redux/store'; // Import your Redux store

// Use `createRoot` for rendering in React 18+
const root = ReactDOM.createRoot(document.getElementById('root'));

// Rendering the app with the Redux store provider
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
