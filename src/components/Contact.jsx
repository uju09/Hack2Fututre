import React from 'react'
import { AnimateOnScroll } from '../hooks/useScrollAnimation'

const Contact = () => {
    return (
        <section id="contact" className="relative z-30 py-16 md:py-32 px-4 sm:px-6 md:px-16 lg:px-32 overflow-hidden">
            {/* Background Glow Effects */}
            <div className="absolute top-1/4 left-0 w-[400px] h-[400px] bg-[#2563EB]/15 blur-[180px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-[#2DD4BF]/10 blur-[150px] rounded-full pointer-events-none" />

            {/* Floating Stars */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-20 left-[10%] w-1 h-1 bg-white/40 rounded-full animate-pulse" />
                <div className="absolute top-40 right-[20%] w-1.5 h-1.5 bg-white/30 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
                <div className="absolute bottom-32 left-[30%] w-1 h-1 bg-white/50 rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
                <div className="absolute top-1/2 right-[15%] w-0.5 h-0.5 bg-white/60 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
            </div>

            <div className="max-w-6xl mx-auto relative">
                {/* Section Header */}
                <AnimateOnScroll animation="fade-up">
                    <div className="text-center mb-12 md:mb-20">
                        <p className="text-[#2DD4BF] text-sm font-medium tracking-widest uppercase mb-4">Get In Touch</p>
                        <h2 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight section-heading">
                            CONTACT US
                        </h2>
                        <p className="text-white/50 mt-4 md:mt-6 max-w-lg mx-auto text-base md:text-lg">
                            Ready to innovate? Reach out to us and let's build the future together.
                        </p>
                    </div>
                </AnimateOnScroll>

                {/* Main Contact Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 md:gap-8">

                    {/* Left Column - Contact Cards */}
                    <div className="lg:col-span-3 space-y-6 ">
                        {/* Email Card */}
                        <AnimateOnScroll animation="fade-right" delay={100}>
                            <div className="group relative p-6 md:p-8 my-2 bg-gradient-to-br from-white/[0.08] to-white/[0.02] border border-white/10 rounded-2xl md:rounded-3xl backdrop-blur-xl overflow-hidden hover:border-[#2DD4BF]/30 transition-all duration-500">
                                {/* Hover Glow */}
                                <div className="absolute inset-0 bg-gradient-to-r from-[#2563EB]/5 to-[#2DD4BF]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                <div className="relative flex items-start gap-5">
                                    <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br from-[#2563EB] to-[#2DD4BF] p-[1px]">
                                        <div className="w-full h-full rounded-2xl bg-[#020617] flex items-center justify-center">
                                            <svg className="w-6 h-6 text-[#2DD4BF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-xl font-bold  text-white mb-3">Email Us</h3>
                                        <div className="space-y-2">
                                            <a href="mailto:hackathon@iiitdwd.ac.in" className="block text-white/80 hover:text-[#2DD4BF] transition-colors">
                                                hackathon@iiitdwd.ac.in
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </AnimateOnScroll>

                        {/* Phone Card */}
                        <AnimateOnScroll animation="fade-right" delay={200}>
                            <div className="group relative p-6 md:p-8 bg-gradient-to-br from-white/[0.08] to-white/[0.02] border border-white/10 rounded-2xl md:rounded-3xl backdrop-blur-xl overflow-hidden hover:border-[#2DD4BF]/30 transition-all duration-500">
                                <div className="absolute inset-0 bg-gradient-to-r from-[#2563EB]/5 to-[#2DD4BF]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                <div className="relative flex items-start gap-5">
                                    <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br from-[#2563EB] to-[#2DD4BF] p-[1px]">
                                        <div className="w-full h-full rounded-2xl bg-[#020617] flex items-center justify-center">
                                            <svg className="w-6 h-6 text-[#2DD4BF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <h3 className="text-xl font-bold text-white mb-3">Call Us</h3>
                                        <div className="space-y-3">
                                            <div>
                                                <div className="block text-lg text-white/80 hover:text-[#2DD4BF] transition-colors">
                                                    +91 9789880949 (Prajin - Tech Secretary)
                                                </div>
                                       
                                            </div>
                                            <div>
                                                <div className="block text-lg text-white/80 hover:text-[#2DD4BF] transition-colors">
                                                    +91 8489889568 (Prem - Cultural Secretary)
                                                </div>
                           
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </AnimateOnScroll>

                        {/* Location Card */}
                        <AnimateOnScroll animation="fade-right" delay={300}>
                            <div className="group relative p-6 md:p-8 bg-gradient-to-br from-white/[0.08] to-white/[0.02] border border-white/10 rounded-2xl md:rounded-3xl backdrop-blur-xl overflow-hidden hover:border-[#2DD4BF]/30 transition-all duration-500">
                                <div className="absolute inset-0 bg-gradient-to-r from-[#2563EB]/5 to-[#2DD4BF]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                <div className="relative flex items-start gap-5">
                                    <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br from-[#2563EB] to-[#2DD4BF] p-[1px]">
                                        <div className="w-full h-full rounded-2xl bg-[#020617] flex items-center justify-center">
                                            <svg className="w-6 h-6 text-[#2DD4BF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <h3 className="text-xl font-bold text-white mb-3">Visit Us</h3>
                                        <p className="text-lg text-white/70 leading-relaxed">
                                            IIIT Dharwad Campus, Ittigatti Road, Near Sattur Colony, Dharwad 580009, Karnataka
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </AnimateOnScroll>
                    </div>

                    {/* Right Column - Social & Team */}
                    <div className="lg:col-span-2 space-y-11">
                        {/* Connect Card */}
                        <AnimateOnScroll animation="fade-left" delay={150}>
                            <div className="relative p-6 my-5 md:p-8 bg-gradient-to-br from-white/[0.08] to-white/[0.02] border border-white/10 rounded-2xl md:rounded-3xl backdrop-blur-xl overflow-hidden h-full">
                                {/* Decorative Element */}
                                <div className="absolute top-0 right-0 w-32 h-32 bg-[#2DD4BF]/10 blur-[60px] rounded-full" />

                                <div className="relative">
                                    <h3 className="text-xl font-bold text-white mb-2">Connect With Us</h3>
                                    <p className="text-white/40 text-sm mb-6">Follow us for updates</p>

                                    <div className="grid grid-cols-2 gap-3">
                                        {[
                                            {
                                                name: 'Instagram', icon: (
                                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                                    </svg>
                                                ), color: 'hover:bg-pink-500/20 hover:border-pink-500/50', href: '#'
                                            },
                                            {
                                                name: 'LinkedIn', icon: (
                                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                                    </svg>
                                                ), color: 'hover:bg-blue-600/20 hover:border-blue-600/50', href: '#'
                                            },
                                        ].map((social) => (
                                            <a
                                                key={social.name}
                                                href={social.href}
                                                className={`flex items-center gap-3 p-4 bg-white/5 border border-white/10 rounded-xl text-white/70 hover:text-white transition-all duration-300 ${social.color}`}
                                            >
                                                {social.icon}
                                                <span className="text-sm font-medium">{social.name}</span>
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </AnimateOnScroll>

                        {/* Team Card */}
                        <AnimateOnScroll animation="fade-left" delay={250}>
                            <div className="relative p-6 md:p-8 bg-gradient-to-br from-white/[0.08] to-white/[0.02] border border-white/10 rounded-2xl md:rounded-3xl backdrop-blur-xl overflow-hidden">
                                <div className="absolute bottom-0 left-0 w-24 h-24 bg-[#2563EB]/15 blur-[50px] rounded-full" />

                                <div className="relative">
                                    <h3 className="text-xl font-bold text-white mb-2">Organizing Team</h3>
                                    <div className="space-y-4">
                                        {[
                                            { name: 'Prajin', role: 'Tech Secretary' },
                                            { name: 'Prem', role: 'Cultural Secretary' },
                                        ].map((member, idx) => (
                                            <div key={member.name} className="flex items-center gap-4 p-3 rounded-xl hover:bg-white/5 transition-colors">
                                                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#2563EB] to-[#2DD4BF] flex items-center justify-center text-white font-bold text-sm">
                                                    {member.name.split(' ').map(n => n[0]).join('')}
                                                </div>
                                                <div>
                                                    <p className="text-white font-medium text-sm">{member.name}</p>
                                                    <p className="text-white/40 text-xs">{member.role}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </AnimateOnScroll>
                    </div>
                </div>

                {/* Bottom CTA */}
                <AnimateOnScroll animation="fade-up" delay={400}>
                    <div className="mt-12 md:mt-16 text-center">
                        <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 rounded-full">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#2DD4BF] opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#2DD4BF]"></span>
                            </span>
                            <span className="text-white/60 text-sm">Open for registrations</span>
                        </div>
                    </div>
                </AnimateOnScroll>
            </div>
        </section>
    )
}

export default Contact
