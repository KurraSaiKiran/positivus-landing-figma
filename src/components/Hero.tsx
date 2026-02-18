import heroIllustration from '../assets/hero-illustration.svg';

const Hero = () => {
  const handleConsultation = () => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
  };

  return (
    <section className="w-full px-6 md:px-[100px] py-8 md:py-12">
      <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
        {/* Left Content */}
        <div className="flex-1 flex flex-col gap-8 md:gap-9">
          <h1 className="text-[40px] md:text-[60px] leading-tight font-medium text-black">
            Navigating the digital landscape for success
          </h1>
          <p className="text-lg md:text-xl leading-7 text-black">
            Our digital marketing agency helps businesses grow and succeed online through a range of services including SEO, PPC, social media marketing, and content creation.
          </p>
          <button 
            onClick={handleConsultation}
            className="bg-brand-black text-white text-xl font-normal px-9 py-5 rounded-xl w-fit hover:bg-opacity-90 transition-all duration-300 cursor-pointer"
          >
            Book a consultation
          </button>
        </div>

        {/* Right Illustration */}
        <div className="flex-1 flex justify-center md:justify-end">
          <img src={heroIllustration} alt="Digital Marketing Illustration" className="w-full max-w-[600px]" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
