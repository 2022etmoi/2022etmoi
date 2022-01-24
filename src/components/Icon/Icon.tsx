import "./Icon.scss";

import { ReactComponent as IconCandidates }  from "./icons/candidates.svg";
import { ReactComponent as IconLogo }  from "./icons/logo.svg";
import { ReactComponent as IconOptions }  from "./icons/options.svg";
import { ReactComponent as IconPropositions }  from "./icons/propositions.svg";
import { ReactComponent as IconScores }  from "./icons/scores.svg";

const Icons = {
    logo: <IconLogo />,
    candidates: <IconCandidates />,
    options: <IconOptions />,
    propositions: <IconPropositions />,
    scores: <IconScores />
};

interface IconProps {
    /** The icon name to use from /public/images/*.svg */
    file: "logo" | "candidates" | "options" | "propositions" | "scores";
}

export function Icon ({ file }: IconProps) {
    return (
        <div className="icon">
            {Icons[file]}
        </div>
    );
}
