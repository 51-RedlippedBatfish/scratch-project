import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./pages/App/App.jsx"

import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./pages/App/App.jsx"
import { Provider } from 'react-redux'
import store from './store.js'

const el = document.getElementById("root");
const root = createRoot(el);

root.render(
  <BrowserRouter>
    <Routes>
      <Provider store={store}>
        <Route path="/" element={<App />} />
      </Provider>
    </Routes>
  </BrowserRouter>
)
