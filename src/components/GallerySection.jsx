import React from 'react';

const GallerySection = () => {
  // Add your image URLs here - as many as you want
  const images = [
    '/images/image_text.jpg',
    '/images/image_text.jpg',
    '/images/image_text.jpg',
    '/images/image_text.jpg',
    '/images/image_text.jpg',
    '/images/image_text.jpg',
    // Add more images as needed
  ];

  return (
    <section id="gallery" className="p-[40px_20px] md:p-[60px_24px] lg:p-[100px_60px] relative overflow-hidden">
      {/* Background nebula glow */}
      <div className="absolute w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-[radial-gradient(circle,rgba(139,92,246,0.12)_0%,transparent_60%)] rounded-full left-[-100px] md:left-[-200px] top-1/2 -translate-y-1/2 blur-[60px] md:blur-[80px] pointer-events-none"></div>
      <div className="absolute w-[200px] md:w-[400px] h-[200px] md:h-[400px] bg-[radial-gradient(circle,rgba(244,114,182,0.1)_0%,transparent_60%)] rounded-full right-[10%] bottom-[10%] blur-[40px] md:blur-[60px] pointer-events-none"></div>

      {/* Section Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-[30px] mb-[40px] md:mb-[60px] relative z-10">
        <h2 className="font-['Orbitron'] text-[24px] sm:text-[32px] md:text-[48px] font-bold tracking-[3px] md:tracking-[5px] flex items-center gap-3 md:gap-4 whitespace-nowrap">
          <span className="text-[#a855f7] text-[18px] md:text-[24px]">◈</span>
          <span className="bg-gradient-to-r from-[#c084fc] via-[#a855f7] to-[#f472b6] bg-clip-text text-transparent [filter:drop-shadow(0_0_20px_rgba(168,85,247,0.4))]">GALLERY</span>
        </h2>
        <div className="flex-1 w-full sm:w-auto h-[2px] bg-gradient-to-r from-[#a855f7] via-[#f472b6] to-transparent relative hidden sm:block">
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-[#f472b6] rounded-full shadow-[0_0_10px_rgba(244,114,182,0.6)]"></div>
        </div>
      </div>

      {/* Infinite Scroll Gallery */}
      <div className="relative z-10 overflow-hidden">
        <div className="gallery-scroll flex gap-4 md:gap-6">
          {/* First set of images */}
          {images.map((img, index) => (
            <div
              key={`img-1-${index}`}
              className="gallery-item flex-shrink-0 w-[280px] md:w-[350px] h-[180px] md:h-[220px] rounded-xl overflow-hidden border border-[rgba(168,85,247,0.3)] hover:border-[rgba(168,85,247,0.6)] transition-all duration-300 hover:shadow-[0_0_30px_rgba(168,85,247,0.3)] cursor-pointer group"
            >
              <img
                src={img}
                alt={`Gallery ${index + 1}`}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
          ))}
          {/* Duplicate set for seamless loop */}
          {images.map((img, index) => (
            <div
              key={`img-2-${index}`}
              className="gallery-item flex-shrink-0 w-[280px] md:w-[350px] h-[180px] md:h-[220px] rounded-xl overflow-hidden border border-[rgba(168,85,247,0.3)] hover:border-[rgba(168,85,247,0.6)] transition-all duration-300 hover:shadow-[0_0_30px_rgba(168,85,247,0.3)] cursor-pointer group"
            >
              <img
                src={img}
                alt={`Gallery ${index + 1}`}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
          ))}
        </div>

        {/* Fade edges */}
        <div className="absolute top-0 left-0 w-[100px] md:w-[150px] h-full bg-gradient-to-r from-[#030014] to-transparent pointer-events-none z-10"></div>
        <div className="absolute top-0 right-0 w-[100px] md:w-[150px] h-full bg-gradient-to-l from-[#030014] to-transparent pointer-events-none z-10"></div>
      </div>

      {/* CSS Animation */}
      <style jsx>{`
        .gallery-scroll {
          animation: scroll-gallery 30s linear infinite;
        }

        .gallery-scroll:hover {
          animation-play-state: paused;
        }

        @keyframes scroll-gallery {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
};

export default GallerySection;
