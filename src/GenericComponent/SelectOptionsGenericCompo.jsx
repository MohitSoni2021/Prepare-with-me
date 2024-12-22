import React, { useState, useRef, useEffect } from 'react';

import { BsArrowDown } from 'react-icons/bs';

const CustomSelect = ({ 
  options, 
  defaultValue, 
  onChange,
  placeholder = "Select an option..."
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(
    defaultValue ? options.find(opt => opt.value === defaultValue) : null
  );
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelect = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
    onChange && onChange(option.value);
  };

  return (
    <div className="relative w-full max-w-xs" ref={dropdownRef}>
      <button
        type="button"
        className={`
          w-full px-4 py-2 text-left bg-white border rounded-lg
          flex items-center justify-between
          ${isOpen 
            ? 'border-blue-500 ring-2 ring-blue-200' 
            : 'border-gray-300 hover:border-gray-400'
          }
          transition-all duration-200
          focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200
        `}
        onClick={() => setIsOpen(!isOpen)}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
      >
        <span className={`block truncate ${!selectedOption ? 'text-gray-500' : 'text-gray-900'}`}>
          {selectedOption ? selectedOption.label : placeholder}
        </span>
        <BsArrowDown
          className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>

      {isOpen && (
        <div 
          className="
            absolute z-10 w-full mt-1 bg-white border border-gray-200 rounded-lg shadow-lg
            max-h-60 overflow-auto
          "
          role="listbox"
        >
          {options.map((option) => (
            <div
              key={option.value}
              className={`
                px-4 py-2 cursor-pointer
                ${selectedOption?.value === option.value 
                  ? 'bg-blue-50 text-blue-700' 
                  : 'text-gray-900 hover:bg-gray-50'
                }
              `}
              onClick={() => handleSelect(option)}
              role="option"
              aria-selected={selectedOption?.value === option.value}
            >
              <span className="block truncate">
                {option.label}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

// Example usage demonstration
const Example = () => {
  const options = [
    { value: 'react', label: 'React' },
    { value: 'vue', label: 'Vue' },
    { value: 'angular', label: 'Angular' },
    { value: 'svelte', label: 'Svelte' },
    { value: 'next', label: 'Next.js' }
  ];

  const handleChange = (selectedValue) => {
    console.log('Selected:', selectedValue);
  };

  return (
    <div className="p-4">
      <CustomSelect
        options={options}
        defaultValue="react"
        onChange={handleChange}
        placeholder="Choose a framework..."
      />
    </div>
  );
};

export default CustomSelect;