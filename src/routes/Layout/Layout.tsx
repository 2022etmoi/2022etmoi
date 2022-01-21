import "./Layout.scss";

import { Outlet } from "react-router-dom";

import { Navigation } from "../../components";

/**
 * A route to generate the app layout shared with sub routes.
 */
export function Layout () {
    return (
        <div className="route-layout">
            <Navigation />
            <Outlet />
        </div>
    );
}
