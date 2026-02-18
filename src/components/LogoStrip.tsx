import companyLogos from '../assets/company-logos.svg';

const LogoStrip = () => {
  return (
    <section className="w-full py-8 md:py-12 overflow-hidden">
      <div className="relative flex">
        <div className="flex animate-scroll">
          <img src={companyLogos} alt="Amazon, Dribbble, HubSpot, Notion, Netflix, Zoom" className="w-[1440px] flex-shrink-0" />
          <img src={companyLogos} alt="Amazon, Dribbble, HubSpot, Notion, Netflix, Zoom" className="w-[1440px] flex-shrink-0" />
        </div>
      </div>
    </section>
  );
};

export default LogoStrip;
