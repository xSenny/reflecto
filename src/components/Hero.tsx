import hero from '../assets/hero.svg'
const Hero = () => {
  return (
    <section className="flex justify-between flex-col lg:flex-row">
      <div className="flex flex-col gap-[30px]">
        <div className="flex flex-col gap-[20px] max-w-[400px]">
          <h1 className="text-[64px] font-bold">Your Story, Your <span className="text-accent">Journey</span></h1>
          <h3 className="text-[16px]">Capture your thoughts, reflect on your day, and grow every step of the way. Start journaling with ease and turn moments into lasting memories.</h3>
        </div>
        <div className="flex gap-[24px]">
          <a href="/#instructions" className="px-[20px] py-[13px] w-full flex justify-center bg-secondary rounded-[8px]">How does it work?</a>
          <a href="/login" className="px-[20px] py-[13px] bg-primary flex justify-center w-full rounded-[8px]">Get Started!</a>
        </div>
      </div>
      <img src={hero} alt="hero" />
    </section>
  )
}

export default Hero
