import { motion } from 'framer-motion';

export default function BlogSection() {
  const blogPosts = [
    { id: 1, img: "images/resource/news-1.jpg", title: "Broad bean and goats’ cheese bruschetta" },
    { id: 2, img: "images/resource/news-2.jpg", title: "Broad bean and goats’ cheese bruschetta" },
    { id: 3, img: "images/resource/news-3.jpg", title: "Broad bean and goats’ cheese bruschetta" },
  ];

  return (
    <section className="relative py-24 bg-white overflow-hidden">
      
      {/* 1. BACKGROUND PATTERN LAYER */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{ 
          backgroundImage: "url('images/background/pattern-5.png')",
          backgroundRepeat: 'repeat-y',
          backgroundPosition: 'left center',
          backgroundSize: 'auto'
        }}
      ></div>

      <div className="container mx-auto px-4 relative z-10">
        
        {/* 2. SECTION HEADER */}
        <div className="text-center mb-16">
          <span className="font-cursive text-2xl text-[#b4b195] block mb-2">News & Recipe</span>
          <h2 className="text-5xl font-bold text-gray-800 mb-4">Our Fruitsome Blog</h2>
          <div className="flex justify-center items-center gap-2 mb-6">
            <div className="w-12 h-[1px] bg-[#b4b195]"></div>
            <div className="w-3 h-3 border border-[#b4b195] rotate-45 flex items-center justify-center">
              <div className="w-1 h-1 bg-[#b4b195]"></div>
            </div>
            <div className="w-12 h-[1px] bg-[#b4b195]"></div>
          </div>
          <p className="text-gray-500 max-w-2xl mx-auto leading-relaxed">
            Cras mattis consectetur purus sit amet fermentum. Praesent commodo cursus magna, <br className="hidden md:block" /> 
            vel scelerisque nisl consectetur et.
          </p>
        </div>

        {/* 3. BLOG GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.div 
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-white group"
            >
              {/* Image Container with Hover Overlay */}
              <div className="relative overflow-hidden aspect-[4/3]">
                <img 
                  src={post.img} 
                  alt={post.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Overlay box appearing on hover */}
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="w-12 h-12 border-2 border-white rounded-full flex items-center justify-center text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Lower Content */}
              <div className="pt-6 pb-2">
                <div className="inline-block px-4 py-1 bg-[#8eb34a] text-white text-[10px] uppercase font-bold rounded-md mb-4">
                  smoothie
                </div>
                <h6 className="text-xl font-bold text-gray-800 mb-4 hover:text-[#d99494] transition-colors cursor-pointer">
                  {post.title}
                </h6>
                
                {/* Post Info List */}
                <ul className="flex items-center gap-4 text-gray-400 text-sm border-t border-gray-100 pt-4">
                  <li>May 21, 2021</li>
                  <li className="list-disc ml-4">2 Comments</li>
                  <li className="ml-auto">
                    <a href="#" className="hover:text-[#d99494] transition-colors">Share</a>
                  </li>
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}