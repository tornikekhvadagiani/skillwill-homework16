import React, { useState } from 'react';
import InputBox from './components/InputBox';
import './App.css';

const App = () => {
  const [inputs, setInputs] = useState({
    Backlog: [],
    InProgress: [],
    Completed: [],
  });

  const moveInput = (from, to, index) => {
    setInputs((prev) => {
      const itemToMove = prev[from][index];
      return {
        ...prev,
        [from]: prev[from].filter((_, i) => i !== index),
        [to]: [...prev[to], itemToMove],
      };
    });
  };

  const addInput = (category, text) => {
    setInputs((prev) => ({
      ...prev,
      [category]: [...prev[category], text],
    }));
  };

  return (
    <div className="app">
      <h1>Task Management</h1>
      <div className="input-container">
        <InputBox
          title="Backlog"
          inputs={inputs.Backlog}
          addInput={addInput}
          moveInput={moveInput}
          targetCategories={['InProgress']}
        />
        <InputBox
          title="InProgress"
          inputs={inputs.InProgress}
          moveInput={moveInput}
          targetCategories={['Backlog', 'Completed']}
        />
        <InputBox
          title="Completed"
          inputs={inputs.Completed}
          moveInput={moveInput}
          targetCategories={['InProgress']}
        />
      </div>
    </div>
  );
};

export default App;
