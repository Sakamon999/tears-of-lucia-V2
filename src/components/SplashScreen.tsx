import React, { useEffect, useState } from 'react';
import BackgroundMusic from './BackgroundMusic';

interface SplashScreenProps {
  onComplete: () => void;
}

const narrativeLines = [
  "Long ago, there was a kingdom where humans and fairies lived in harmony.",
  "It was called Lumeria — a land of endless blue skies, floating trees, and laughter that echoed across the winds.",
  "But one day, the sky cracked open, and shadows swallowed everything.",
  "Only one memory remains...",
  "A single girl, lost in time — her name is Lucia.",
  "She has forgotten who she is. But deep within her heart, a light still flickers.",
  "And now, her journey begins —to remember, to reclaim, and to heal what was broken."
];

const SplashScreen: React.FC<SplashScreenProps> = ({ onComplete }) => {
  const [currentScreen, setCurrentScreen] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);
  const [currentLine, setCurrentLine] = useState(-1);

  useEffect(() => {
    const timers = [
      // First screen duration
      setTimeout(() => {
        setCurrentScreen(1);
        // Start showing narrative lines after a short delay
        setTimeout(() => setCurrentLine(0), 500);
      }, 3000),
      // Start fade out after narrative
      setTimeout(() => {
        setFadeOut(true);
        setTimeout(onComplete, 1000);
      }, 33000) // Total duration: 3s first screen + 30s narrative
    ];

    return () => timers.forEach(timer => clearTimeout(timer));
  }, [onComplete]);

  // Progress through narrative lines
  useEffect(() => {
    if (currentLine >= 0 && currentLine < narrativeLines.length - 1) {
      const timer = setTimeout(() => {
        setCurrentLine(prev => prev + 1);
      }, 4000); // ~4 seconds per line
      return () => clearTimeout(timer);
    }
  }, [currentLine]);

  return (
    <div 
      className={`fixed inset-0 bg-black flex items-center justify-center transition-opacity duration-1000 ${
        fadeOut ? 'opacity-0' : 'opacity-100'
      }`}
    >
      <BackgroundMusic 
        src="/audio/onboardingV1.mp3" 
        volume={0.2}
        loop={true}
      />
      
      {/* First splash screen */}
      <div className={`absolute inset-0 transition-opacity duration-1000 ${
        currentScreen === 0 ? 'opacity-100' : 'opacity-0'
      }`}>
        <img
          src="/u1263267256_Create_a_cinematic_vertical_splash_screen_image_f_841dcac1-65c6-489d-8339-2726293dec87_0.png"
          alt="Tears of Lucia Splash"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        <div className="absolute bottom-8 left-0 right-0 text-center">
          <h1 className="text-4xl sm:text-5xl font-serif text-white mb-2 tracking-wider"
              style={{ textShadow: '0 0 30px rgba(158,201,255,0.8)' }}>
            Tears of Lucia
          </h1>
        </div>
      </div>

      {/* Second screen with narrative */}
      <div className={`absolute inset-0 transition-opacity duration-1000 ${
        currentScreen === 1 ? 'opacity-100' : 'opacity-0'
      }`}>
        <img
          src="/u1263267256_Create_a_5-10_second_emotional_cinematic_sequence_2a166322-080e-494e-8968-d6bb6477902a_3.png"
          alt="Moonlit Scene"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        
        {/* Floating particles effect */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-yellow-100 rounded-full animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
                opacity: 0.6
              }}
            />
          ))}
        </div>

        {/* Narrative text - Updated with larger text size */}
        <div className="absolute inset-x-4 bottom-20 sm:bottom-32">
          {narrativeLines.map((line, index) => (
            <div
              key={index}
              className={`transition-all duration-1000 text-center mb-6 ${
                index === currentLine 
                  ? 'opacity-100 transform translate-y-0' 
                  : index < currentLine 
                    ? 'opacity-0 transform -translate-y-4'
                    : 'opacity-0 transform translate-y-4'
              }`}
            >
              <p className="text-2xl sm:text-4xl text-white font-serif leading-relaxed"
                 style={{ textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}>
                {line}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SplashScreen;