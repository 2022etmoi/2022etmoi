import "./Icon.scss";

import { useMemo } from "react";

import { ReactComponent as IconCandidates } from "./icons/candidates.svg";
import { ReactComponent as IconLogo } from "./icons/logo.svg";
import { ReactComponent as IconNeutral } from "./icons/neutral.svg";
import { ReactComponent as IconNo } from "./icons/no.svg";
import { ReactComponent as IconOptions } from "./icons/options.svg";
import { ReactComponent as IconPropositions } from "./icons/propositions.svg";
import { ReactComponent as IconQuestions } from "./icons/questions.svg";
import { ReactComponent as IconTable } from "./icons/table.svg";
import { ReactComponent as IconYes } from "./icons/yes.svg";

export interface IconProps {
    /** The icon name to use from /src/components/Icon/icons/*.svg */
    file: "logo" | "candidates" | "options" | "propositions" | "questions" | "table" | "yes" | "no" | "neutral";
}

export function Icon({ file }: IconProps) {
    const icon = useMemo(() => {
        switch (file) {
        case "logo":
            return <IconLogo/>;
        case "candidates":
            return <IconCandidates/>;
        case "options":
            return <IconOptions/>;
        case "propositions":
            return <IconPropositions/>;
        case "questions":
            return <IconQuestions/>;
        case "table":
            return <IconTable/>;
        case "yes":
            return <IconYes/>;
        case "no":
            return <IconNo/>;
        case "neutral":
            return <IconNeutral/>;
        default:
            return null;
        }
    }, [file]);

    return (
        <div className="icon">
            { icon }
        </div>
    );
}
