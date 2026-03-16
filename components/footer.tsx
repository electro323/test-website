import Link from "next/link"
import { Rocket } from "lucide-react"

const footerLinks = {
  company: [
    { label: "About", href: "#about" },
    { label: "Careers", href: "#" },
    { label: "Press", href: "#" },
    { label: "Partners", href: "#" },
  ],
  services: [
    { label: "Launch Services", href: "#services" },
    { label: "Satellite Deployment", href: "#services" },
    { label: "Space Tourism", href: "#services" },
    { label: "Research", href: "#services" },
  ],
  resources: [
    { label: "Documentation", href: "#" },
    { label: "API Access", href: "#" },
    { label: "Support", href: "#" },
    { label: "Status", href: "#" },
  ],
}

export function Footer() {
  return (
    <footer className="py-16 bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Rocket className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold text-foreground">Nebula Dynamics</span>
            </Link>
            <p className="text-muted-foreground text-sm">
              Pioneering the future of space exploration through innovative technology 
              and sustainable practices.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold text-foreground mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-foreground mb-4">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-foreground mb-4">Resources</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm">
            2024 Nebula Dynamics. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
              Privacy Policy
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
