import { motion } from 'framer-motion';

const beverages = [
  { id: 1, name: "Milkshake", count: "3 products", img: "images/resource/beverage-1.jpg" },
  { id: 2, name: "Frappe", count: "3 products", img: "images/resource/beverage-2.jpg" },
  { id: 3, name: "Boba Drinks", count: "3 products", img: "images/resource/beverage-3.jpg" },
  { id: 4, name: "Mojito", count: "3 products", img: "images/resource/beverage-4.jpg" },
  { id: 5, name: "Slushy", count: "3 products", img: "images/resource/beverage-5.jpg" },
  { id: 6, name: "Hot Chocolate", count: "3 products", img: "images/resource/beverage-6.jpg" },
  { id: 7, name: "Smoothie", count: "3 products", img: "images/resource/beverage-7.jpg" },
  { id: 8, name: "Coffee", count: "3 products", img: "images/resource/beverage-8.jpg" },
];

export default function BeverageSection() {
  return (
    <section className="relative py-24 bg-white overflow-hidden">
      
      {/* 1. FLOATING BACKGROUND ICON (Grapefruit) */}
      <div 
        className="absolute left-[-50px] top-20 w-64 h-64 bg-contain bg-no-repeat opacity-80 pointer-events-none z-0"
        style={{ backgroundImage: "url('images/resource/beverage.png')" }}
      ></div>

      <div className="container mx-auto px-4 relative z-10">
        
        {/* 2. SECTION TITLE */}
        <div className="text-center mb-16">
          <span className="font-cursive text-2xl text-[#b4b195] block mb-2">Best for You</span>
          <h2 className="text-5xl font-bold text-gray-800 mb-4">Our Beverage</h2>
          <div className="flex justify-center items-center gap-2">
            <div className="w-12 h-[2px] bg-[#d99494]"></div>
            <div className="w-2 h-2 bg-[#d99494] rotate-45"></div>
            <div className="w-12 h-[2px] bg-[#d99494]"></div>
          </div>
        </div>

        {/* 3. BEVERAGE GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {beverages.map((item, index) => (
            <motion.div 
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-white rounded-2xl overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-2">
                {/* Image Container */}
                <div className="relative overflow-hidden aspect-[4/5]">
                  <img 
                    src={item.img} 
                    alt={item.name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Subtle overlay on hover */}
                  <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>

                {/* Content */}
                <div className="p-6 text-center">
                  <h6 className="text-xl font-bold text-gray-800 transition-colors group-hover:text-[#d99494]">
                    <a href="#">{item.name}</a>
                  </h6>
                  <p className="text-gray-400 text-sm mt-1">{item.count}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* 4. VIEW ALL BUTTON */}
        <div className="mt-16 text-center">
          <button className="group relative inline-flex items-center gap-4 border-2 border-gray-100 px-10 py-3 rounded-full transition-all hover:border-[#d99494] hover:bg-[#d99494]/5">
            <div className="bg-[#d99494] p-2 rounded-full text-white">
               <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                 <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
               </svg>
            </div>
            <span className="font-bold text-gray-800 uppercase tracking-wider text-sm">
              View All Products
            </span>
          </button>
        </div>

      </div>
    </section>
  );
}