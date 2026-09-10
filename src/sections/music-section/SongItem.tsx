import type { Song } from "@/types/Song"
import {
  ItemActions,
  Item,
  ItemContent,
  ItemDescription,
  ItemTitle,
} from "@/components/ui/item"
import { useAudioPlayer } from "@/components/audio-player/audioPlayerStore"
import Wave from "@/assets/wave.svg?react"
import { LucidePlayCircle } from "lucide-react"

interface SongItemProps {
  song: Song
  selectSong: () => void
}

const SongItem = ({ song, selectSong }: SongItemProps) => {
  const { currentSong } = useAudioPlayer()

  const isSelected = song.id === currentSong?.id

  const handleSelect = () => {
    selectSong()
  }

  return (
    <Item
      className={`border bg-background ${isSelected ? "shadow-elevated dark:shadow-theme-blue" : "shadow-sm"} `}
    >
      <ItemContent className={`w-full`} onClick={handleSelect}>
        <ItemTitle>{song.title}</ItemTitle>
        <ItemTitle className="font-normal">{song.collectionName}</ItemTitle>
        <ItemDescription>{song.description}</ItemDescription>
      </ItemContent>
      <ItemActions>
        {isSelected ? (
          <Wave className="w-16 text-primary" />
        ) : (
          <LucidePlayCircle
            aria-label="play music"
            size={40}
            onClick={handleSelect}
          />
        )}
      </ItemActions>
    </Item>
  )
}

export default SongItem
