import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import type { Song } from "@/types/Song"
import SongItem from "./SongItem"

const MusicSection = () => {
  const songs: Song[] = [
    {
      id: 1,
      title: "The Glow",
      cloudAudioURL: "https://example.com/audio/old-main.mp3",
      collectionName: "Vaega Old Main Sessions",
      description: "This was a piece that was inspired by my cat eating lunch.",
    },
    {
      id: 2,
      title: "Heat Lightning",
      cloudAudioURL: "https://example.com/audio/northbound.mp3",
      collectionName: "Ambient Pieces",
    },
    {
      id: 3,
      title: "Mary Jane",
      cloudAudioURL: "https://example.com/audio/after-the-rain.mp3",
      collectionName: "Pia - Wayne State Sessions",
    },
    {
      id: 4,
      title: "Old Days",
      cloudAudioURL: "https://example.com/audio/after-the-rain.mp3",
      collectionName: "Pia - Wayne State Sessions",
    },
    {
      id: 5,
      title: "Running Again",
      cloudAudioURL: "https://example.com/audio/after-the-rain.mp3",
      collectionName: "Pia - Wayne State Sessions",
    },
    {
      id: 6,
      title: "Stranger",
      cloudAudioURL: "https://example.com/audio/after-the-rain.mp3",
      collectionName: "Pia - Wayne State Sessions",
    },
    {
      id: 7,
      title: "The Middle",
      cloudAudioURL: "https://example.com/audio/after-the-rain.mp3",
      collectionName: "Pia - Wayne State Sessions",
    },
  ]

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
            <SongItem key={song.id} song={song} selectSong={() => {}} />
          ))}
        </section>
      </CardContent>

      <CardFooter className="flex w-full justify-center gap-4"></CardFooter>
    </Card>
  )
}

export default MusicSection
