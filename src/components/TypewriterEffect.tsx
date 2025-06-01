import React, { useState, useEffect } from 'react';

interface TypewriterEffectProps {
  text: string;
  speed?: number;
  onComplete?: () => void;
  skip?: boolean;
}

const TypewriterEffect: React.FC<TypewriterEffectProps> = ({ 
  text, 
  speed = 30,
  onComplete,
  skip = false
}) => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  
  useEffect(() => {
    setDisplayedText('');
    setCurrentIndex(0);
  }, [text]);
  
  useEffect(() => {
    if (skip) {
      setDisplayedText(text);
      setCurrentIndex(text.length);
      if (onComplete) onComplete();
      return;
    }
    
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, speed);
      
      return () => clearTimeout(timeout);
    } else if (onComplete) {
      onComplete();
    }
  }, [currentIndex, text, speed, onComplete, skip]);
  
  return <p className="text-lg leading-relaxed">{displayedText}</p>;
};

export default TypewriterEffect;