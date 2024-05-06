import React, { useState } from 'react';

const QuizForm = () => {
  const [question, setQuestion] = useState('');
  const [choices, setChoices] = useState([{ text: '', isCorrect: false }]);
  const [score, setScore] = useState(1);
  const [formQuestions, setFormQuestions] = useState([]);

  const addQuestion = () => {
    // Create a new form question object
    const newFormQuestion = {
      title: question,
      choices: choices.map(choice => ({ choiceText: choice.text, isCorrect: choice.isCorrect })),
      score,
      id: Math.random().toString(36).substring(7), // Generate a random id for each question
    };

    // Append the new form question to the formQuestions state
    setFormQuestions([...formQuestions, newFormQuestion]);

    // Clear the question input field and choices
    setQuestion('');
    setChoices([{ text: '', isCorrect: false }]);
  };

  const handleChoiceChange = (index, newText) => {
    const newChoices = [...choices];
    newChoices[index].text = newText;
    setChoices(newChoices);
  };

  const handleCorrectChange = (index, isChecked) => {
    const newChoices = [...choices];
    newChoices[index].isCorrect = isChecked;
    setChoices(newChoices);
  };

  const addChoice = () => {
    setChoices([...choices, { text: '', isCorrect: false }]);
  };

  const removeChoice = (index) => {
    const newChoices = [...choices];
    newChoices.splice(index, 1);
    setChoices(newChoices);
  };

  return (
    <div>
      <div id="question-container">
        <label htmlFor="question">Question:</label>
        <input
          type="text"
          id="question"
          name="question"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
        />
        <label htmlFor="score">Score:</label>
        <input
          type="number"
          id="score"
          name="score"
          value={score}
          onChange={(e) => setScore(parseInt(e.target.value))}
          min="1"
        />
        <button onClick={addQuestion}>Add Question</button>
      </div>

      <div id="choices-container">
        {/* Render choice inputs */}
        {choices.map((choice, index) => (
          <div key={index}>
            <input
              type="text"
              value={choice.text}
              onChange={(e) => handleChoiceChange(index, e.target.value)}
            />
            <label>
              Correct:
              <input
                type="checkbox"
                checked={choice.isCorrect}
                onChange={(e) => handleCorrectChange(index, e.target.checked)}
              />
            </label>
            {choices.length > 1 && <button onClick={() => removeChoice(index)}>Remove</button>}
          </div>
        ))}
        <button onClick={addChoice}>Add Choice</button>
      </div>

      <div id="form-container">
        {/* Render the form questions */}
        {formQuestions.map(({ title, choices, score, id }) => (
          <div key={id}>
            <h3>{title}</h3>
            <ul>
              {choices.map((choice, index) => (
                <li key={index}>{choice.choiceText} - {choice.isCorrect ? 'Correct' : 'Incorrect'}</li>
              ))}
            </ul>
            <p>Score: {score}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuizForm;
