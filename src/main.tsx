import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter } from "react-router-dom";
import { I18nProvider } from "./i18n";
import App from "./App";
import "./index.css";
createRoot(document.getElementById("root")!).render(<StrictMode><HelmetProvider><BrowserRouter><I18nProvider><App /></I18nProvider></BrowserRouter></HelmetProvider></StrictMode>);
