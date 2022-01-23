import "./Landing.scss";

import { Navigation } from "../../components";

// interface LandingProps {
//
// }

/**
 * A route to display the app landing page.
 */
export function Landing() {
    return (
        <div className="route-landing">
            <Navigation/>
            <h1>Landing</h1>
        </div>
    );
}
