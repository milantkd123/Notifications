// src/components/QuestionPage.jsx

import React from 'react';
import { showNotification } from '../utils/notificationUtils';

const QuestionPage = () => {
  const simulateAnswer = () => {
    showNotification('Someone answered your question', 'Check out the new response now!');
  };

  const simulateUpvote = () => {
    showNotification('Someone upvoted your answer', 'Nice! Your answer is gaining traction.');
  };

  return (
    <div className="p-4 max-w-md mx-auto bg-white rounded shadow mt-4">
      <h2 className="text-2xl font-bold mb-4">Your Question</h2>
      <p className="mb-6">How do I implement browser notifications in React?</p>

      <div className="flex gap-4">
        <button
          onClick={simulateAnswer}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Simulate Answer
        </button>

        <button
          onClick={simulateUpvote}
          className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700"
        >
          Simulate Upvote
        </button>
      </div>
    </div>
  );
};

export default QuestionPage;
