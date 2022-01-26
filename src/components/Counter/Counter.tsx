import "./Counter.scss";

interface CounterProps {
    /** The current counter value */
    current: number | string
    /** The maximum counter value */
    max: number | string
}

export function Counter({ current, max }: CounterProps) {
    return (
        <span className="counter">
            <span className="counter__current">{current}</span>&nbsp;/&nbsp;{max}
        </span>
    );
}
