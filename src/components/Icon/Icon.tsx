import "./Icon.scss";

interface IconProps {
    /** The icon name to use from /public/images/*.svg */
    file: string
}

export function Icon ({ file }: IconProps) {
    return (
        <div className="icon">
            <img src={`/images/${file}.svg`}/>
        </div>
    );
}
