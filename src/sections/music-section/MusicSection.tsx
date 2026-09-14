import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import SongItem from "./SongItem"
import { useAudioPlayer } from "@/components/audio-player/audioPlayerStore"
import { fetchRecordings } from "@/components/audio-player/AudioPlayerService"
import { useEffect } from "react"
import type { Song } from "@/types/Song"

const MusicSection = () => {
  const { setCurrentSong, songs, setSongs } = useAudioPlayer()

  useEffect(() => {
    fetchRecordings().then((response) => {
      if (response && response?.length > 0) setSongs(response)
    })
  }, [])

  const piaSongs = songs.filter((songs) =>
    songs.collectionName.toLowerCase().includes("pia")
  )

  const nonPiaSongs = songs.filter(
    (songs) => !songs.collectionName.toLowerCase().includes("pia")
  )

  return (
    <div className="w-full shadow-md dark:shadow-elevated">
      <Card className="flex flex-col gap-2">
        <CardHeader className="text-center">
          <CardTitle className="text-center font-bold">
            Pia - Wayne State Session
          </CardTitle>
          <CardDescription>
            These recordings are a series of songs written and performed by the
            Detroit based artist Pia. I recorded these at Wayne State, and they
            were mixed and mastered by me individually.
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-2">
          {piaSongs.map((song) => (
            <SongItem
              key={song.id}
              song={song}
              selectSong={() => {
                setCurrentSong(song)
              }}
            />
          ))}
        </CardContent>
      </Card>
      <Card className="flex flex-col gap-2">
        <CardHeader className="text-center">
          <CardTitle className="text-center font-bold">
            Selected Recordings
          </CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-2">
          {nonPiaSongs.map((song) => (
            <SongItem
              key={song.id}
              song={song}
              selectSong={() => {
                setCurrentSong(song)
              }}
            />
          ))}
        </CardContent>
      </Card>
    </div>
  )
}

export default MusicSection
