'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { ArrowRight, CheckCircle2, Twitter, Linkedin } from 'lucide-react'
import Link from 'next/link'
import { WaitlistForm } from '@/components/waitlist-form'

export default function Footer() {
    return (
        <footer className="relative w-full">
            {/* CTA Section - Dark Background */}
            <div className="bg-brand-dark text-white py-20 px-4 sm:px-6 lg:px-8 rounded-t-[2.5rem] mt-20 relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-20 pointer-events-none">
                    <div className="absolute inset-0 bg-[linear-gradient(30deg,#ffffff_1px,transparent_1px),linear-gradient(150deg,#ffffff_1px,transparent_1px)] [background-size:20px_20px]" />
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_0%,transparent_50%)]" />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent" />
                </div>
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col lg:flex-row items-start justify-between gap-12 lg:gap-24">

                        {/* Left Side: Heading & Description */}
                        <div className="max-w-2xl w-full">
                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 leading-[1.1] font-sans">
                                Generate Ideas, <br />
                                build confidence
                            </h2>
                            <p className="text-lg text-white/60 mb-8 max-w-xl leading-relaxed">
                                Get started with Stepps.ai today. Stop writing docs manually and start generating beautiful guides in seconds.
                            </p>

                            <WaitlistForm variant="footer" />
                        </div>
                    </div>

                    {/* Footer Links Section - Simplified */}
                    <div className="mt-24 pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between gap-12 items-center">

                        {/* Brand */}
                        <div className="space-y-4">
                            <Link href="/" className="flex items-center gap-2">
                                <span className="font-sans text-2xl font-bold tracking-tight text-white">
                                    Stepps.ai
                                </span>
                            </Link>
                        </div>

                        {/* Copyright & Legal */}
                        <div className="flex flex-col sm:flex-row items-center gap-6 text-xs text-white/40">
                            <p>© 2025 Stepps.ai. All rights reserved.</p>
                            <div className="flex gap-6">
                                <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
                                <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
