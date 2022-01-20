import { Outlet } from "react-router-dom";
import "./Layout.scss";

export function Layout () {
    return (
        <div className="route-layout">
            Layout
            <Outlet />
        </div>
    );
}
