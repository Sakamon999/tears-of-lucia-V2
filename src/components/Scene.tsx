import React from 'react';
import { Scene as SceneType, GameState } from '../types';
import Dialogue from './Dialogue';
import Video from './Video';

interface SceneProps {
  scene: SceneType;
  gameState: GameState;
  onNextDialogue: () => void;
  onChoiceSelected: (nextSceneId: string) => void;
}

const Scene: React.FC<SceneProps> = ({ 
  scene, 
  gameState, 
  onNextDialogue, 
  onChoiceSelected 
}) => {
  const currentDialogue = scene.dialogues[gameState.dialogueIndex];
  
  return (
    <div className="h-screen w-full relative flex flex-col">
      {scene.video ? (
        <Video src={scene.video} />
      ) : (
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${scene.background})` }}
        />
      )}
      
      <div className="flex-grow relative z-10" onClick={onNextDialogue}>
        {/* This area is clickable to advance dialogue */}
      </div>
      
      <Dialogue 
        dialogue={currentDialogue} 
        onNext={onNextDialogue}
        onChoiceSelected={onChoiceSelected}
      />
    </div>
  );
};

export default Scene