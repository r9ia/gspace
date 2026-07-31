import { useEffect, useRef, useState } from 'react';
import { Box, IconButton, Slider, styled } from '@mui/material';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import VolumeOffIcon from '@mui/icons-material/VolumeOff';
import { getGlassTabSx } from '../design/liquid-glass';

// Tell TypeScript about the global YT object the API script injects
declare global {
  interface Window {
    YT: any;
    onYouTubeIframeAPIReady: () => void;
  }
}

//SHAKE IT METRO STATION fire emoji times four
const VIDEO_ID = 'acU_inBCGO8'; // placeholder — swap for whatever video you want

// XP/WMP-style glossy round button
const XPButton = styled(IconButton)(() => ({
  width: 36,
  height: 36,
  background: 'linear-gradient(180deg, #8fd3f9 0%, #3f9fe0 45%, #0d6fc7 100%)',
  border: '1px solid #0a4f8f',
  boxShadow: `
    0 1px 3px rgba(0,0,0,0.4),
    inset 0 1px 1px rgba(255,255,255,0.6),
    inset 0 -2px 3px rgba(0,0,0,0.15)
  `,
  color: 'white',
  position: 'relative',
  overflow: 'hidden',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 2,
    left: '12%',
    width: '76%',
    height: '42%',
    background: 'linear-gradient(180deg, rgba(255,255,255,0.75), rgba(255,255,255,0))',
    borderRadius: '50% 50% 40% 40%',
    pointerEvents: 'none',
  },
  '&:hover': {
    background: 'linear-gradient(180deg, #a3ddfb 0%, #52aeeb 45%, #1a7fd6 100%)',
  },
  '&:active': {
    boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.5)',
  },
  '&.Mui-disabled': {
    background: 'linear-gradient(180deg, #cfcfcf 0%, #a8a8a8 100%)',
    color: '#e0e0e0',
  },
}));

export default function Music() {
  const playerRef = useRef<any>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<number | null>(null);

  const [isReady, setIsReady] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(50); // 0-100, matches YT API scale

  useEffect(() => {
    // If the API script is already loaded (e.g. on hot reload), just init
    if (window.YT && window.YT.Player) {
      initPlayer();
      return;
    }

    // Inject the IFrame API script once
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    document.body.appendChild(tag);

    // YouTube calls this global fn automatically once the API is ready
    window.onYouTubeIframeAPIReady = () => {
      initPlayer();
    };

    return () => {
      stopPolling();
      playerRef.current?.destroy?.();
    };
  }, []);

  function initPlayer() {
    if (!containerRef.current) return;

    playerRef.current = new window.YT.Player(containerRef.current, {
      videoId: VIDEO_ID,
      width: '60',
      height: '34',
      playerVars: {
        controls: 0,
        disablekb: 1,
        modestbranding: 1,
      },
      events: {
        onReady: () => {
          setIsReady(true);
          setDuration(playerRef.current.getDuration());
          playerRef.current.setVolume(volume);
        },
        onStateChange: (event: any) => {
          const playing = event.data === window.YT.PlayerState.PLAYING;
          setIsPlaying(playing);
          playing ? startPolling() : stopPolling();
        },
      },
    });
  }

  function startPolling() {
    stopPolling();
    intervalRef.current = window.setInterval(() => {
      if (!playerRef.current) return;
      setCurrentTime(playerRef.current.getCurrentTime());
      setDuration(playerRef.current.getDuration());
    }, 250);
  }

  function stopPolling() {
    if (intervalRef.current !== null) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }

  function handlePlayPause() {
    if (!playerRef.current) return;
    isPlaying ? playerRef.current.pauseVideo() : playerRef.current.playVideo();
  }

  // Slider's onChange fires continuously while dragging — good for updating
  // the displayed time/thumb position without fighting the poll interval
  function handleSeekChange(_event: Event, value: number | number[]) {
    setCurrentTime(value as number);
  }

  // onChangeCommitted fires once, on mouse-up — this is when we actually
  // want to tell the YouTube player to jump, not on every pixel of drag
  function handleSeekCommitted(_event: Event | React.SyntheticEvent, value: number | number[]) {
    if (!playerRef.current) return;
    playerRef.current.seekTo(value as number, true);
  }

  function handleVolumeChange(_event: Event, value: number | number[]) {
    const newVolume = value as number;
    setVolume(newVolume);
    playerRef.current?.setVolume(newVolume);
  }

  return (
    <Box sx={{ ...getGlassTabSx("107,149,207"), borderRadius: 1, padding: 2 }}>
      {/* Song title + small visible YouTube player side by side */}
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <div ref={containerRef} style={{ width: 60, height: 34, flexShrink: 0 }} />
        <Box>Shake It - Metro Station</Box>
      </Box>

      {/* progress bar + time */}
      <Box sx={{ px: 1 }}>
        <Slider
          value={currentTime}
          min={0}
          max={duration || 0}
          onChange={handleSeekChange}
          onChangeCommitted={handleSeekCommitted}
          disabled={!isReady}
          size="small"
        />

        <Box sx={{ display: 'flex', fontSize: 12 }}>
          <span>{formatTime(currentTime)}</span>
          <span>&nbsp;/&nbsp;</span>
          <span>{formatTime(duration)}</span>
        </Box>
      </Box>

      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <XPButton onClick={handlePlayPause} disabled={!isReady}>
          {isPlaying ? <PauseIcon /> : <PlayArrowIcon />}
        </XPButton>

        {/* Volume control: icon + always-visible horizontal slider */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, flex: 1 }}>
          <XPButton disabled={!isReady} sx={{ width: 28, height: 28 }}>
            {volume === 0 ? <VolumeOffIcon sx={{ fontSize: 16 }} /> : <VolumeUpIcon sx={{ fontSize: 16 }} />}
          </XPButton>

          <Slider
            value={volume}
            min={0}
            max={100}
            onChange={handleVolumeChange}
            size="small"
            sx={{ width: 80 }}
          />
        </Box>
      </Box>
    </Box>
  );
}

function formatTime(seconds: number) {
  if (!isFinite(seconds) || seconds < 0) return '0:00';
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins}:${secs.toString().padStart(2, '0')}`;
}