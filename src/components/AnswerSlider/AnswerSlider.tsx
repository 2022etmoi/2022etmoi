import "./AnswerSlider.scss";
import "rc-slider/assets/index.css";

import Slider from "rc-slider";
import { useCallback } from "react";

import { UserAnswer } from "../../types/Answer";

interface AnswerSliderProps {
    /** The callback to call when slider value change */
    onChange: (answer: UserAnswer) => void
}
export function AnswerSlider({
    onChange
}: AnswerSliderProps) {
    const handleChange = useCallback((value)=> {
        switch (value) {
        case - 2 :
            return onChange(UserAnswer.MUST_NOT);
        case - 1 :
            return onChange(UserAnswer.NO);
        case 1 :
            return onChange(UserAnswer.YES);
        case 2 :
            return onChange(UserAnswer.MUST);
        default:
            return onChange(UserAnswer.SKIP);
        }
    }, [onChange, UserAnswer]);
    return (
        <div className='answer-slider'>
            <Slider
                trackStyle={{ backgroundColor: "#4ea4fa" }}
                railStyle={{ backgroundColor: "#4ea4fa" }}
                onChange={handleChange} min={- 2} defaultValue={0} max={2} marks={{ "-2": "Vraiment contre", "-1": "Contre", 0:"", 1: "Pour", 2: "Vraiment pour" }} />
        </div>
    );
}
