import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const SkillsSection = () => {
  return (
    <Card className="flex flex-col gap-2">
      <CardHeader className="text-center">
        <CardTitle className="text-center font-bold">SKILLS</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-2">
        <ul className="ml-5 list-disc self-center">
          <li>Proficient in DAWS (Logic Pro, Protools)</li>
          <li>Experience in professional recording studios</li>
          <li>Experience using multiple audio consoles</li>
          <li>Soldering experience and cable repair</li>
          <li>Understanding of signal flow</li>
          <li>Experience recording and mixing live performances</li>
          <li>Sound design</li>
          <li>Over 10 years experience as a working musician</li>
        </ul>
      </CardContent>
    </Card>
  )
}

export default SkillsSection
