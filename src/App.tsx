import AdamLogo1 from "@/assets/adam-logo-1.svg?react"
import AdamGtr from "@/assets/adam-gtr.png"
import MusicSection from "./sections/music-section/MusicSection"
import PlayerControls from "./components/audio-player/PlayerControls"
import React from "react"
import { useTheme } from "./components/theme-provider"
import { useAudioPlayer } from "./components/audio-player/audioPlayerStore"
import VideoSection from "./sections/composition-section/CompositionsSection"
import { Card, CardContent, CardHeader, CardTitle } from "./components/ui/card"

export function App() {
  const [resolvedTheme, setResolvedTheme] = React.useState<"light" | "dark">(
    "light"
  )
  const theme = useTheme()

  const { currentSong } = useAudioPlayer()

  // TODO: set resolved theme in global state with zustand
  React.useEffect(() => {
    const resolveTheme = () => {
      if (theme.theme === "system") {
        const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches
        setResolvedTheme(isDark ? "dark" : "light")
      } else {
        setResolvedTheme(theme.theme)
      }
    }

    resolveTheme()
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)")
    mediaQuery.addEventListener("change", resolveTheme)
    return () => mediaQuery.removeEventListener("change", resolveTheme)
  }, [theme.theme])

  return (
    <main
      className={`mx-auto flex min-h-svh max-w-280 flex-col gap-6 px-5 pt-4 ${currentSong ? "pb-26" : "pb-6"} `}
    >
      <header className="flex justify-center">
        <span className="flex flex-col items-center">
          <AdamLogo1 className="block h-auto w-full max-w-180 text-theme-blue" />
          <h2 className="-mt-1 font-semibold">MUSICIAN | COMPOSER | CREATOR</h2>
        </span>
      </header>
      <section className="flex flex-col gap-4 sm:flex-row">
        <div>
          <img
            src={AdamGtr}
            alt="Adam Liles Photographer: Christoper Jarvis"
            className="mx-auto block max-w-80"
          />
        </div>
        <p>
          I am a senior music technology student studying at Wayne State
          University. As I begin my last semester, I wanted to put together a
          portfolio to showcase my work. Below you will find a collection of
          diﬀerent examples demonstrating my ability to compose, record, mix,
          and perform diﬀerent styles of music.
          <br />
          <br />I also carry experience as a live sound engineer. From setting
          up, to mixing, to streaming, to syncing audio to video. I currently
          work at a number of diﬀerent venues in metro Detroit, mixing punk
          shows to full orchestras and everything in-between.
        </p>
      </section>
      <section>
        <MusicSection />
      </section>
      <section>
        <VideoSection />
      </section>
      <section>
        <Card className="w-full shadow-md dark:shadow-elevated">
          <CardHeader className="text-center">
            <CardTitle className="text-center">CONTACT</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col items-center gap-2">
            <span>
              <a href="mailto:adamliles123@gmail.com">adamliles123@gmail.com</a>
            </span>
            <span> 123-123-2323</span>
          </CardContent>
        </Card>
      </section>
      <div>
        {currentSong && <PlayerControls resolvedTheme={resolvedTheme} />}
      </div>
    </main>
  )
}

export default App
