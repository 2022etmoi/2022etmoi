import "./Layout.scss";

import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";

import { Navigation } from "../../components";

/**
 * A route to generate the app layout shared with sub routes.
 */
export function Layout() {
    const history = useLocation();
    useEffect(() => {
        document.getElementById("route")?.scrollTo(0, 0);
    }, [history]);
    return (
        <div className="route-layout">
            <div className="app-wrapper">
                <Navigation/>
                <div className="route" id="route">
                    <Outlet/>
                </div>
            </div>
        </div>
    );
}
