import { motion, AnimatePresence } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';

export default function HeroSlider() {
  const slideData = [
    {
      id: 1,
      bgColor: "#b4b195",
      mainImage: "images/main-slider/content-image-1.png",
      fruitIcon: "images/main-slider/icon-1.png",
      petalIcon: "images/main-slider/icon-2.png",
      bgIcon: "images/main-slider/icon-3.png",
    },
    {
      id: 2,
      bgColor: "#b4b195",
      mainImage: "images/main-slider/content-image-2.png",
      fruitIcon: "images/main-slider/icon-1.png", 
      petalIcon: "images/main-slider/icon-6.png",
      bgIcon: "images/main-slider/icon-3.png",
    },
    {
      id: 3,
      bgColor: "#a79bac",
      mainImage: "images/main-slider/content-image-3.png",
      fruitIcon: "images/main-slider/icon-1.png",
      petalIcon: "images/main-slider/icon-7.png",
      bgIcon: "images/main-slider/icon-3.png",
    }
  ];

  return (
    <section className="relative h-screen min-h-[560px] md:min-h-[700px] overflow-hidden">
      <Swiper
        modules={[EffectFade, Autoplay]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        loop={true}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        className="h-full"
      >
        {slideData.map((slide) => (
          <SwiperSlide key={slide.id}>
            {({ isActive }) => (
              <div 
                className="w-full h-full transition-colors duration-1000 flex items-center justify-center pt-12 md:pt-16 lg:pt-0"
                style={{ backgroundColor: slide.bgColor }}
              >
                <div className="container mx-auto px-6 h-full relative flex flex-col lg:flex-row items-center justify-center lg:justify-between">
                  
                  {/* 1. LEFT CONTENT - Adjusted for Small Screens */}
                  <div className="w-full lg:w-1/2 z-20 text-center lg:text-left order-2 lg:order-1 mt-4 md:mt-8 lg:mt-0">
                    <AnimatePresence mode="wait">
                      {isActive && (
                        <motion.div 
                          initial={{ opacity: 0, y: 30 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -30 }}
                          transition={{ duration: 0.8, ease: "easeOut" }}
                        >
                          {/* Heading: text-4xl on tiny screens, 8xl on desktop */}
                          <h1 className="text-white font-cursive text-4xl sm:text-6xl md:text-7xl lg:text-8xl mb-2 md:mb-4 leading-tight drop-shadow-md">
                            Healthy <br className="hidden sm:block" /> Smoothie
                          </h1>
                          
                          <p className="text-white/90 text-xs sm:text-base md:text-lg max-w-[280px] sm:max-w-sm mx-auto lg:mx-0 mb-4 md:mb-8 leading-relaxed line-clamp-3 sm:line-clamp-none">
                            Consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam.
                          </p>
                          
                          <button className="group relative inline-flex items-center gap-3 md:gap-4 bg-[#d99494] text-white px-5 md:px-8 py-2 md:py-2.5 rounded-full shadow-lg transition-all hover:bg-[#c68383] active:scale-95">
                            <div className="bg-white/20 p-1.5 md:p-2 rounded-full flex items-center justify-center">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 md:h-4 md:w-4 fill-current" viewBox="0 0 24 24">
                                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                              </svg>
                            </div>
                            <span className="font-bold text-[10px] md:text-sm uppercase tracking-wide pr-1">Buy Now</span>
                          </button>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* 2. RIGHT SIDE: The Jar - Height constrained for Mobile */}
                  <div className="w-full lg:w-1/2 relative flex justify-center items-center order-1 lg:order-2 h-[30%] sm:h-auto">
                    <AnimatePresence mode="wait">
                      {isActive && (
                        <motion.img 
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.9 }}
                          transition={{ duration: 0.6 }}
                          src={slide.mainImage} 
                          className="relative z-10 h-full lg:h-auto w-auto lg:w-full max-w-[180px] sm:max-w-xs md:max-w-md lg:max-w-lg object-contain" 
                          alt="Smoothie Jar" 
                        />
                      )}
                    </AnimatePresence>

                    {/* Faded Background Icon - Hidden on smallest phones */}
                    <AnimatePresence mode="wait">
                      {isActive && (
                        <motion.img 
                          initial={{ opacity: 0, scale: 0.5 }}
                          animate={{ opacity: 0.15, scale: 1 }}
                          transition={{ duration: 1 }}
                          src={slide.bgIcon} 
                          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-32 md:w-48 z-0 pointer-events-none hidden sm:block" 
                        />
                      )}
                    </AnimatePresence>
                  </div>

                  {/* 3. FLYING DECORATIONS - Repositioned for small viewports */}
                  
                  {/* Top Right Fruit */}
                  <AnimatePresence mode="wait">
                    {isActive && (
                      <motion.img 
                        initial={{ opacity: 0, x: 50, y: -50 }}
                        animate={{ opacity: 1, x: 0, y: 0 }}
                        transition={{ duration: 1, delay: 0.5 }}
                        src={slide.fruitIcon} 
                        className="absolute top-0 right-0 w-24 sm:w-48 lg:w-64 z-30 pointer-events-none" 
                      />
                    )}
                  </AnimatePresence>

                  {/* Bottom Floating Fruit */}
                  <AnimatePresence mode="wait">
                    {isActive && (
                      <motion.img 
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.2, delay: 0.4 }}
                        src={slide.petalIcon} 
                        className="absolute bottom-10 md:bottom-20 left-1/2 w-32 sm:w-56 lg:w-72 z-30 transform -translate-x-1/2 pointer-events-none opacity-80" 
                      />
                    )}
                  </AnimatePresence>
                </div>
              </div>
            )}
          </SwiperSlide>
        ))}
      </Swiper>

      {/* TORN PAPER BOTTOM */}
      <div 
        className="absolute bottom-0 left-0 w-full h-[60px] sm:h-[120px] md:h-[150px] lg:h-[200px] z-50 bg-repeat-x pointer-events-none"
        style={{ 
          backgroundImage: "url('images/main-slider/pattern-1.png')", 
          backgroundSize: 'contain',
          backgroundPosition: 'bottom'
        }}
      ></div>
    </section>
  );
}