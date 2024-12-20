import React from 'react';
import InputItem from './inputItem';

const InputBox = ({ title, inputs, addInput, moveInput, targetCategories }) => {
  const handleAdd = () => {
    const text = prompt('Enter task text:');
    if (text) {
      addInput(title, text);
    }
  };

  return (
    <div className="input-box">
      <h2>
        {title} ({inputs.length})
      </h2>
      <div>
        {inputs.map((text, index) => (
          <InputItem
            key={index}
            text={text}
            index={index}
            moveInput={moveInput}
            fromCategory={title}
            targetCategories={targetCategories}
          />
        ))}
      </div>
      {addInput && (
        <button className="add-btn" onClick={handleAdd}>
          Add Task
        </button>
      )}
    </div>
  );
};

export default InputBox;
