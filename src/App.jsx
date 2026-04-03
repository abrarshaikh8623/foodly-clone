
import Navbar from "./components/layout/Navbar"
import HeroSlider from "./components/home/HeroSlider";
import AboutJuice from "./components/home/AboutJuice";
import BeverageGrid from "./components/home/BeverageGrid";
import DealsBanner from "./components/home/DealsBanner";
import DetoxRecipe from "./components/home/DetoxRecipe";
import Testimonials from "./components/home/Testimonials";
import BlogSection from "./components/home/BlogSection";
import Footer from "./components/layout/Footer";
import Gallery from "./components/home/Gallary";
import UpcomingBeverage from "./components/home/UpcomingBeverage";
function App() {
  return (
    <div className="font-sans text-dark overflow-x-hidden">
      {/* Assuming Navbar is fixed/sticky at the top */}
      <Navbar />    
        <main>
        <HeroSlider />
        <AboutJuice />
        <BeverageGrid />
        <DealsBanner />
        <DetoxRecipe />
        <UpcomingBeverage />
        <Testimonials />
        <BlogSection />
        <Gallery />
      </main>
      <Footer />
    </div>
  );
}

export default App;