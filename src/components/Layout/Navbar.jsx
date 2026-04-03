import { useState, useEffect } from 'react';
import { ShoppingCart, Search, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = ['Home', 'About', 'Menu', 'Gallery', 'Blog', 'Contact'];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-md py-4' : 'bg-transparent py-6'
    }`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        
        {/* LOGO / ICON SWAP LOGIC */}
        <div className="flex-shrink-0">
          <img 
            src={isScrolled ? 'images/logo-2.png' : '/images/logo.png'} 
            alt="Foodily" 
            className={`transition-all duration-500 ${isScrolled ? 'h-8' : 'h-10'}`} 
          />
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex space-x-8 items-center">
          {navLinks.map((link) => (
            <a 
              key={link} 
              href={`#${link.toLowerCase()}`} 
              className={`font-bold transition-colors duration-300 hover:text-[#d99494] ${
                isScrolled ? 'text-gray-800' : 'text-white'
              }`}
            >
              {link}
            </a>
          ))}

          {/* Action Icons */}
          <div className={`flex items-center space-x-5 border-l pl-8 ml-4 transition-colors duration-300 ${
            isScrolled ? 'border-gray-300' : 'border-white/30'
          }`}>
            <Search className={`w-5 h-5 cursor-pointer hover:text-[#d99494] ${
              isScrolled ? 'text-gray-800' : 'text-white'
            }`} />
            
            <div className="relative">
              <ShoppingCart className={`w-5 h-5 cursor-pointer hover:text-[#d99494] ${
                isScrolled ? 'text-gray-800' : 'text-white'
              }`} />
              <span className="absolute -top-2 -right-2 bg-[#d99494] text-white text-[10px] rounded-full w-4 h-4 flex items-center justify-center">
                0
              </span>
            </div>
          </div>
        </div>

        {/* Mobile Toggle */}
        <div className="lg:hidden">
          <button 
            onClick={() => setMobileMenu(!mobileMenu)} 
            className={`transition-colors duration-300 ${
              isScrolled || mobileMenu ? 'text-gray-800' : 'text-white'
            }`}
          >
            {mobileMenu ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenu && (
        <div className="lg:hidden bg-white absolute top-full left-0 w-full shadow-xl p-6">
          {navLinks.map((link) => (
            <a key={link} href="#" className="block py-3 font-bold text-gray-800 border-b border-gray-100">
              {link}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}