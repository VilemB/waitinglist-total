'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { ArrowRight, CheckCircle2, Twitter, Linkedin } from 'lucide-react'
import Link from 'next/link'

export default function Footer() {
    const [email, setEmail] = useState('')
    const [submitted, setSubmitted] = useState(false)

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        // Simulate submission
        setSubmitted(true)
        setTimeout(() => setSubmitted(false), 3000)
    }

    return (
        <footer className="relative w-full">
            {/* CTA Section - Dark Background */}
            <div className="bg-brand-dark text-white py-20 px-4 sm:px-6 lg:px-8 rounded-t-[2.5rem] mt-20">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col lg:flex-row items-start justify-between gap-12 lg:gap-24">

                        {/* Left Side: Heading & Description */}
                        <div className="max-w-2xl">
                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 leading-[1.1] font-sans">
                                Generate Ideas, <br />
                                build confidence
                            </h2>
                            <p className="text-lg text-white/60 mb-8 max-w-xl leading-relaxed">
                                Get started with Stepps.ai today. Stop writing docs manually and start generating beautiful guides in seconds.
                            </p>

                            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md">
                                <Input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="bg-white/10 border-white/10 text-white placeholder:text-white/40 h-12 rounded-full px-6 focus-visible:ring-primary focus-visible:border-primary"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                                <Button
                                    type="submit"
                                    size="lg"
                                    className="bg-white text-brand-dark hover:bg-white/90 h-12 px-8 rounded-full font-medium transition-all"
                                >
                                    {submitted ? (
                                        <span className="flex items-center gap-2">
                                            <CheckCircle2 className="w-5 h-5" /> Joined
                                        </span>
                                    ) : (
                                        <span className="flex items-center gap-2">
                                            Join Waitlist
                                        </span>
                                    )}
                                </Button>
                            </form>
                        </div>

                        {/* Right Side: Abstract Visual or Empty for balance */}
                        <div className="hidden lg:block relative w-full max-w-md">
                            {/* Placeholder for visual balance if needed, currently empty as per reference clean look */}
                        </div>
                    </div>

                    {/* Footer Links Section */}
                    <div className="mt-24 pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between gap-12">

                        {/* Brand */}
                        <div className="space-y-4">
                            <Link href="/" className="flex items-center gap-2">
                                <span className="font-sans text-2xl font-bold tracking-tight text-white">
                                    Stepps.ai
                                </span>
                            </Link>
                        </div>

                        {/* Links Grid */}
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-12 lg:gap-24">
                            <div className="space-y-4">
                                <h4 className="font-medium text-white">Product</h4>
                                <ul className="space-y-3 text-sm text-white/60">
                                    <li><Link href="#" className="hover:text-white transition-colors">Features</Link></li>
                                    <li><Link href="#" className="hover:text-white transition-colors">Pricing</Link></li>
                                    <li><Link href="#" className="hover:text-white transition-colors">Changelog</Link></li>
                                </ul>
                            </div>

                            <div className="space-y-4">
                                <h4 className="font-medium text-white">Resources</h4>
                                <ul className="space-y-3 text-sm text-white/60">
                                    <li><Link href="#" className="hover:text-white transition-colors">Documentation</Link></li>
                                    <li><Link href="#" className="hover:text-white transition-colors">API</Link></li>
                                    <li><Link href="#" className="hover:text-white transition-colors">Community</Link></li>
                                </ul>
                            </div>

                            <div className="space-y-4">
                                <h4 className="font-medium text-white">Social</h4>
                                <ul className="space-y-3 text-sm text-white/60">
                                    <li><Link href="#" className="hover:text-white transition-colors flex items-center gap-2"><Twitter className="w-4 h-4" /> Twitter</Link></li>
                                    <li><Link href="#" className="hover:text-white transition-colors flex items-center gap-2"><Linkedin className="w-4 h-4" /> LinkedIn</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Bottom Bar */}
                    <div className="mt-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-white/40">
                        <p>© 2025 Stepps.ai. All rights reserved.</p>
                        <div className="flex gap-6">
                            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
                            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
