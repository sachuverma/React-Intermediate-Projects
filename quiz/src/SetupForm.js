import React from "react";
import { useGlobalContext } from "./context";

const SetupForm = () => {
  const { quiz, handleChange, handleSubmit, error } = useGlobalContext();

  return (
    <main className="quiz quizz-small">
      <form className="setup-form">
        <h2>quiz setup</h2>

        <div className="form-control">
          <label htmlFor="amount">number of questions</label>
          <input
            type="number"
            name="amount"
            id="amount"
            value={quiz.amount}
            onChange={handleChange}
            className="form-input"
            min={1}
            max={30}
          />
        </div>

        <div className="form-control">
          <label htmlFor="category">select category</label>
          <select
            name="category"
            id="category"
            value={quiz.category}
            onChange={handleChange}
            className="form-input"
          >
            <option value="sports">sports</option>
            <option value="politics">politics</option>
            <option value="history">history</option>
          </select>
        </div>

        <div className="form-control">
          <label htmlFor="difficulty">select difficulty</label>
          <select
            name="difficulty"
            id="difficulty"
            value={quiz.difficulty}
            onChange={handleChange}
            className="form-input"
          >
            <option value="easy">easy</option>
            <option value="medium">medium</option>
            <option value="hard">hard</option>
          </select>
        </div>

        {error && (
          <p className="error">
            can't generate questions, please try different options
          </p>
        )}

        <button onClick={handleSubmit} className="submit-btn" type="submit">
          start
        </button>
      </form>
    </main>
  );
};

export default SetupForm;
