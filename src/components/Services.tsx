import arrowIcon from '../assets/arrow-icon.svg';
import seoIllustration from '../assets/seo-illustration.png';
import ppcIllustration from '../assets/ppc-illustration.png';

const Services = () => {
  return (
    <section className="w-full px-6 md:px-[100px] py-8 md:py-12">
      {/* Heading & Subheading */}
      <div className="flex flex-col md:flex-row gap-6 md:gap-10 mb-10 md:mb-16">
        <div className="bg-brand-green px-2 py-1 rounded-lg w-fit">
          <h2 className="text-[32px] md:text-[40px] font-medium text-black">Services</h2>
        </div>
        <p className="text-lg text-black max-w-[580px]">
          At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:
        </p>
      </div>

      {/* Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
        {/* SEO Card */}
        <div className="bg-brand-gray border border-brand-black rounded-45 shadow-card p-8 md:p-12 flex flex-col md:flex-row justify-between items-center md:items-start gap-6">
          <div className="flex flex-col gap-16 md:gap-24">
            <div className="flex flex-col">
              <h3 className="text-[26px] md:text-[30px] font-medium text-black bg-brand-green px-2 py-1 rounded w-fit">
                Search engine
              </h3>
              <h3 className="text-[26px] md:text-[30px] font-medium text-black bg-brand-green px-2 py-1 rounded w-fit mt-1">
                optimization
              </h3>
            </div>
            <a href="#" className="flex items-center gap-4 group">
              <img src={arrowIcon} alt="" className="w-10 h-10 group-hover:translate-x-1 transition-transform" />
              <span className="text-xl text-black">Learn more</span>
            </a>
          </div>
          <div className="flex-shrink-0">
            <img src={seoIllustration} alt="SEO Illustration" className="w-[165px] md:w-[210px]" />
          </div>
        </div>

        {/* PPC Card */}
        <div className="bg-brand-green border border-brand-black rounded-45 shadow-card p-8 md:p-12 flex flex-col md:flex-row justify-between items-center md:items-start gap-6">
          <div className="flex flex-col gap-16 md:gap-24">
            <div className="flex flex-col">
              <h3 className="text-[26px] md:text-[30px] font-medium text-black px-2 py-1 rounded w-fit">
                Pay-per-click
              </h3>
              <h3 className="text-[26px] md:text-[30px] font-medium text-black px-2 py-1 rounded w-fit mt-1">
                advertising
              </h3>
            </div>
            <a href="#" className="flex items-center gap-4 group">
              <img src={arrowIcon} alt="" className="w-10 h-10 group-hover:translate-x-1 transition-transform" />
              <span className="text-xl text-black">Learn more</span>
            </a>
          </div>
          <div className="flex-shrink-0">
            <img src={ppcIllustration} alt="PPC Illustration" className="w-[165px] md:w-[210px]" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
