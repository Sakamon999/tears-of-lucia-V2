import React from 'react';
import { BookOpen, Settings, Save } from 'lucide-react';

interface TitleScreenProps {
  onStartGame: () => void;
  onLoadGame: () => void;
  onSettings: () => void;
}

const TitleScreen: React.FC<TitleScreenProps> = ({ 
  onStartGame, 
  onLoadGame, 
  onSettings 
}) => {
  return (
    <div 
      className="h-screen w-full bg-cover bg-center flex items-center justify-center px-4 sm:px-6 lg:px-8 relative overflow-hidden"
      style={{ 
        backgroundImage: 'url(/u1263267256_a_graceful_fairy_girl_standing_at_the_edge_of_a_b_f987f678-6826-45df-8c3f-041a4c5f2736_1.png)',
      }}
    >
      {/* Overlay gradient */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,0.6))'
        }}
      />

      {/* Magical particles effect */}
      <div className="absolute inset-0 opacity-50">
        <div className="absolute w-2 h-2 bg-blue-200 rounded-full animate-pulse"
             style={{left: '20%', top: '30%', animationDelay: '0s'}} />
        <div className="absolute w-2 h-2 bg-blue-200 rounded-full animate-pulse"
             style={{left: '80%', top: '40%', animationDelay: '0.5s'}} />
        <div className="absolute w-2 h-2 bg-blue-200 rounded-full animate-pulse"
             style={{left: '40%', top: '60%', animationDelay: '1s'}} />
        <div className="absolute w-2 h-2 bg-blue-200 rounded-full animate-pulse"
             style={{left: '70%', top: '70%', animationDelay: '1.5s'}} />
      </div>
      
      <div className="relative z-10 text-center w-full max-w-md">
        <h1 className="text-5xl sm:text-6xl font-serif text-white mb-2 tracking-wider"
            style={{
              textShadow: '0 0 30px rgba(158,201,255,0.8)'
            }}>
          Tears of Lucia
        </h1>
        <h2 className="text-xl sm:text-2xl font-serif text-blue-200 mb-12 sm:mb-16 italic opacity-90"
            style={{
              textShadow: '0 0 20px rgba(158,201,255,0.5)'
            }}>
          The Beginning of a Journey
        </h2>
        
        <div className="flex flex-col space-y-3 sm:space-y-4 items-center">
          <button 
            className="flex items-center justify-center bg-white/10 hover:bg-white/20 active:bg-white/30 text-white py-3 px-6 rounded-md transition-all duration-200 w-full max-w-xs backdrop-blur-sm border border-white/20 shadow-lg transform hover:scale-105"
            onClick={onStartGame}
          >
            <BookOpen className="mr-2 w-5 h-5" />
            <span>Start New Game</span>
          </button>
          
          <button 
            className="flex items-center justify-center bg-white/5 hover:bg-white/15 active:bg-white/25 text-white py-3 px-6 rounded-md transition-all duration-200 w-full max-w-xs backdrop-blur-sm border border-white/10 shadow-lg transform hover:scale-105"
            onClick={onLoadGame}
          >
            <Save className="mr-2 w-5 h-5" />
            <span>Load Game</span>
          </button>
          
          <button 
            className="flex items-center justify-center bg-white/5 hover:bg-white/15 active:bg-white/25 text-white py-3 px-6 rounded-md transition-all duration-200 w-full max-w-xs backdrop-blur-sm border border-white/10 shadow-lg transform hover:scale-105"
            onClick={onSettings}
          >
            <Settings className="mr-2 w-5 h-5" />
            <span>Settings</span>
          </button>
        </div>
      </div>
      
      <div className="absolute bottom-4 text-white/70 text-xs sm:text-sm font-serif">
        © 2025 Your Studio Name
      </div>
    </div>
  );
};

export default TitleScreen;