import React from "react";
import { createRoot } from "react-dom/client";
import App from "./partials/Components/App";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store, persistor} from "./redux/configStore";
import { PersistGate } from "redux-persist/integration/react";

const rootElement = document.getElementById('root');

const root = createRoot(rootElement);
const basename = process.env.NODE_ENV === 'production' ? 'money-guard-team3' : '';

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
