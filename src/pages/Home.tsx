import Credit from "../components/Credit";
import Features from "../components/Features";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Instructions from "../components/Instructions";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <>
      <div className="min-h-screen px-[162px] pb-[120px] bg-background w-full flex flex-col gap-[120px] text-text balsamiq-sans-regular">
        <Navbar />
        <Hero />
        <Features />
        <Instructions />
        <Credit />
      </div>
      <Footer />
    </>
  );
};

export default Home;
