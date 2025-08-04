import React from 'react';
import Profile from './components/Profile';
import QuestionPage from './components/QuestionPage';
import './App.css';

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-center text-3xl font-bold mb-6">React Notification Demo</h1>
      <Profile />
      <QuestionPage />
    </div>
  );
};

export default App; 
