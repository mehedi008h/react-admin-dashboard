import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { DarkModeContextProvider } from "./contex/darkModeContext";
import { AuthContextProvider } from "./contex/AuthContext";

ReactDOM.render(
    <React.StrictMode>
        <DarkModeContextProvider>
            <AuthContextProvider>
                <App />
            </AuthContextProvider>
        </DarkModeContextProvider>
    </React.StrictMode>,
    document.getElementById("root")
);

reportWebVitals();
