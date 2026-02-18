import companyLogos from '../assets/company-logos.svg';

const LogoStrip = () => {
  return (
    <section className="w-full px-6 md:px-0 py-8 md:py-12">
      <div className="flex justify-center">
        <img src={companyLogos} alt="Amazon, Dribbble, HubSpot, Notion, Netflix, Zoom" className="w-full max-w-[1440px]" />
      </div>
    </section>
  );
};

export default LogoStrip;
