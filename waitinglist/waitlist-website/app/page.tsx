import Header from '@/components/header'
import Hero from '@/components/hero'
import HowItWorks from '@/components/how-it-works'
import BuiltForTeams from '@/components/built-for-teams'
import Footer from '@/components/footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-primary/20 selection:text-primary">
      <Header />
      <Hero />
      <HowItWorks />
      <BuiltForTeams />
      <Footer />
    </main>
  )
}
