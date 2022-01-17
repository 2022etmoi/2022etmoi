import "./Sidebar.scss";

import { useMemo } from "react";
import { SidebarLink } from "../../types";

interface SidebarProps {
    /** Links shown in the Sidebar */
    links: SidebarLink[]
}
export function Sidebar({links}: SidebarProps) {
    const menuItems = useMemo(() => links.map((link, i) => (
        <li className="sidebar__link" key={i}>
            <img src={`images/${link.icon}`}/>
            {link.name}
        </li>
    )), []);
    return(
        <nav className="sidebar">
            <ul>
                {menuItems}
            </ul>
        </nav>
    );
}
