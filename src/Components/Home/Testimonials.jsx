import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

import { motion } from "framer-motion";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

export default function TestimonialSection() {
  const testimonials = [
    {
      id: 1,
      image: "images/resource/author-1.jpg",
      text: "“Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.”",
      name: "Meredith Grant",
      title: "Host Mother"
    },
    {
      id: 2,
      image: "images/resource/author-2.jpg",
      text: "“Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.”",
      name: "Meredith Grant",
      title: "Host Mother"
    },
    {
      id: 3,
      image: "images/resource/author-3.jpg",
      text: "“Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.”",
      name: "Meredith Grant",
      title: "Host Mother"
    },
    {
      id: 4,
      image: "images/resource/author-4.jpg",
      text: "“Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.”",
      name: "Meredith Grant",
      title: "Host Mother"
    },
    {
      id: 5,
      image: "images/resource/author-5.jpg",
      text: "“Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.”",
      name: "Meredith Grant",
      title: "Host Mother"
    },
    // Add more testimonial objects as needed
  ];

  return (
    <section className="relative py-24 bg-white overflow-hidden text-center">
      
      {/* 1. DECORATIVE BACKGROUND LAYERS */}
      {/* Floating Icons */}
      <img src="images/icons/icon-1.png" className="absolute top-10 left-10 w-24 opacity-50 pointer-events-none" alt="" />
      <img src="images/icons/icon-2.png" className="absolute bottom-20 right-10 w-32 opacity-50 pointer-events-none" alt="" />
      <img src="images/icons/icon-3.png" className="absolute top-1/2 left-5 w-16 opacity-30 pointer-events-none" alt="" />
      
      {/* Background Pattern */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-5"
        style={{ backgroundImage: "url('images/background/pattern-4.png')", backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}
      ></div>

      <div className="container mx-auto px-4 relative z-10">
        
        {/* 2. SECTION HEADER */}
        <div className="mb-12">
          <span className="font-cursive text-2xl text-[#b4b195] block mb-2">Testimonial</span>
          <h2 className="text-5xl font-bold text-gray-800 mb-4">What People Say</h2>
          
          {/* Decorative Separator */}
          <div className="flex justify-center items-center gap-2">
            <div className="w-12 h-[1px] bg-[#b4b195]"></div>
            <div className="w-3 h-3 border border-[#b4b195] rotate-45 flex items-center justify-center">
              <div className="w-1 h-1 bg-[#b4b195]"></div>
            </div>
            <div className="w-12 h-[1px] bg-[#b4b195]"></div>
          </div>
        </div>

        {/* 3. TESTIMONIAL CAROUSEL */}
        <div className="max-w-4xl mx-auto">
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            autoplay={{ delay: 5000 }}
            pagination={{ clickable: true }}
            className="pb-16"
          >
            {testimonials.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="flex flex-col items-center">
                  
                  {/* Author Image */}
                  <div className="w-24 h-24 rounded-full overflow-hidden mb-8 border-4 border-white shadow-lg">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                  </div>

                  {/* Testimonial Text */}
                  <p className="text-gray-600 italic text-xl md:text-2xl leading-relaxed mb-8 px-4">
                    {item.text}
                  </p>

                  {/* Designation */}
                  <div className="text-lg font-bold text-gray-800">
                    <span className="text-[#b4b195] border-b border-[#b4b195] pb-1 mr-2">{item.name}</span>
                    <span className="text-gray-400 font-normal">- {item.title}</span>
                  </div>

                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

      </div>

      {/* Global Swiper Pagination Styling (Add to your CSS file or a style tag) */}
      <style>{`
        .swiper-pagination-bullet-active {
          background: #d99494 !important;
        }
      `}</style>
    </section>
  );
}