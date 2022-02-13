import "./Envelope.scss";

import { useCallback,useEffect, useState } from "react";

import { UserAnswer } from "../../types";
import { PropositionButton } from "../PropositionButton";

export function Envelope () {
    const [userAnswers, setUserAnswers] = useState<JSX.Element[]>([]);

    const randomUserAnswer = useCallback((key)=> {
        const list = [UserAnswer.MUST_NOT, UserAnswer.NO, UserAnswer.YES, UserAnswer.MUST];
        const userAnswer = list[Math.floor(Math.random() * list.length)];
        return <PropositionButton key={key} userAnswer={userAnswer}  />;
    }, []);

    const generateAnswers = useCallback(()=> {
        const cards = [];
        for (let count = 0; count < 12; count ++) {
            cards.push(randomUserAnswer(count));
        }
        setUserAnswers([]);
        setUserAnswers(cards);
    }, [randomUserAnswer]);

    useEffect(() => generateAnswers(), []);

    useEffect(()=> {
        const interval = setInterval(generateAnswers, (12 * 0.2 + 0.8)* 1000);
        return () => clearInterval(interval);
    }, [generateAnswers, randomUserAnswer, userAnswers, userAnswers.length]);

    return (
        <div className="envelope">
            {
                userAnswers
            }
            <div className="envelope-card"></div>
        </div>
    );
}
