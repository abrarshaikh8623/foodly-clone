
import { motion } from "framer-motion";

export default function JuiceSection() {
  return (
    <section className="relative py-20 overflow-hidden bg-white">
      
      {/* 1. WATERMARK TEXT ("yummy") */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0">
        <span className="text-[250px] md:text-[400px] font-cursive text-gray-50 opacity-[0.03] select-none">
          yummy
        </span>
      </div>

      {/* 2. PATTERN LAYER (Left Side Background) */}
      <div 
        className="absolute left-0 top-0 w-1/2 h-full opacity-10 pointer-events-none"
        style={{ backgroundImage: "url('images/background/1.png')", backgroundRepeat: 'no-repeat' }}
      ></div>

      {/* 3. SKETCH LAYER (Right Side Juice Glass) */}
      <div 
        className="absolute right-0 top-10 w-[400px] h-full bg-contain bg-no-repeat opacity-20 pointer-events-none"
        style={{ backgroundImage: "url('images/resource/juice-glass.png')" }}
      ></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          
          {/* IMAGE COLUMN */}
          <div className="w-full lg:w-7/12">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <img 
                src="images/resource/juice.png" 
                alt="Fresh Juices" 
                className="w-full h-auto object-contain"
              />
            </motion.div>
          </div>

          {/* CONTENT COLUMN */}
          <div className="w-full lg:w-5/12">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-left"
            >
              <span className="font-cursive text-2xl text-[#b4b195] block mb-2">
                Drink for Health
              </span>
              <h2 className="text-5xl font-bold text-dark mb-4">
                Fresh Fruit <span className="text-[#d99494]">Juices</span>
              </h2>
              
              {/* Decorative Separator Line */}
              <div className="w-20 h-1 bg-[#d99494] mb-6 relative">
                <div className="absolute -top-1 left-1/2 w-3 h-3 bg-[#d99494] rotate-45 -translate-x-1/2"></div>
              </div>

              <p className="text-gray-500 leading-relaxed mb-8 text-lg">
                Us percipit urbanitas referrentur ea. Mei at numquam molestiae intellegam. 
                Ansed dictas accumsan. Nam sint atqui voluptatibus an, pro ne malis semper perpetua.
              </p>

              <button className="group relative inline-flex items-center gap-4 bg-white border-2 border-gray-100 px-8 py-3 rounded-full overflow-hidden transition-all hover:border-[#d99494]">
                <div className="bg-[#d99494] p-2 rounded-full transition-transform group-hover:rotate-12">
                   <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                 <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
               </svg>
                </div>
                <span className="font-bold text-gray-800">Buy Now</span>
              </button>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}