import "./Navigation.scss";

import { useCallback } from "react";
import { Link, useLocation } from "react-router-dom";

import { Icon } from "../";

export function Navigation (){
    const { pathname } = useLocation();
    const links = [
        {
            to: "/", icon:"logo", label: "" },
        {
            to: "/app/propositions", icon:"propositions", label: "Propositions" },
        {
            to: "/app/scores", icon:"scores", label: "Scores" },
        {
            to: "/app/scores", icon:"candidates", label: "Candidats" },
        {
            to: "/app/options", icon:"options", label: "Options" }
    ];

    const isActive = useCallback(path => pathname === path, [pathname]);
    return (
        <nav className="nav">
            {
                links.map(link => (
                    <Link key={link.label} className={`nav__link ${isActive(link.to) ? "nav__link--active" : ""}`} to={link.to}>
                        <Icon file={link.icon} />
                        <span>{link.label}</span>
                    </Link>
                ))
            }
        </nav>
    );
}
