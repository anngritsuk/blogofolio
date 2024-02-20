import React from "react";
import ReactDOM from "react-dom/client";

import { App } from "./components/App";
import Header from "./components/Header";
import Footer from "./components/Footer";
import RegistrationForm from "./components/RegistrationForm";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Header />
    <App />
    <RegistrationForm />
    <Footer />
  </React.StrictMode>
);
