

import { motion } from "framer-motion";

export default function DetoxSection() {
  const ingredients = [
    { name: "Cucumber", side: "left", img: "images/resource/recipe-1.png" },
    { name: "Apple", side: "left", img: "images/resource/recipe-2.png" },
    { name: "Lemon", side: "right", img: "images/resource/recipe-3.png" },
    { name: "Fresh Water", side: "right", img: "images/resource/recipe-4.png" },
  ];

  return (
    <section className="relative py-24 bg-white overflow-hidden">
      
      {/* 1. BACKGROUND LAYERS */}
      {/* Large "yummy" watermark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0">
        <span className="text-[250px] md:text-[400px] font-cursive text-gray-100 opacity-30 select-none">
          yummy
        </span>
      </div>

      {/* Floating Leaves/Icons */}
      <motion.img 
        animate={{ y: [0, -20, 0] }} 
        transition={{ duration: 4, repeat: Infinity }}
        src="images/icons/icon-1.png" 
        className="absolute left-10 top-20 w-24 opacity-80" 
      />
      <motion.img 
        animate={{ y: [0, 20, 0] }} 
        transition={{ duration: 5, repeat: Infinity }}
        src="images/icons/icon-2.png" 
        className="absolute right-10 top-40 w-20 opacity-80" 
      />

      <div className="container mx-auto px-4 relative z-10">
        
        {/* 2. SECTION HEADER */}
        <div className="text-center mb-16">
          <span className="font-cursive text-2xl text-[#b4b195] block mb-2">Best for You</span>
          <h2 className="text-5xl font-bold text-gray-800 mb-4">Detox Smoothie Recipe</h2>
          <div className="flex justify-center items-center gap-2">
            <div className="w-12 h-[2px] bg-[#d99494]"></div>
            <div className="w-2 h-2 bg-[#d99494] rotate-45"></div>
            <div className="w-12 h-[2px] bg-[#d99494]"></div>
          </div>
        </div>

        {/* 3. RECIPE CONTENT GRID */}
        <div className="relative flex flex-col lg:flex-row items-center justify-between gap-12 max-w-6xl mx-auto">
          
          {/* Circular Ring Background (Behind the bottle) */}
          <div 
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-contain bg-center bg-no-repeat opacity-20 pointer-events-none hidden lg:block"
            style={{ backgroundImage: "url('images/icons/circles.png')" }}
          ></div>

          {/* LEFT COLUMN: Cucumber & Apple */}
          <div className="w-full lg:w-5/12 space-y-12">
            {ingredients.filter(i => i.side === 'left').map((item, idx) => (
              <motion.div 
                key={item.name}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.2 }}
                className="flex items-center gap-6 lg:flex-row-reverse text-right"
              >
                <div className="flex-1">
                  <h6 className="text-xl font-bold text-gray-800 mb-2">{item.name}</h6>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    Us percipit urbanitas referrentur ea. Mei at numquam molestiae
                  </p>
                </div>
                <div className="w-20 h-20 flex-shrink-0 bg-orange-500 rounded-full p-4 flex items-center justify-center shadow-lg">
                  <img src={item.img} alt={item.name} className="w-full h-auto object-contain" />
                </div>
              </motion.div>
            ))}
          </div>

          {/* CENTER COLUMN: The Smoothie Bottle */}
          <div className="w-full lg:w-2/12 flex justify-center z-20">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <img 
                src="images/resource/recipe.png" 
                alt="Detox Bottle" 
                className="w-full max-w-[180px] drop-shadow-2xl"
              />
            </motion.div>
          </div>

          {/* RIGHT COLUMN: Lemon & Water */}
          <div className="w-full lg:w-5/12 space-y-12">
            {ingredients.filter(i => i.side === 'right').map((item, idx) => (
              <motion.div 
                key={item.name}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.2 }}
                className="flex items-center gap-6 text-left"
              >
                <div className="w-20 h-20 flex-shrink-0 bg-orange-500 rounded-full p-4 flex items-center justify-center shadow-lg">
                  <img src={item.img} alt={item.name} className="w-full h-auto object-contain" />
                </div>
                <div className="flex-1">
                  <h6 className="text-xl font-bold text-gray-800 mb-2">{item.name}</h6>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    Us percipit urbanitas referrentur ea. Mei at numquam molestiae
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}