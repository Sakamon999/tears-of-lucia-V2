import { useState, useEffect } from 'react';
import { GameState } from '../types';
import { initialGameState } from '../data/story';

const SAVE_KEY = 'tearsOfLucia_saveData';

export function useGameSave() {
  const [saveExists, setSaveExists] = useState<boolean>(false);
  
  // Check if save data exists
  useEffect(() => {
    const savedData = localStorage.getItem(SAVE_KEY);
    setSaveExists(!!savedData);
  }, []);
  
  // Save game state
  const saveGame = (state: GameState) => {
    localStorage.setItem(SAVE_KEY, JSON.stringify(state));
    setSaveExists(true);
  };
  
  // Load game state
  const loadGame = (): GameState => {
    const savedData = localStorage.getItem(SAVE_KEY);
    if (savedData) {
      return JSON.parse(savedData);
    }
    return initialGameState;
  };
  
  // Delete save data
  const deleteSave = () => {
    localStorage.removeItem(SAVE_KEY);
    setSaveExists(false);
  };
  
  return { saveExists, saveGame, loadGame, deleteSave };
}