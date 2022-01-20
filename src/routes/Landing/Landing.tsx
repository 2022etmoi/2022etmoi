import "./Landing.scss";

import { Navigation } from "../../components";

interface LandingProps {

}

export function Landing ({}: LandingProps) {
    return (
        <div className="route-landing">
            <Navigation />
            <h1>Landing</h1>
        </div>
    );
}
