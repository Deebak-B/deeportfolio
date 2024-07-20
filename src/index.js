import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import { Router, Routes, Route } from "react-router-dom";
import Header from "./components/header";
import About from "./components/About";
import Interests from "./components/Interests";
// Routes
// import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
  // <Router>
  //   <div>
  //     <Routes>
  //       <Header />
  //       <Route path="/" element={<App />} />
  //       {/* About */}
  //       <Route path="/about" element={<About />} />
  //       {/* Portfolio */}
  //       <Route path="/portfolio" element={<Interests />} />
  //     </Routes>
  //   </div>
  // </Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
