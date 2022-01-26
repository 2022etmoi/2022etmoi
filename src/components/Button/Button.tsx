import "./Button.scss";

import { ReactNode } from "react";

interface ButtonProps {
    /** The button type */
    type?: "primary" | "secondary" | "transparent",
    /** The callback to call when clicked */
    onClick?: () => void
    /** The button content */
    children: ReactNode
    /** The css class to inject */
    className?: string
}

export function Button ({ type = "primary", onClick, children, className }: ButtonProps) {
    return (
        <button onClick={onClick} className={`button${(type === "secondary" ? " button--secondary" :"")}${(type === "transparent" ? " button--transparent" :"")}${className? " "+className :""}`}>
            {children}
        </button>
    );
}
