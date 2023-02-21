import StartButton from "./components/StartButton";
import PageQuiz from "./PageQuiz/PageQuiz";
import './App.css'

function App() {
  return (
    <div>
      <div className="headerName">
        <h1>PROBABILITY THEORY QUIZ</h1>
        <StartButton></StartButton>
      </div>
      <PageQuiz></PageQuiz>
    </div>
  );
}

export default App;
