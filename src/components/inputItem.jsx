import React from 'react';
import PlusIcon from './PlusIcon';
import useRandomColor from '../hooks/useRandomColor';

const InputItem = ({ text, index, moveInput, fromCategory, targetCategories }) => {
  const borderColor = useRandomColor();

  return (
    <div className="input-item" style={{ border: `2px solid ${borderColor}` }}>
      <span>{text}</span>
      <div className="icon-container">
        {targetCategories.map((category) => (
          <PlusIcon
            key={category}
            onClick={() => moveInput(fromCategory, category, index)}
          />
        ))}
      </div>
    </div>
  );
};

export default InputItem;
