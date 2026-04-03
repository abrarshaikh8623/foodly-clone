
import Navbar from "./Components/Layout/Navbar";
import HeroSlider from "./Components/home/HeroSlider";
import AboutJuice from "./Components/home/AboutJuice";
import BeverageGrid from "./Components/home/BeverageGrid";
import DealsBanner from "./Components/home/DealsBanner";
import DetoxRecipe from "./Components/home/DetoxRecipe";
import Testimonials from "./Components/home/Testimonials";
import BlogSection from "./Components/home/BlogSection";
import Footer from "./Components/Layout/Footer";
import Gallery from "./Components/Home/Gallary";
import UpcomingBeverage from "./Components/Home/UpcomingBeverage";
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