import React from 'react';
import { createRoot } from 'react-dom/client';
import App from '../src/partials/Components/App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store, persistor } from './redux/configStore';
import { PersistGate } from 'redux-persist/integration/react';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

const basename =
  process.env.NODE_ENV === 'production' ? '/money-guard-team3' : '';

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter basename={basename}>
          <App />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
