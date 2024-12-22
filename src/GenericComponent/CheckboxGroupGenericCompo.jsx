import React, { useState } from 'react';

const ButtonCheckboxGroup = ({ options, onChange }) => {
  const [selectedOptions, setSelectedOptions] = useState(new Set());

  const toggleOption = (value) => {
    const newSelected = new Set(selectedOptions);
    if (newSelected.has(value)) {
      newSelected.delete(value);
    } else {
      newSelected.add(value);
    }
    setSelectedOptions(newSelected);
    onChange && onChange(Array.from(newSelected));
  };

  return (
    <div className="flex flex-wrap gap-2 justify-center">
      {options.map((option) => {
        const isSelected = selectedOptions.has(option.value);
        return (
          <button
            key={option.value}
            onClick={() => toggleOption(option.value)}
            className={`
              px-4 py-2 rounded-lg font-medium transition-all duration-200
              focus:outline-none  font-space-mono
              ${isSelected 
                ? 'bg-emerald-500 text-white hover:bg-emerald-600' 
                : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
              }
            `}
            type="button"
            aria-pressed={isSelected}
          >
            <div className="flex items-center gap-2">
              <div className={`
                w-4 h-4 border-2 rounded transition-colors
                flex items-center justify-center
                ${isSelected ? 'border-white bg-white' : 'border-gray-400 bg-transparent'}
              `}>
                {isSelected && (
                  <svg 
                    className="w-3 h-3 text-blue-600" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M5 13l4 4L19 7" 
                    />
                  </svg>
                )}
              </div>
              {option.label}
            </div>
          </button>
        );
      })}
    </div>
  );
};



export default ButtonCheckboxGroup;