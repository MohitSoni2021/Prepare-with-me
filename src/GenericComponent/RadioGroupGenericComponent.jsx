import React, { useState } from 'react';

const ButtonRadioGroup = ({ options, defaultValue, onChange, name, fontsize, buttonstyling, outerContainerStyling }) => {
  const [selectedValue, setSelectedValue] = useState(defaultValue || '');

  const handleSelect = (value) => {
    setSelectedValue(value);
    onChange && onChange(value);
  };

  return (
    <div 
      role="radiogroup"
      className={`flex flex-wrap gap-2 font-space-mono justify-center  ${fontsize} ${outerContainerStyling}`}
    >
      {options.map((option) => {
        const isSelected = selectedValue === option.value;
        return (
          <button
            key={option.value}
            onClick={() => handleSelect(option.value)}
            role="radio"
            aria-checked={isSelected}
            className={`
              px-4 py-2 rounded-lg font-medium transition-all duration-200
              focus:outline-none  ${buttonstyling}
              ${isSelected 
                ? 'bg-emerald-500 text-white hover:bg-emerald-600' 
                : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
              }
            `}
            type="button"
          >
            <div className="flex items-center gap-2">
              <div className={`
                w-4 h-4 rounded-full border-2 transition-colors
                flex items-center justify-center
                ${isSelected ? 'border-white' : 'border-gray-400'}
              `}>
                {isSelected && (
                  <div className={`
                    w-2 h-2 rounded-full
                    ${isSelected ? 'bg-white' : 'bg-transparent'}
                  `} />
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


export default ButtonRadioGroup;