import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./styles/index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"))
     .render(
          <StrictMode>
               <BrowserRouter>
                    <Routes>
                         <Route path = "/" element = {<App />} />
                    </Routes>
               </BrowserRouter>
          </StrictMode>
     );