import './PageQuiz.css';
import TimePageQuiz from '../TimePageQuiz/TimePageQuiz';
import './QuestionBd.js';

function PageQuiz() {
    
    return (
        <div className='questionBox'>
            <TimePageQuiz></TimePageQuiz>
            <div className='ask'>ask</div>
            <div className='answerBox'>
                <div>answer</div>
                <div>answer</div>
                <div>answer</div>
                <div>answer</div>
                <div>answer</div> 
            </div>
            <div><button className='nextQuestionButton'>далее</button></div>
        </div>
    )

}

export default PageQuiz;