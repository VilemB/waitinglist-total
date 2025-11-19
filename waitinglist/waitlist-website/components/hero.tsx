'use client'

import { HeroGeometric } from "@/components/ui/shape-landing-hero"

export default function Hero() {
  return (
    <HeroGeometric
      badge="Coming Soon"
      title1="Step-by-Step Guides"
      title2="Made Simple"
      description="Create beautiful, step-by-step guides and documentation in seconds with Stepps.ai."
      showButton={true}
      buttonText="Join Waitlist"
    />
  )
}
