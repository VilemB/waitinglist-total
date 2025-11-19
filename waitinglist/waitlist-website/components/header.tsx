'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2">
          <span className="font-sans text-2xl font-bold tracking-tight text-foreground">
            Stepps.ai
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          <Link href="#how-it-works" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            How it works
          </Link>
          <Link href="#features" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Features
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <Button
            className="bg-brand-dark hover:bg-brand-dark/90 text-white border-0 font-medium rounded-full px-6"
          >
            Join Waitlist
          </Button>
        </div>
      </div>
    </header>
  )
}
