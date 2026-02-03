import React, { useState, useRef, useEffect } from 'react'

const Gallery = () => {
    const [isPaused, setIsPaused] = useState(false)
    const scrollRef = useRef(null)
    const scrollPositionRef = useRef(0)

    // All 13 images from public/gallery
    const images = [
        { id: 1, src: '/gallery/gallery1.jpeg' },
        { id: 2, src: '/gallery/gallery2.jpeg' },
        { id: 3, src: '/gallery/gallery3.jpeg' },
        { id: 4, src: '/gallery/gallery4.jpeg' },
        { id: 5, src: '/gallery/gallery5.jpeg' },
        { id: 6, src: '/gallery/gallery6.jpeg' },
        { id: 7, src: '/gallery/gallery7.jpeg' },
        { id: 8, src: '/gallery/gallery8.jpeg' },
        { id: 9, src: '/gallery/gallery9.jpeg' },
        { id: 10, src: '/gallery/gallery10.jpeg' },
        { id: 11, src: '/gallery/gallery11.jpeg' },
        { id: 12, src: '/gallery/gallery12.jpeg' },
        { id: 13, src: '/gallery/gallery13.jpeg' }
    ]

    // Duplicate images for seamless infinite scroll
    const duplicatedImages = [...images, ...images]

    useEffect(() => {
        const scrollContainer = scrollRef.current
        if (!scrollContainer) return

        let animationId
        const scrollSpeed = 0.8

        const animate = () => {
            if (!isPaused) {
                scrollPositionRef.current += scrollSpeed

                // Reset to beginning for seamless loop
                if (scrollPositionRef.current >= scrollContainer.scrollWidth / 2) {
                    scrollPositionRef.current = 0
                }

                scrollContainer.scrollLeft = scrollPositionRef.current
            }
            animationId = requestAnimationFrame(animate)
        }

        animationId = requestAnimationFrame(animate)

        return () => {
            cancelAnimationFrame(animationId)
        }
    }, [isPaused])

    return (
        <section id="gallery" className="relative z-30 py-16 md:py-32">
            {/* Background Glow Effect */}
            <div className="absolute top-1/4 right-0 w-[250px] md:w-[500px] h-[250px] md:h-[500px] bg-purple-600/10 blur-[120px] md:blur-[180px] rounded-full pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-16 lg:px-32">
                {/* Section Header */}
                <div className="text-center mb-10 md:mb-16">
                    <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-tight section-heading">
                        EVENT GALLERY
                    </h2>
                    <p className="text-white/60 mt-3 md:mt-4 max-w-xl mx-auto text-sm sm:text-base px-4">
                        Glimpses from our previous hackathons and amazing innovations
                    </p>
                </div>
            </div>

            {/* Auto-scrolling Gallery */}
            <div
                ref={scrollRef}
                className="flex gap-3 md:gap-6 overflow-x-hidden cursor-pointer py-4 px-2"
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
                onTouchStart={() => setIsPaused(true)}
                onTouchEnd={() => setIsPaused(false)}
            >
                {duplicatedImages.map((image, idx) => (
                    <div
                        key={`${image.id}-${idx}`}
                        className="flex-shrink-0 w-56 h-36 sm:w-72 sm:h-48 md:w-96 md:h-64 relative group overflow-hidden rounded-xl md:rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm transition-all duration-500 hover:scale-105 hover:border-white/20"
                    >
                        {/* Actual Image */}
                        <img
                            src={image.src}
                            alt={`Gallery image ${image.id}`}
                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            loading="lazy"
                        />

                        {/* Hover Overlay with Gradient */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300" />

                        {/* Decorative corner glow on hover */}
                        <div className="absolute top-0 right-0 w-20 h-20 bg-[#2DD4BF]/20 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Gallery
