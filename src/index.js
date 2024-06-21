import React from "react";
import { createRoot } from "react-dom/client";
import App from "./partials/Components/App";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store, persistor} from "./redux/configStore";
import { PersistGate } from "redux-persist/integration/react";

const rootElement = document.getElementById('root');

const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
    <BrowserRouter basename="money-guard-team3">
      <App />
    </BrowserRouter>
  </PersistGate>
  </Provider>
  </React.StrictMode>
);
