import { Send} from 'lucide-react';

export default function DealsBanner() {
  return (
    <section 
      className="relative py-40 overflow-hidden bg-cover bg-center bg-no-repeat bg-fixed" 
      style={{ 
        backgroundImage: "url('images/background/2.jpg')",
        /* This keeps the image from "jumping" during scroll */
        backgroundAttachment: 'fixed' 
      }}
    >
      {/* TOP BRUSH PATTERN - Fixed to the TOP of this section */}
      <div 
        className="absolute top-[-2px] left-0 w-full h-[120px] z-20"
        style={{ 
          backgroundImage: "url('images/background/pattern-1.png')",
          backgroundSize: '100% 100%',
          backgroundRepeat: 'no-repeat'
        }}
      ></div>

      {/* CONTENT BOX (The Circle) */}
      <div className="container mx-auto px-4 relative z-30 flex justify-center items-center">
        <div 
          className="w-[500px] h-[500px] md:w-[600px] md:h-[600px] rounded-full flex flex-col items-center justify-center text-center p-12 border-[15px] border-white/10 shadow-2xl transition-transform duration-700 hover:scale-105"
          style={{ 
            backgroundImage: "url('images/resource/deal.png')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundColor: '#8ec038e6' // 90% opacity Foodily Green
          }}
        >
          <div className="text-white drop-shadow-md">
            <span className="uppercase tracking-[4px] font-bold text-xs mb-4 block">30% Off For Juice</span>
            <h2 className="text-5xl md:text-6xl font-black mb-6 leading-tight">Big Deals of the Week</h2>
            <p className="text-base opacity-90 mb-10 max-w-xs mx-auto leading-relaxed">
              Us percipit urbanitas referrentur ea. Mei at numquam molestiae intellegam.
            </p>
            
            <div className="w-full max-w-sm mx-auto">
              <form className="relative group">
                <input 
                  type="email" 
                  placeholder="type your email" 
                  className="w-full py-4 px-8 rounded-full bg-white text-dark outline-none focus:ring-4 focus:ring-primary/30 transition-all"
                />
                  <button className="absolute right-2 top-2 bg-primary p-2.5 rounded-full text-white hover:bg-green-600 transition">
                              <Send size={20} />
                            </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM BRUSH PATTERN - Fixed to the BOTTOM of this section */}
      <div 
        className="absolute bottom-[-2px] left-0 w-full h-[120px] z-20"
        style={{ 
          backgroundImage: "url('images/background/pattern-2.png')",
          backgroundSize: '100% 100%',
          backgroundRepeat: 'no-repeat'
        }}
      ></div>
    </section>
  );
}