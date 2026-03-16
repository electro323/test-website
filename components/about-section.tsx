import { Orbit, Zap, Shield, Globe } from "lucide-react"

const features = [
  {
    icon: Orbit,
    title: "Advanced Propulsion",
    description: "Next-generation ion engines capable of achieving unprecedented speeds for deep space exploration.",
  },
  {
    icon: Zap,
    title: "Clean Energy",
    description: "Solar sail technology and nuclear fusion reactors powering sustainable space travel.",
  },
  {
    icon: Shield,
    title: "Safety First",
    description: "Triple-redundant systems and AI-powered navigation ensuring crew safety on every mission.",
  },
  {
    icon: Globe,
    title: "Global Impact",
    description: "Partnering with space agencies worldwide to democratize access to the cosmos.",
  },
]

export function AboutSection() {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-primary font-medium">About Us</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mt-2 mb-6 text-balance">
              Redefining What's Possible in Space
            </h2>
            <p className="text-muted-foreground text-lg mb-6">
              Founded in 2018, Nebula Dynamics has rapidly evolved from a small team of 
              aerospace visionaries to a global leader in space technology innovation. 
              Our mission is simple: make space accessible to humanity.
            </p>
            <p className="text-muted-foreground text-lg">
              With cutting-edge research facilities across three continents and partnerships 
              with leading space agencies, we're building the infrastructure for humanity's 
              multi-planetary future.
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-6">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-colors"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
