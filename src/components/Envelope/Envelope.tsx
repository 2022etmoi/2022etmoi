import "./Envelope.scss";

import { UserAnswer } from "../../types";
import { PropositionButton } from "../PropositionButton";

export function Envelope () {
    return (
        <div className="envelope">
            <PropositionButton userAnswer={UserAnswer.MUST}  />
            <PropositionButton userAnswer={UserAnswer.MUST_NOT}  />
            <PropositionButton userAnswer={UserAnswer.NO}  />
            <PropositionButton userAnswer={UserAnswer.YES}  />
            <div className="envelope-card"></div>
        </div>
    );
}
