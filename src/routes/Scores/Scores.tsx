import "./Scores.scss";

import { CandidateScore } from "../../components";
import { CandidateID } from "../../types";

// interface ScoresProps {
//
// }

/**
 * A route to display scores.
 */
export function Scores() {
    return (
        <div className="route-scores">
            {
                (Object.keys(CandidateID) as Array<keyof typeof CandidateID>).map((id) => (
                    <CandidateScore candidateID={id} key={id}/>
                ))
            }
        </div>
    );
}
