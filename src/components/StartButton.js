import './StartButton.css';

function StartButton() {
    return (
        <div className='flagButton'>
            <button><div className='text'>start quiz</div></button>
            <button><div className='text'>start test quiz</div></button>
            <button><div className='text'>read theory</div></button>
            <button><div className='text'>about quiz</div></button>
        </div>
    )

}

export default StartButton;