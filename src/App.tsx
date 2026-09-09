import AdamLogo1 from "@/assets/adam-logo-1.svg?react"
import AdamGtr from "@/assets/adam-gtr.png"
import MusicSection from "./sections/music-section/MusicSection"
import PlayerControls from "./components/audio-player/PlayerControls"
import React from "react"
import { useTheme } from "./components/theme-provider"
import { useAudioPlayer } from "./components/audio-player/audioPlayerStore"

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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
          <br />
          <br />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </section>
      <MusicSection />
      <section>
        <h3>Scores</h3>
      </section>
      <div>
        {currentSong && <PlayerControls resolvedTheme={resolvedTheme} />}
      </div>
    </main>
  )
}

export default App
