const milestones = [
  {
    year: "2018",
    title: "Company Founded",
    description: "Nebula Dynamics established with a vision to revolutionize space technology.",
  },
  {
    year: "2020",
    title: "First Launch",
    description: "Successfully launched our first reusable rocket, Pulsar-1, into orbit.",
  },
  {
    year: "2021",
    title: "ISS Partnership",
    description: "Signed historic agreement with NASA for cargo resupply missions.",
  },
  {
    year: "2022",
    title: "Satellite Constellation",
    description: "Deployed our first 50-satellite communication network.",
  },
  {
    year: "2023",
    title: "Space Tourism",
    description: "Launched our civilian astronaut program with 12 successful flights.",
  },
  {
    year: "2024",
    title: "Lunar Mission",
    description: "Completed first unmanned lunar landing and sample return mission.",
  },
]

export function TimelineSection() {
  return (
    <section id="timeline" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-primary font-medium">Our Journey</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mt-2 mb-4 text-balance">
            Milestones in Space History
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            From humble beginnings to industry leadership, every achievement brings us 
            closer to our interstellar goals.
          </p>
        </div>
        
        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-border hidden md:block" />
          
          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <div
                key={milestone.year}
                className={`flex flex-col md:flex-row items-center gap-8 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                <div className={`flex-1 ${index % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                  <div className="p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-colors inline-block">
                    <span className="text-primary font-bold text-lg">{milestone.year}</span>
                    <h3 className="text-xl font-semibold text-foreground mt-1 mb-2">
                      {milestone.title}
                    </h3>
                    <p className="text-muted-foreground">{milestone.description}</p>
                  </div>
                </div>
                
                <div className="relative z-10 w-4 h-4 rounded-full bg-primary border-4 border-background hidden md:block" />
                
                <div className="flex-1 hidden md:block" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
