import {
  CirclePause,
  CirclePlay,
  RotateCcw,
  RotateCw,
  Repeat,
  SkipBack,
  SkipForward,
  Volume2,
  VolumeX,
} from "lucide-react"
import { useRef } from "react"
import type H5AudioPlayer from "react-h5-audio-player"
import AudioPlayer from "react-h5-audio-player"
import { useAudioPlayer } from "./audioPlayerStore"

interface PlayerControlProps {
  resolvedTheme: "light" | "dark"
}

const PlayerControls = ({ resolvedTheme }: PlayerControlProps) => {
  const audioPlayerRef = useRef<H5AudioPlayer>(null)
  const { currentSong } = useAudioPlayer()

  return (
    <AudioPlayer
      ref={audioPlayerRef}
      style={{
        background: resolvedTheme === "dark" ? "#1E1E1E" : "#F8F8F8",
        position: "fixed",
        left: 0,
        bottom: 0,
        paddingBlock: 6,
        paddingInline: 20,
      }}
      className="border-t border-b border-muted"
      src={currentSong?.cloudAudioURL}
      onPlayError={() => console.log("onPlayError")}
      preload="none"
      autoPlay={true}
      showJumpControls={true}
      showFilledVolume={false}
      timeFormat="auto"
      customIcons={{
        play: <CirclePlay className="text-foreground" size={40} />,
        pause: <CirclePause className="text-foreground" size={40} />,
        previous: <SkipBack className="inline text-foreground" size={24} />,
        next: <SkipForward className="inline text-foreground" size={24} />,
        rewind: <RotateCcw className="inline text-foreground" size={28} />,
        forward: <RotateCw className="inline text-foreground" size={28} />,
        volume: <Volume2 className="text-foreground" size={24} />,
        volumeMute: <VolumeX className="text-foreground" size={24} />,
        loop: <Repeat className="text-foreground" size={24} />,
        loopOff: <Repeat className="text-foreground-muted" size={24} />,
      }}
    />
  )
}

export default PlayerControls
