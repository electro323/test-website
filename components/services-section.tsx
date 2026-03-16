import { Rocket, Satellite, Users, Microscope, ArrowUpRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const services = [
  {
    icon: Rocket,
    title: "Launch Services",
    description: "Reliable payload delivery to LEO, GEO, and beyond with our reusable rocket fleet.",
    features: ["Heavy-lift capability", "Rideshare options", "Dedicated launches"],
  },
  {
    icon: Satellite,
    title: "Satellite Deployment",
    description: "End-to-end satellite constellation deployment and management solutions.",
    features: ["Constellation design", "Orbital insertion", "Debris mitigation"],
  },
  {
    icon: Users,
    title: "Space Tourism",
    description: "Exclusive orbital experiences for civilian astronauts and researchers.",
    features: ["Suborbital flights", "Orbital stays", "Lunar flybys"],
  },
  {
    icon: Microscope,
    title: "Research Platforms",
    description: "Microgravity research facilities for pharmaceutical and materials science.",
    features: ["ISS partnerships", "Private labs", "Data services"],
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-24 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-primary font-medium">Our Services</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mt-2 mb-4 text-balance">
            Comprehensive Space Solutions
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            From launch to orbit and beyond, we provide the complete suite of services 
            needed for your space mission success.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="group p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                  <service.icon className="h-7 w-7 text-primary" />
                </div>
                <ArrowUpRight className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
              
              <h3 className="text-xl font-semibold text-foreground mb-3">{service.title}</h3>
              <p className="text-muted-foreground mb-6">{service.description}</p>
              
              <ul className="flex flex-wrap gap-2">
                {service.features.map((feature) => (
                  <li
                    key={feature}
                    className="px-3 py-1 text-sm rounded-full bg-secondary text-secondary-foreground"
                  >
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
            Request Custom Quote
          </Button>
        </div>
      </div>
    </section>
  )
}
