import React from 'react'
import { AnimateOnScroll } from '../hooks/useScrollAnimation'

const timelineEvents = [
  {
    date: 'Feb 14',
    title: 'Website Launch & Registrations Open',
    description: 'The official Hack2Future website goes live and registrations begin.',
    status: 'completed',
  },
  {
    date: 'Feb 28',
    title: 'Registration Ends',
    description: 'Last day to register your team. Make sure you don\'t miss out!',
    status: 'upcoming',
  },
  {
    date: 'March 4',
    title: 'Top 60 Teams Announced',
    description: 'The top 60 teams will be selected and announced.',
    status: 'upcoming',
  },
  {
    date: 'March 14',
    title: 'Hackathon Starts',
    description: '24 hours of non-stop innovation begins! (Tentative)',
    status: 'upcoming',
    tentative: true,
  },
  {
    date: 'March 15',
    title: 'Hackathon Ends',
    description: 'Final submissions and demos. May the best team win! (Tentative)',
    status: 'upcoming',
    tentative: true,
  },
]

const Timeline = () => {
  return (
    <section id="timeline" className="relative z-30 py-16 md:py-32 px-4 sm:px-6 md:px-16 lg:px-32">
      {/* Background Glow Effects */}
      <div className="absolute top-1/4 left-0 w-[200px] md:w-[400px] h-[300px] md:h-[600px] bg-[#2563EB]/10 blur-[120px] md:blur-[180px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-[200px] md:w-[350px] h-[250px] md:h-[500px] bg-[#2DD4BF]/8 blur-[100px] md:blur-[160px] rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <AnimateOnScroll animation="fade-up">
          <div className="text-center mb-12 md:mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-tight section-heading">
              EVENT TIMELINE
            </h2>
            <p className="text-white/40 text-sm md:text-base mt-4 max-w-lg mx-auto">
              Key dates and milestones for Hack2Future
            </p>
          </div>
        </AnimateOnScroll>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#2563EB]/60 via-[#2DD4BF]/40 to-white/10 md:-translate-x-px" />

          {/* Timeline Events */}
          <div className="space-y-8 md:space-y-12">
            {timelineEvents.map((event, index) => {
              const isLeft = index % 2 === 0;
              return (
                <AnimateOnScroll
                  key={index}
                  animation={isLeft ? 'fade-right' : 'fade-left'}
                  delay={index * 120}
                >
                  <div className={`relative flex items-start gap-4 md:gap-0 ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
                    }`}>
                    {/* Content Card */}
                    <div className={`flex-1 pl-10 md:pl-0 ${isLeft ? 'md:pr-12 md:text-right' : 'md:pl-12 md:text-left'
                      }`}>
                      <div className={`group relative p-5 md:p-6 bg-gradient-to-b from-white/[0.07] to-white/[0.02] border border-white/10 rounded-xl md:rounded-2xl backdrop-blur-md hover:border-white/20 transition-all duration-500 hover:shadow-lg hover:shadow-[#2563EB]/5 ${event.status === 'completed' ? 'border-[#2DD4BF]/30' : ''
                        }`}>
                        {/* Subtle glow on hover */}
                        <div className={`absolute inset-0 rounded-xl md:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${event.status === 'completed'
                          ? 'bg-[#2DD4BF]/5'
                          : 'bg-[#2563EB]/5'
                          }`} />

                        <div className="relative z-10">
                          {/* Date Badge */}
                          <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase mb-3 ${event.status === 'completed'
                            ? 'bg-[#2DD4BF]/10 text-[#2DD4BF] border border-[#2DD4BF]/20'
                            : 'bg-[#2563EB]/10 text-[#93B4F8] border border-[#2563EB]/20'
                            }`}>
                            {event.date}
                            {event.tentative && (
                              <span className="text-white/30 text-[10px] ml-1 normal-case">• Tentative</span>
                            )}
                          </div>

                          {/* Title */}
                          <h3 className="text-lg md:text-xl font-bold text-white mb-2 tracking-tight">
                            {event.title}
                          </h3>

                          {/* Description */}
                          <p className="text-white/40 text-sm leading-relaxed">
                            {event.description}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Center Dot */}
                    <div className="absolute left-6 md:left-1/2 md:-translate-x-1/2 top-6 z-10 flex items-center justify-center">
                      <div className={`w-4 h-4 rounded-full border-2 ${event.status === 'completed'
                        ? 'bg-[#2DD4BF] border-[#2DD4BF]/50 shadow-[0_0_20px_rgba(45,212,191,0.3)]'
                        : 'bg-[#2563EB] border-[#2563EB]/40 shadow-[0_0_15px_rgba(37,99,235,0.25)]'
                        }`} />
                    </div>

                    {/* Spacer for opposite side */}
                    <div className="hidden md:block flex-1" />
                  </div>
                </AnimateOnScroll>
              )
            })}
          </div>

          {/* End Dot */}
          <div className="absolute left-6 md:left-1/2 -bottom-4 md:-translate-x-1/2">
            <div className="w-3 h-3 bg-white/20 rounded-full ring-4 ring-white/5" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Timeline
