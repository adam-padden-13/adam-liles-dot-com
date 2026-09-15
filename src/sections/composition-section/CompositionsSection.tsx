import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { VIDEOS, type Video } from "@/types/Video"
import { useState } from "react"
import LiteYouTubeEmbed from "react-lite-youtube-embed"
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css"

const CompositionsSection = () => {
  const [selectedVideo, setSelectedVideo] = useState<Video>(VIDEOS[0])

  return (
    <Card className="w-full shadow-md dark:shadow-elevated">
      <CardHeader className="text-center">
        <CardTitle className="text-center">COMPOSITIONS | SCORES</CardTitle>
      </CardHeader>
      <CardContent>
        <section className="flex flex-col items-center gap-2">
          <LiteYouTubeEmbed
            id={selectedVideo.id}
            title={selectedVideo.title}
            style={{ width: "100%", maxWidth: 1000 }}
          />
          <span className="text-md font-bold">{selectedVideo.title}ddd</span>
          <span className="text-sm">{selectedVideo.description}</span>
          <Carousel
            opts={{
              align: "start",
            }}
            className="w-full max-w-250"
          >
            <CarouselContent>
              {VIDEOS.map((video) => (
                <CarouselItem
                  key={video.id}
                  className="flex basis-1/2 md:basis-1/4 lg:basis-1/4"
                >
                  <div className="flex w-full p-1">
                    <Card
                      className="h-full w-full cursor-pointer"
                      onClick={() => setSelectedVideo(video)}
                    >
                      <CardContent className="flex h-full flex-col items-center justify-center gap-2 p-2">
                        <div className="aspect-video w-full overflow-hidden p-1">
                          <img
                            src={video.thumbnailURL}
                            alt={video.title}
                            className="block h-full w-full object-cover"
                          />
                        </div>
                        <span className="line-clamp-2 min-h-8 text-center text-xs font-semibold">
                          {video.title}
                        </span>
                        <span className="line-clamp-2 min-h-8 text-center text-xs">
                          {video.description}
                        </span>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </section>
      </CardContent>
    </Card>
  )
}

export default CompositionsSection
