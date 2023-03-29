import React, { useState } from 'react';

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectOption, setSelectedOption] = useState<IDrop | null>(null);

  interface IDrop {
    label: string,
    value: string
  }
  const dropElem: IDrop[] = [
    {label: 'Book', value: 'Book1'},
    {label: 'Car', value: 'Car1'},
    {label: 'Train', value: 'Train1'},
    {label: 'Eat', value: 'Eat1'}
  ]

  const handleSelect = (el: IDrop) => {
    setSelectedOption(el);
    setIsOpen(false)
  };

  return (
    <div>
      <button onClick={() => setIsOpen(true)}>Выбрать элемент</button>
      {isOpen && (
        <ul>
          {dropElem.map(el => <li onClick={() => handleSelect(el)}>{el.label}</li> )}
        </ul>
      )}
      {!isOpen && (
        <div>
          {selectOption ? selectOption.label : "Элемент не выбран"}
        </div>
      )}
    </div>

  );
}

export default Dropdown;
