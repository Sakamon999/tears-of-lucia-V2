import React, { useEffect, useRef } from 'react';

interface BackgroundMusicProps {
  src: string;
  volume?: number;
  loop?: boolean;
}

const BackgroundMusic: React.FC<BackgroundMusicProps> = ({ 
  src, 
  volume = 0.3,
  loop = true 
}) => {
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const playAudio = async () => {
      if (audioRef.current) {
        audioRef.current.volume = volume;
        try {
          await audioRef.current.play();
        } catch (error) {
          console.log('Audio autoplay failed:', error);
        }
      }
    };

    // Try to play on component mount
    playAudio();

    // Add click event listener to document to enable audio on user interaction
    const handleClick = () => {
      if (audioRef.current && audioRef.current.paused) {
        playAudio();
      }
    };

    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, [volume]);

  return (
    <audio
      ref={audioRef}
      src={src}
      loop={loop}
      preload="auto"
    />
  );
};

export default BackgroundMusic;