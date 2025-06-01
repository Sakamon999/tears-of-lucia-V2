import React, { useState, useEffect } from 'react';
import { DialogueLine } from '../types';
import { characters } from '../data/characters';
import TypewriterEffect from './TypewriterEffect';
import Choice from './Choice';

interface DialogueProps {
  dialogue: DialogueLine;
  onNext: () => void;
  onChoiceSelected: (nextSceneId: string) => void;
}

const Dialogue: React.FC<DialogueProps> = ({ dialogue, onNext, onChoiceSelected }) => {
  const [showChoices, setShowChoices] = useState(false);
  const [typingComplete, setTypingComplete] = useState(false);
  
  const character = dialogue.character ? characters[dialogue.character] : null;
  const portraitUrl = character && dialogue.portrait ? character.portraits[dialogue.portrait] : null;
  
  useEffect(() => {
    setTypingComplete(false);
    setShowChoices(false);
  }, [dialogue]);
  
  const handleTypingComplete = () => {
    setTypingComplete(true);
    if (dialogue.choices) {
      setShowChoices(true);
    }
  };
  
  const handleClick = () => {
    if (!typingComplete) {
      setTypingComplete(true);
      if (dialogue.choices) {
        setShowChoices(true);
      }
    } else if (!dialogue.choices) {
      onNext();
    }
  };
  
  return (
    <div className="relative w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Character portrait - Adjusted for mobile */}
      {portraitUrl && (
        <div className="absolute bottom-full left-4 mb-2 sm:mb-4">
          <div className="w-16 h-16 sm:w-24 sm:h-24 rounded-full overflow-hidden border-4 border-indigo-800 shadow-lg">
            <img 
              src={portraitUrl} 
              alt={character?.name} 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      )}
      
      {/* Dialogue box - Mobile optimized */}
      <div 
        className="bg-black bg-opacity-70 text-white p-4 sm:p-6 pt-6 sm:pt-8 rounded-t-lg backdrop-blur-sm touch-none"
        onClick={handleClick}
      >
        {/* Character name */}
        {character && (
          <div className="bg-indigo-800 text-white px-3 py-1 sm:px-4 sm:py-1 absolute top-0 left-8 transform -translate-y-1/2 rounded-md text-sm sm:text-base">
            {character.name}
          </div>
        )}
        
        {/* Dialogue text */}
        <div className="min-h-[4rem] sm:min-h-[5rem] mb-3 sm:mb-4">
          <TypewriterEffect 
            text={dialogue.text} 
            speed={30} 
            onComplete={handleTypingComplete} 
            skip={typingComplete}
          />
        </div>
        
        {/* Choices - Mobile optimized */}
        {showChoices && dialogue.choices && (
          <div className="flex flex-col space-y-2 mt-3 sm:mt-4">
            {dialogue.choices.map((choice, index) => (
              <Choice 
                key={index} 
                text={choice.text} 
                onClick={() => onChoiceSelected(choice.nextSceneId)} 
              />
            ))}
          </div>
        )}
        
        {/* Continue indicator */}
        {typingComplete && !dialogue.choices && (
          <div className="text-center text-white text-sm sm:text-base opacity-80 animate-bounce">
            Tap to continue
          </div>
        )}
      </div>
    </div>
  );
};

export default Dialogue;