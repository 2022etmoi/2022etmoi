import "./Layout.scss";

import { Outlet } from "react-router-dom";

import { Navigation } from "../../components";

export function Layout () {
    return (
        <div className="route-layout">
            <Navigation />
            Layout
            <Outlet />
        </div>
    );
}
