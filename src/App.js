import SetupForm from "./Form/SetupForm";
import Loading from "./Loading/LoadingScreen";
import Modal from "./Modal/Modal";
import { useGlobalContext } from "./Context/Context";
import PageTitle from "./Title/PageTitle";

function App() {
  const {
    waiting,
    loading,
    questions,
    index,
    correct,
    checkAnswers
  } = useGlobalContext();
  
  if (waiting) {
    return <SetupForm />;
  }
  if (loading) {
    return <Loading />;
  }

  const { incorrect_answers, correct_answer, question } = questions[index];
  let answers = [...incorrect_answers];
  const tempIndex = Math.floor(Math.random() * 4);
  if (tempIndex === 3) {
    answers.push(correct_answer);
  } else {
    answers.push(answers[tempIndex]);
    answers[tempIndex] = correct_answer;
  }

  function refreshPage() {
    window.location.reload(false);
  }

  return (
    <main>
      <PageTitle>Quiz App</PageTitle>
      <Modal />
      <div className="quiz-wrapper">
        <section className="quiz">
          {console.log(questions)}
          <p className="correct-answers">
            Correct answers: {correct}/{index}
          </p>
          <article className="container">
            <h2 dangerouslySetInnerHTML={{ __html: question }} />
            <div className="btn-container">
              {answers.map((answer, index) => {
                return (
                  <button
                    key={index}
                    className="answer-btn"
                    onClick={() => checkAnswers(correct_answer === answer)}
                    dangerouslySetInnerHTML={{ __html: answer }}
                  />
                );
              })}
            </div>
          </article>
        </section>
        <button className="reload-btn" onClick={refreshPage}>
          Click to reload!
        </button>
      </div>
    </main>
  );
}

export default App;