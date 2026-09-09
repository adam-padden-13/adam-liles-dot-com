import AdamLogo1 from "@/assets/adam-logo-1.svg?react"
import AdamGtr from "@/assets/adam-gtr.jpg"
import MusicSection from "./sections/music-section/MusicSection"

export function App() {
  return (
    <main className="mx-auto flex min-h-svh w-full max-w-280 flex-col gap-6 p-6">
      <header className="flex justify-center">
        <AdamLogo1 className="block h-auto w-full max-w-180 text-theme-blue" />
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
    </main>
  )
}

export default App
