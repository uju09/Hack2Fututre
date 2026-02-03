import { useEffect, useRef, useState } from 'react'

/**
 * Custom hook for scroll-triggered animations using Intersection Observer
 * @param {Object} options - Configuration options
 * @param {number} options.threshold - Visibility threshold (0-1)
 * @param {string} options.rootMargin - Root margin for observer
 * @returns {[React.RefObject, boolean]} - Ref to attach to element and visibility state
 */
export const useScrollAnimation = (options = {}) => {
    const { threshold = 0.1, rootMargin = '0px 0px -50px 0px' } = options
    const ref = useRef(null)
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const element = ref.current
        if (!element) return

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true)
                    observer.unobserve(element) // Only animate once
                }
            },
            { threshold, rootMargin }
        )

        observer.observe(element)

        return () => observer.disconnect()
    }, [threshold, rootMargin])

    return [ref, isVisible]
}

/**
 * Animation wrapper component for easy usage
 */
export const AnimateOnScroll = ({
    children,
    animation = 'fade-up',
    delay = 0,
    duration = 600,
    className = ''
}) => {
    const [ref, isVisible] = useScrollAnimation()

    const animations = {
        'fade-up': {
            initial: 'translate-y-8 opacity-0',
            animate: 'translate-y-0 opacity-100'
        },
        'fade-down': {
            initial: '-translate-y-8 opacity-0',
            animate: 'translate-y-0 opacity-100'
        },
        'fade-left': {
            initial: 'translate-x-8 opacity-0',
            animate: 'translate-x-0 opacity-100'
        },
        'fade-right': {
            initial: '-translate-x-8 opacity-0',
            animate: 'translate-x-0 opacity-100'
        },
        'zoom-in': {
            initial: 'scale-95 opacity-0',
            animate: 'scale-100 opacity-100'
        },
        'fade': {
            initial: 'opacity-0',
            animate: 'opacity-100'
        }
    }

    const anim = animations[animation] || animations['fade-up']

    return (
        <div
            ref={ref}
            className={`transition-all ${isVisible ? anim.animate : anim.initial} ${className}`}
            style={{
                transitionDuration: `${duration}ms`,
                transitionDelay: `${delay}ms`,
                transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)'
            }}
        >
            {children}
        </div>
    )
}

export default useScrollAnimation
