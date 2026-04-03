import { motion, AnimatePresence } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';

export default function HeroSlider() {
  const slideData = [
    {
      id: 1,
      bgColor: "#b4b195", // Original Greenish-Grey
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
      bgColor: "#a79bac", // Berry Purple Background
      mainImage: "images/main-slider/content-image-3.png",
      fruitIcon: "images/main-slider/icon-1.png",
      petalIcon: "images/main-slider/icon-7.png",
      bgIcon: "images/main-slider/icon-3.png",
    }
  ];

  return (
    <section className="relative h-screen min-h-[700px] overflow-hidden">
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
              /* Background color applied here so it fades with the slide */
              <div 
                className="w-full h-full transition-colors duration-1000 flex items-center"
                style={{ backgroundColor: slide.bgColor }}
              >
                <div className="container mx-auto px-4 h-full relative flex items-center">
                  
                  {/* 1. LEFT CONTENT */}
                  <div className="w-full lg:w-1/2 z-20">
                    <AnimatePresence mode="wait">
                      {isActive && (
                        <motion.div 
                          initial={{ opacity: 0, y: -100 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 50 }}
                          transition={{ duration: 0.8, ease: "easeOut" }}
                        >
                          <h1 className="text-white font-cursive text-8xl mb-4 leading-tight drop-shadow-md">
                            Healthy <br /> Smoothie
                          </h1>
                          <p className="text-white/90 text-lg max-w-sm mb-8 leading-relaxed">
                            Consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam.
                          </p>
                          
                          <button className="group relative inline-flex items-center gap-4 bg-[#d99494] text-white px-8 py-2.5 rounded-full shadow-lg transition-all hover:bg-[#c68383] hover:shadow-xl active:scale-95">
  {/* The Icon Wrapper */}
  <div className="bg-white/20 p-2 rounded-full flex items-center justify-center">
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      className="h-4 w-4 fill-current text-white" 
      viewBox="0 0 24 24"
    >
      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
    </svg>
  </div>

  {/* The Button Text */}
  <span className="font-bold text-sm uppercase tracking-wide pr-2">
    Buy Now
  </span>
</button>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* 2. RIGHT SIDE: The Jar */}
                  <div className="w-full lg:w-1/2 relative flex justify-center items-center">
                    <AnimatePresence mode="wait">
                      {isActive && (
                        <motion.img 
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.9 }}
                          transition={{ duration: 0.6 }}
                          src={slide.mainImage} 
                          className="relative z-10 w-full max-w-lg object-contain" 
                          alt="Smoothie Jar" 
                        />
                      )}
                    </AnimatePresence>

                    {/* Faded Background Icon */}
                    <AnimatePresence mode="wait">
                      {isActive && (
                        <motion.img 
                          initial={{ opacity: 0, x: -150 }}
                          animate={{ opacity: 0.2, x: -40 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 1, delay: 0.3 }}
                          src={slide.bgIcon} 
                          className="absolute left-1/4 top-1/4 w-48 z-0 pointer-events-none" 
                        />
                      )}
                    </AnimatePresence>
                  </div>

                  {/* 3. FLYING DECORATIONS */}
                  
                  {/* Top Right Fruit */}
                  <AnimatePresence mode="wait">
                    {isActive && (
                      <motion.img 
                        initial={{ opacity: 0, x: 200, y: -100, rotate: 45 }}
                        animate={{ opacity: 1, x: 0, y: 0, rotate: 0 }}
                        exit={{ opacity: 0, x: 100 }}
                        transition={{ duration: 1, delay: 0.5 }}
                        src={slide.fruitIcon} 
                        className="absolute top-0 right-0 w-64 z-30 pointer-events-none" 
                      />
                    )}
                  </AnimatePresence>

                  {/* Bottom Floating Fruit */}
                  <AnimatePresence mode="wait">
                    {isActive && (
                      <motion.img 
                        initial={{ opacity: 0, y: 200, rotate: -45 }}
                        animate={{ opacity: 1, y: 0, rotate: 0 }}
                        exit={{ opacity: 0, y: 100 }}
                        transition={{ duration: 1.2, delay: 0.4 }}
                        src={slide.petalIcon} 
                        className="absolute bottom-20 left-1/2 w-72 z-30 transform -translate-x-1/2 pointer-events-none" 
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
        className="absolute bottom-0 left-0 w-full h-[200px] z-50 bg-repeat-x pointer-events-none"
        style={{ 
          backgroundImage: "url('images/main-slider/pattern-1.png')", 
          backgroundSize: 'contain',
          backgroundPosition: 'bottom'
        }}
      ></div>
    </section>
  );
}