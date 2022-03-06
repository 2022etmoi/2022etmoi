import "./Icon.scss";

import { useMemo } from "react";

import { ReactComponent as IconCandidates } from "./icons/candidates.svg";
import { ReactComponent as IconLogo } from "./icons/logo.svg";
import { ReactComponent as IconOptions } from "./icons/options.svg";
import { ReactComponent as IconPropositions } from "./icons/propositions.svg";
import { ReactComponent as IconTable } from "./icons/table.svg";

export interface IconProps {
    /** The icon name to use from /src/components/Icon/icons/*.svg */
    file: "logo" | "candidates" | "options" | "propositions" | "scores" | "table";
}

export function Icon({ file }: IconProps) {
    const icon = useMemo(() => {
        switch (file) {
        case "logo":
            return <IconLogo/>;
        case "candidates": return <IconCandidates />;
        case "options": return <IconOptions />;
        case "propositions": return <IconPropositions />;
        case "table": return <IconTable />;
        default: return null;
        }
    }, [file]);

    return (
        <div className="icon">
            { icon }
        </div>
    );
}
