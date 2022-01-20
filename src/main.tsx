import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.scss";
import { Landing, Layout, NotFound, Options, Propositions, Scores } from "./routes";

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/app/" element={<Layout />}>
                    <Route path="options" element={<Options />} />
                    <Route path="propositions" element={<Propositions />} />
                    <Route path="scores" element={<Scores />} />
                </Route>
                <Route path="/*" element={<NotFound/>} />
            </Routes>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById("root")
);
