import "./Navigation.scss";

import { useCallback } from "react";
import { Link, useLocation } from "react-router-dom";

import { Icon } from "../";
import { IconProps } from "../Icon";

export function Navigation (){
    const { pathname } = useLocation();
    const links : {to: string, icon: IconProps["file"], label: string}[] = [
        { to: "/", icon: "logo", label: "" },
        { to: "/app", icon: "propositions", label: "Propositions" },
        { to: "/app/scores", icon: "candidates", label: "Scores" },
        { to: "/app/table", icon: "table", label: "Synthèse" },
        { to: "/app/options", icon: "options", label: "Options" },
    ];

    const isActive = useCallback(path => pathname === path, [pathname]);
    return (
        <nav className="nav">
            <div className="nav__wrapper">
                {
                    links.map(link => (
                        <Link key={link.label} className={`nav__link ${isActive(link.to) ? "nav__link--active" : ""}`}
                            to={link.to}>
                            <Icon file={link.icon}/>
                            <span>{link.label}</span>
                        </Link>
                    ))
                }
            </div>
        </nav>
    );
}
