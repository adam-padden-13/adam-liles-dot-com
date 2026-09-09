import type { Song } from "@/types/Song"
import { store } from "@/firebase"
import { collection, getDocs } from "firebase/firestore"

export const fetchRecordings = async () => {
  const loadedSongs: Song[] = []
  try {
    const response = await getDocs(collection(store, "recordings"))
    response.forEach((song) => {
      let currentSong = song.data() as Song
      loadedSongs.push(currentSong)
    })
    return loadedSongs
  } catch (error) {
    console.error("error")
  }
}
