import "./Button.scss";

import { ReactNode } from "react";

interface ButtonProps {
    /** The button type */
    type?: "primary" | "secondary" | "transparent",
    /** The callback to call when clicked */
    onClick?: () => void
    /** The button content */
    children: ReactNode
}

export function Button ({ type = "primary", onClick, children }: ButtonProps) {
    return (
        <button onClick={onClick} className={"button" + (type === "secondary" ? " button--secondary" :"")+ (type === "transparent" ? " button--transparent" :"")}>
            {children}
        </button>
    );
}
