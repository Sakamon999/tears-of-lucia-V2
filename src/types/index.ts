export interface Character {
  id: string;
  name: string;
  portraits: {
    [mood: string]: string; // URLs to character portraits with different expressions
  };
}

export interface Choice {
  text: string;
  nextSceneId: string;
}

export interface DialogueLine {
  character?: string; // Character ID, undefined for narrator
  text: string;
  portrait?: string; // Portrait mood key
  choices?: Choice[];
}

export interface Scene {
  id: string;
  background: string;
  video?: string; // URL to video file (MP4)
  dialogues: DialogueLine[];
}

export interface Episode {
  id: string;
  title: string;
  scenes: Scene[];
}

export interface GameState {
  currentEpisodeId: string;
  currentSceneId: string;
  dialogueIndex: number;
  visitedScenes: string[];
  flags: Record<string, boolean | string | number>;
}