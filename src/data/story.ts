import { Episode } from '../types';

// Story content
export const episodes: Record<string, Episode> = {
  episode1: {
    id: 'episode1',
    title: 'The Beginning of a Journey',
    scenes: [
      {
        id: 'scene1_1',
        background: 'https://images.pexels.com/photos/1141853/pexels-photo-1141853.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        // Example of how to add a video to a scene:
        // video: 'https://example.com/path/to/your/video.mp4',
        dialogues: [
          {
            text: 'The moon hung low over the silent shore, casting a silvery path across the dark waters.'
          },
          {
            text: 'A lone figure lay motionless on the wet sand, the gentle waves lapping at her feet.'
          },
          {
            character: 'lucia',
            portrait: 'default',
            text: '...Where am I?'
          },
          {
            text: 'She struggled to sit up, her head throbbing with each movement.'
          },
          {
            character: 'lucia',
            portrait: 'sad',
            text: 'I can\'t remember anything... How did I get here?'
          },
          {
            text: 'A distant sound of footsteps on sand caught her attention.'
          },
          {
            character: 'elias',
            portrait: 'default',
            text: 'You\'re awake. I was beginning to worry.'
          },
          {
            character: 'lucia',
            portrait: 'default',
            text: 'Who are you? Do you know me?'
          },
          {
            character: 'elias',
            portrait: 'serious',
            text: 'My name is Elias. And yes, I know of you, Lucia. Though we\'ve never met until now.'
          },
          {
            character: 'lucia',
            portrait: 'default',
            text: 'How do you know my name?'
          },
          {
            character: 'elias',
            portrait: 'serious',
            text: 'There\'s much to explain, but this isn\'t the place. We need to move. It\'s not safe here.'
          },
          {
            text: 'The stranger extended his hand to help her up. Lucia hesitated, uncertain whether to trust him.',
            choices: [
              {
                text: 'Take his hand and go with him',
                nextSceneId: 'scene1_2'
              },
              {
                text: 'Refuse his help and demand answers',
                nextSceneId: 'scene1_3'
              }
            ]
          }
        ]
      },
      {
        id: 'scene1_2',
        background: 'https://images.pexels.com/photos/355321/pexels-photo-355321.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        dialogues: [
          {
            text: 'Lucia took his hand, surprised by the warmth of his grip.'
          },
          {
            character: 'elias',
            portrait: 'default',
            text: 'This way. My cabin is not far from here.'
          },
          {
            text: 'They walked in silence through a dense forest, moonlight filtering through the trees.'
          },
          {
            character: 'lucia',
            portrait: 'default',
            text: 'You said you know of me. What does that mean?'
          },
          {
            character: 'elias',
            portrait: 'serious',
            text: 'Your coming was foretold. The girl with no memory who would wash ashore under the crescent moon.'
          },
          {
            text: 'Lucia stopped walking, a chill running down her spine.'
          },
          {
            character: 'lucia',
            portrait: 'sad',
            text: 'That\'s... impossible.'
          },
          {
            text: 'To be continued...'
          }
        ]
      },
      {
        id: 'scene1_3',
        background: 'https://images.pexels.com/photos/1141853/pexels-photo-1141853.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        dialogues: [
          {
            character: 'lucia',
            portrait: 'default',
            text: 'I\'m not going anywhere with you until you tell me who you are and how you know my name.'
          },
          {
            character: 'elias',
            portrait: 'serious',
            text: 'We don\'t have time for this. They\'ll be here soon.'
          },
          {
            character: 'lucia',
            portrait: 'default',
            text: 'Who will be here?'
          },
          {
            text: 'A distant howl echoed across the beach, causing Elias to tense up.'
          },
          {
            character: 'elias',
            portrait: 'serious',
            text: 'The Shadows. They\'ve been hunting you since you crossed the veil.'
          },
          {
            character: 'lucia',
            portrait: 'sad',
            text: 'I don\'t understand any of this.'
          },
          {
            character: 'elias',
            portrait: 'default',
            text: 'You will. But first, we must survive this night.'
          },
          {
            text: 'To be continued...'
          }
        ]
      }
    ]
  }
};

// Initial game state
export const initialGameState = {
  currentEpisodeId: 'episode1',
  currentSceneId: 'scene1_1',
  dialogueIndex: 0,
  visitedScenes: [],
  flags: {}
};