import "./Navigation.scss";

import { Link } from "react-router-dom";

export function Navigation (){
    return (
        <nav className="nav">
            <Link to="/">Landing</Link>
            <Link to="/app/propositions">Propositions</Link>
            <Link to="/app/scores">Scores</Link>
            <Link to="/app/options">Options</Link>
        </nav>
    );
}
