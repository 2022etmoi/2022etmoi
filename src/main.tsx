import "./styles/index.scss";

import React from "react";
import * as ReactDOMClient from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { FAQ, Landing, Layout, NotFound, Options, Propositions, Scores, Table } from "./routes";

const container = document.getElementById("root");
const root = ReactDOMClient.createRoot(container as HTMLElement);
if (window.matchMedia("(display-mode: standalone)").matches) {
    container?.classList.add("pwa");
}
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Landing/>}/>
                <Route path="/app/" element={<Layout/>}>
                    <Route index element={<Propositions/>}/>
                    <Route path="scores" element={<Scores/>}/>
                    <Route path="table" element={<Table/>}/>
                    <Route path="faq" element={<FAQ/>}/>
                    <Route path="options" element={<Options/>}/>
                </Route>
                <Route path="/*" element={<NotFound/>}/>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);
