import "./Scores.scss";
import {CandidateID} from "../../types";
import {CandidateScore} from "../../components";

// interface ScoresProps {
//
// }

export function Scores () {
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
