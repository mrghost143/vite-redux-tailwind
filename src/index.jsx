import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss'; // Import Tailwind CSS here
import { App } from '@app';
import { Provider } from 'react-redux';
import store from '@config/store';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
);
