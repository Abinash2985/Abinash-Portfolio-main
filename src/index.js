import 'core-js/stable';
import 'regenerator-runtime/runtime';
import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

const App = lazy(() => import("./App"));

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <link rel="preconnect" href="https://example.com" />
    <Suspense fallback={<div>Loading...</div>}>
      <App />
    </Suspense>
  </React.StrictMode>
);

reportWebVitals();
