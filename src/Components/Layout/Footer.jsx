import { Send, Mail, MapPin, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#1a1a1a] text-gray-400 pt-20 pb-10">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        
        {/* About Column */}
        <div>
          <img src="images/logo.png" alt="Logo" className="h-10 mb-6 brightness-200" />
          <p className="leading-loose mb-6">
            The argument in favor of using filler text goes something like this: If you use real content in the Consulting Process...
          </p>
          
          {/* Social Links (Using Text/Placeholders for v1.7.0 compatibility) */}
          <div className="flex space-x-4">
            {['FB', 'TW', 'IG', 'DR'].map((text, i) => (
              <a 
                key={i} 
                href="#" 
                className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center hover:bg-primary hover:border-primary transition text-white font-bold text-[10px]"
              >
                {text}
              </a>
            ))}
          </div>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-white font-bold text-xl mb-8 border-l-4 border-primary pl-4">Contact Info</h4>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <MapPin size={18} className="text-primary shrink-0" />
              <span>Chicago 12, Melborne City, USA</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={18} className="text-primary shrink-0" />
              <span>(111) 111-111-1111</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={18} className="text-primary shrink-0" />
              <span>foodily@gmail.com</span>
            </li>
            <li className="pl-8 text-sm">Week Days: 09.00 to 18.00</li>
          </ul>
        </div>

        {/* Useful Links */}
        <div>
          <h4 className="text-white font-bold text-xl mb-8 border-l-4 border-primary pl-4">Useful Links</h4>
          <ul className="space-y-4">
            {['Home', 'About Us', 'Blogs', 'Terms Of Service', 'Privacy Policy'].map(link => (
              <li key={link}>
                <a href="#" className="hover:text-primary transition flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-gray-700 rounded-full"></span>
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className="text-white font-bold text-xl mb-8 border-l-4 border-primary pl-4">Subscribe Now</h4>
          <p className="mb-6">Stay updated with our latest juice recipes and deals.</p>
          <div className="relative">
            <input 
              type="email" 
              placeholder="Your Email" 
              className="w-full bg-transparent border border-gray-700 py-4 px-6 rounded-full focus:outline-none focus:border-primary transition" 
            />
            <button className="absolute right-2 top-2 bg-primary p-2.5 rounded-full text-white hover:bg-green-600 transition">
              <Send size={20} />
            </button>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800 mt-16 pt-8 text-center text-sm">
        <p>© 2026 foodily All Rights Reserved.</p>
      </div>
    </footer>
  );
}