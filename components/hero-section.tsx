"use client"

import { Button } from "@/components/ui/button"
import { PlanetScene } from "@/components/planet-scene"
import { ArrowRight, Play } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <PlanetScene />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 mb-8">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          <span className="text-sm text-primary">Now accepting crew applications</span>
        </div>
        
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-foreground mb-6 text-balance">
          Pioneering the{" "}
          <span className="text-primary">Future</span>
          <br />
          of Space Exploration
        </h1>
        
        <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 text-pretty">
          Pushing the boundaries of human potential through revolutionary spacecraft 
          technology and interstellar innovation.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 gap-2">
            Explore Missions
            <ArrowRight className="h-4 w-4" />
          </Button>
          <Button size="lg" variant="outline" className="gap-2 border-border text-foreground hover:bg-secondary">
            <Play className="h-4 w-4" />
            Watch Launch
          </Button>
        </div>
        
        <div className="mt-20 grid grid-cols-3 gap-8 max-w-lg mx-auto">
          <div>
            <div className="text-3xl sm:text-4xl font-bold text-foreground">150+</div>
            <div className="text-sm text-muted-foreground">Missions Launched</div>
          </div>
          <div>
            <div className="text-3xl sm:text-4xl font-bold text-foreground">98%</div>
            <div className="text-sm text-muted-foreground">Success Rate</div>
          </div>
          <div>
            <div className="text-3xl sm:text-4xl font-bold text-foreground">12</div>
            <div className="text-sm text-muted-foreground">Active Satellites</div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  )
}
