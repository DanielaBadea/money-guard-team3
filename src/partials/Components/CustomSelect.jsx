import React, { useState } from 'react';
import css from '../../sass/Module/ModalAddTransactions.module.css';

const CustomSelect = ({ options, value, onChange, placeholder }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (option) => {
    onChange(option);
    setIsOpen(false);
  };

  return (
    <div className={css.customSelectContainer}>
      <div className={css.customSelect} onClick={() => setIsOpen(!isOpen)}>
        {value ? value.label : placeholder}
      </div>
      {isOpen && (
        <div className={css.optionsContainer}>
          {options.map((option) => (
            <div
              key={option.value}
              className={css.option}
              onClick={() => handleSelect(option)}
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CustomSelect;
