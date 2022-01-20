import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.scss";
import { Landing, Layout, NotFound, Preferences, Propositions, Scores } from "./routes";

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/app/" element={<Layout />}>
                    <Route path="preferences" element={<Preferences />} />
                    <Route path="propositions" element={<Propositions />} />
                    <Route path="scores" element={<Scores />} />
                </Route>
                <Route path="/*" element={<NotFound/>} />
            </Routes>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById("root")
);
