import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import OurStory from "@/components/OurStory";
import Bestsellers from "@/components/Bestsellers";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import Events from "@/components/Events";
import Reservation from "@/components/Reservation";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main-content" tabIndex={-1} className="relative overflow-x-hidden">
        <Hero />
        <Features />
        <OurStory />
        <Bestsellers />
        <Gallery />
        <Testimonials />
        <Events />
        <Reservation />
      </main>
      <Footer />
    </>
  );
}
