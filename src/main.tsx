import "./styles/index.scss";

import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Landing, Layout, NotFound, Operation, Options, Propositions, Scores, Table } from "./routes";

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/fonctionnement" element={<Operation />} />
                <Route path="/app/" element={<Layout />}>
                    <Route index element={<Propositions />} />
                    <Route path="scores" element={<Scores/>}/>
                    <Route path="table" element={<Table/>}/>
                    <Route path="options" element={<Options />} />
                </Route>
                <Route path="/*" element={<NotFound/>} />
            </Routes>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById("root")
);
