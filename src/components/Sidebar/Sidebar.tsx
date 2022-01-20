import "./Sidebar.scss";
import { useCallback, useMemo, useState } from "react";
import { SidebarLink } from "../../types";

interface SidebarProps {
    /** Links shown in the Sidebar */
    links: SidebarLink[]
}

/**
 * A component to display the Sidebar.
 * @param links. The list of links to render.
 */
export function Sidebar({ links }: SidebarProps) {
    const menuItems = useMemo(() => links.map((link, i) => (
        <li className="sidebar__link" key={i}>
            <img src={`images/${link.icon}`}/>
            {link.name}
        </li>
    )), []);

    const [opened, setOpened] = useState(true);
    const toggleOpened = useCallback(()=> setOpened(! opened), [opened]);

    return (
        <nav className={"sidebar" + (opened ? " sidebar--opened" : "") }>
            <div className="sidebar__toggle" onClick={toggleOpened}>TOGGLE</div>
            <ul>
                {menuItems}
            </ul>
        </nav>
    );
}
