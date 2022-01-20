import { Outlet } from "react-router-dom";
import { Navigation } from "../../components";
import "./Layout.scss";

export function Layout () {
    return (
        <div className="route-layout">
            <Navigation />
            Layout
            <Outlet />
        </div>
    );
}
