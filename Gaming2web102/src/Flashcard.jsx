import { useState } from 'react';

function Flashcard({card}){
    const [showAnswer, setShowAnswer] = useState(false);
    function toggleAnswer(){
        setShowAnswer(!showAnswer);
    }
    return (<div className = "Flashcard" onClick={toggleAnswer}>
        {showAnswer ? card.answer: card.question}
    </div>
);

}
export default Flashcard;