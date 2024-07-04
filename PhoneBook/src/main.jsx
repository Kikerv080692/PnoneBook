import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { persistor, store } from "./redux/store.js";
import App from "./App.jsx";
import "./index.css";
import { PersistGate } from "redux-persist/integration/react";
import { ThemeProvider } from "styled-components";
import { theme } from "./utils/theme.js";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <App />
          </PersistGate>
        </Provider>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
