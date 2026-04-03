

import { motion } from "framer-motion";

export default function UpcomingBeverage() {
  return (
    <section className="relative overflow-hidden bg-[#f7f2e7]">
      <div className="flex flex-col lg:flex-row min-h-[600px]">
        
        {/* LEFT CONTENT COLUMN */}
        <div className="w-full lg:w-1/2 flex items-center justify-center py-20 px-6 lg:px-20 relative">
          
          {/* Floating Background Icons (Leaves and Avocado) */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <motion.img 
              animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
              transition={{ duration: 5, repeat: Infinity }}
              src="images/icons/icon-4.png" 
              className="absolute left-10 bottom-10 w-40 opacity-90" 
              alt=""
            />
            {/* Added decorative avocado/botanical elements visible in design */}
            <img src="images/resource/leaf-1.png" className="absolute top-20 left-5 w-12 opacity-70" alt="" />
            <img src="images/resource/flower-1.png" className="absolute bottom-40 left-1/4 w-10 opacity-60" alt="" />
          </div>

          <div className="relative z-10 max-w-xl">
            <div className="mb-8">
              <h2 className="text-5xl font-bold text-[#2d2d2d] leading-tight mb-4">
                Upcoming Our <br /> Beverage
              </h2>
              
              {/* Decorative Separator */}
              <div className="flex items-center gap-2 mb-6">
                <div className="w-12 h-[1px] bg-[#b4b195]"></div>
                <div className="w-3 h-3 border border-[#b4b195] rotate-45 flex items-center justify-center">
                   <div className="w-1 h-1 bg-[#b4b195]"></div>
                </div>
                <div className="w-12 h-[1px] bg-[#b4b195]"></div>
              </div>

              <p className="text-gray-600 leading-relaxed text-lg mb-10">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod 
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim 
                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea 
                commodo consequat.
              </p>
            </div>

            {/* Styled "All Product" Button */}
            <a 
              href="/menu" 
              className="group relative inline-flex items-center gap-4 border border-[#d99494] px-10 py-3 rounded-full transition-all hover:bg-[#d99494] hover:text-white"
            >
              <div className="bg-[#d99494] p-2 rounded-full text-white transition-transform group-hover:scale-110">
                 <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                   <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                 </svg>
              </div>
              <span className="font-bold uppercase tracking-wider text-sm">All Product</span>
            </a>
          </div>
        </div>

        {/* RIGHT IMAGE COLUMN */}
        <div className="w-full lg:w-1/2 relative min-h-[400px] lg:min-h-full">
          {/* Decorative Brush Edge Mask */}
          <div className="absolute left-0 top-0 bottom-0 w-24 z-20 bg-gradient-to-r from-[#f7f2e7] to-transparent hidden lg:block" 
               style={{ maskImage: "url('images/resource/deal.png')", maskSize: 'cover' }}>
          </div>
          
          <img 
            src="images/resource/image-1.jpg" 
            alt="Upcoming Beverage" 
            className="w-full h-full object-cover"
          />
        </div>

      </div>
    </section>
  );
}