import React from 'react'
import { AnimateOnScroll } from '../hooks/useScrollAnimation'

const About = () => {
    return (
        <section id="about" className="relative z-30 py-16 md:py-32 px-4 sm:px-6 md:px-16 lg:px-32">
            {/* Background Glow Effect */}
            <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[200px] md:w-[400px] h-[200px] md:h-[400px] bg-blue-600/10 blur-[100px] md:blur-[150px] rounded-full pointer-events-none" />
            <div className="absolute top-1/3 right-1/4 w-[150px] md:w-[300px] h-[150px] md:h-[300px] bg-[#2DD4BF]/10 blur-[80px] md:blur-[120px] rounded-full pointer-events-none" />

            <div className="max-w-6xl mx-auto">
                {/* Section Header */}
                <AnimateOnScroll animation="fade-up">
                    <div className="text-center mb-10 md:mb-16">
                        <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-tight section-heading">
                            WHAT IS HACK2FUTURE?
                        </h2>
                    </div>
                </AnimateOnScroll>

                {/* Content Grid */}
                <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
                    {/* Left - Description */}
                    <AnimateOnScroll animation="fade-right" delay={100}>
                        <div className="space-y-4 md:space-y-6">
                            <p className="text-center md:text-xl text-white/80 leading-relaxed">
                                Hack2Future 2.0 is a 36-hour national-level innovation sprint designed to bridge the gap between academia and industry. This is not just another hackathon — it is a high-intensity prototyping platform where leading companies bring real-world problem statements and challenge the brightest student minds to build rapid, scalable solutions.
                            </p>
                            <p className="text-center md:text-xl text-white/80 leading-relaxed">
                                Participants will work directly on industry-driven challenges spanning technology, product innovation, automation, AI, cybersecurity, sustainability, and next-generation engineering domains. The focus is on transforming ideas into functional prototypes within 36 hours under the mentorship of industry experts and domain specialists.
                            </p>
                        </div>
                    </AnimateOnScroll>

                    {/* Right - Feature Cards */}
                    <div className="space-y-3 md:space-y-4">
                        {[
                            { title: 'Innovation', desc: 'Push boundaries with cutting-edge technologies' },
                            { title: 'Collaboration', desc: 'Team up with like-minded innovators' },
                            { title: 'Learning', desc: 'Gain hands-on experience with mentorship' }
                        ].map((feature, idx) => (
                            <AnimateOnScroll key={feature.title} animation="fade-left" delay={200 + idx * 100}>
                                <div className="p-4 md:p-5 bg-white/5 border border-white/10 rounded-xl md:rounded-2xl backdrop-blur-sm hover:bg-white/10 transition-all duration-300 group">
                                    <h3 className="text-base md:text-lg font-semibold text-white">{feature.title}</h3>
                                    <p className="text-white/60 text-xs md:text-sm mt-0.5 md:mt-1">{feature.desc}</p>
                                </div>
                            </AnimateOnScroll>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About

