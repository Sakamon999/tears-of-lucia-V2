import React from 'react';

interface ChoiceProps {
  text: string;
  onClick: () => void;
}

const Choice: React.FC<ChoiceProps> = ({ text, onClick }) => {
  return (
    <button 
      className="bg-indigo-800 hover:bg-indigo-700 active:bg-indigo-600 text-white py-3 px-4 rounded-md transition-colors duration-200 text-left text-sm sm:text-base w-full touch-manipulation"
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Choice;