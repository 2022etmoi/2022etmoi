import "./Button.scss";

import { ComponentProps, ReactNode } from "react";

interface ButtonProps extends Omit<ComponentProps<"button">, "type"> {
    /** The button type */
    type?: "primary" | "secondary" | "transparent" | "danger",
    /** The callback to call when clicked */
    onClick?: () => void
    /** The button content */
    children: ReactNode
    /** The size of the Button */
    size?: "default" | "small"
}

export function Button ({ type = "primary", onClick, children, className, size, ...buttonProps }: ButtonProps) {
    return (
        <button onClick={onClick} {...buttonProps } className={
            `button${(type === "secondary" ? " button--secondary" :"")}
            ${(type === "transparent" ? " button--transparent" :"")}
            ${(type === "danger" ? " button--danger" :"")}
            ${(size === "small" ? " button--small" :"")}
            ${className? " "+className :""}`
        }>
            {children}
        </button>
    );
}
