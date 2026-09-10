import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import SongItem from "./SongItem"
import { useAudioPlayer } from "@/components/audio-player/audioPlayerStore"
import { fetchRecordings } from "@/components/audio-player/AudioPlayerService"
import { useEffect } from "react"

const MusicSection = () => {
  const { setCurrentSong, songs, setSongs } = useAudioPlayer()
  useEffect(() => {
    fetchRecordings().then((response) => {
      if (response && response?.length > 0) setSongs(response)
    })
  }, [])

  return (
    <Card className="w-full shadow-md dark:shadow-elevated">
      <CardHeader className="text-center">
        <CardTitle className="text-center">SELECTED RECORDINGS</CardTitle>
        <CardDescription>
          Recordings I have engineered or played on.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <section className="flex flex-col gap-2">
          {songs.map((song) => (
            <SongItem
              key={song.id}
              song={song}
              selectSong={() => {
                setCurrentSong(song)
              }}
            />
          ))}
        </section>
      </CardContent>
      <CardFooter className="flex w-full justify-center gap-4"></CardFooter>
    </Card>
  )
}

export default MusicSection
