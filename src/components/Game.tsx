import React, { useState, useEffect } from 'react';
import { GameState } from '../types';
import Scene from './Scene';
import TitleScreen from './TitleScreen';
import SplashScreen from './SplashScreen';
import { episodes, initialGameState } from '../data/story';

type GameScreen = 'splash' | 'title' | 'game' | 'settings';

const Game: React.FC = () => {
  const [gameState, setGameState] = useState<GameState>(initialGameState);
  const [currentScreen, setCurrentScreen] = useState<GameScreen>('splash');
  
  const saveGame = () => {
    localStorage.setItem('tearsOfLucia_saveData', JSON.stringify(gameState));
  };
  
  const loadGame = () => {
    const savedData = localStorage.getItem('tearsOfLucia_saveData');
    if (savedData) {
      setGameState(JSON.parse(savedData));
      setCurrentScreen('game');
    }
  };
  
  const currentEpisode = episodes[gameState.currentEpisodeId];
  const currentScene = currentEpisode?.scenes.find(
    scene => scene.id === gameState.currentSceneId
  );
  
  const handleNextDialogue = () => {
    if (!currentScene) return;
    
    if (gameState.dialogueIndex < currentScene.dialogues.length - 1) {
      setGameState(prev => ({
        ...prev,
        dialogueIndex: prev.dialogueIndex + 1
      }));
    }
  };
  
  const handleChoiceSelected = (nextSceneId: string) => {
    setGameState(prev => ({
      ...prev,
      currentSceneId: nextSceneId,
      dialogueIndex: 0,
      visitedScenes: [...prev.visitedScenes, nextSceneId]
    }));
  };
  
  const startNewGame = () => {
    setGameState(initialGameState);
    setCurrentScreen('game');
  };
  
  const openSettings = () => {
    setCurrentScreen('settings');
  };
  
  useEffect(() => {
    if (currentScreen === 'game') {
      saveGame();
    }
  }, [gameState.currentSceneId]);

  if (currentScreen === 'splash') {
    return <SplashScreen onComplete={() => setCurrentScreen('title')} />;
  }
  
  if (currentScreen === 'title') {
    return (
      <TitleScreen 
        onStartGame={startNewGame} 
        onLoadGame={loadGame} 
        onSettings={openSettings} 
      />
    );
  }
  
  if (currentScreen === 'settings') {
    return (
      <div className="h-screen bg-gray-900 text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl mb-6">Settings</h1>
          <button 
            className="bg-indigo-800 hover:bg-indigo-700 text-white py-2 px-4 rounded"
            onClick={() => setCurrentScreen('title')}
          >
            Back to Title
          </button>
        </div>
      </div>
    );
  }
  
  return currentScene ? (
    <Scene
      scene={currentScene}
      gameState={gameState}
      onNextDialogue={handleNextDialogue}
      onChoiceSelected={handleChoiceSelected}
    />
  ) : (
    <div className="h-screen bg-black text-white flex items-center justify-center">
      <p>Error: Scene not found</p>
    </div>
  );
};

export default Game;