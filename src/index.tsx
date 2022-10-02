import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";

import { configureAdminStore } from "./app/store";
import reportWebVitals from "./reportWebVitals";
import App from "./App";

import "./index.css";

const container = document.getElementById("root")!;
const root = createRoot(container);

root.render(
  <Provider store={configureAdminStore()}>
    <App />
  </Provider>
);

reportWebVitals();
