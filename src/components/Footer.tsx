import logoWhite from '../assets/logo-white.svg';
import linkedinIcon from '../assets/linkedin-icon.svg';
import facebookIcon from '../assets/facebook-icon.svg';
import twitterIcon from '../assets/twitter-icon.svg';

const Footer = () => {
  return (
    <footer className="w-full px-6 md:px-[100px] py-12 md:py-16">
      <div className="bg-brand-black rounded-t-45 px-6 md:px-16 py-12 md:py-16">
        {/* Navigation and Contacts */}
        <div className="flex flex-col gap-12 md:gap-16">
          {/* Top Section */}
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 md:gap-12">
            {/* Logo */}
            <div>
              <img src={logoWhite} alt="Positivus" className="h-8" />
            </div>

            {/* Navigation Links */}
            <div className="flex flex-wrap gap-6 md:gap-10">
              <a href="#about" className="text-white text-lg underline hover:opacity-70 transition-opacity">
                About us
              </a>
              <a href="#services" className="text-white text-lg underline hover:opacity-70 transition-opacity">
                Services
              </a>
              <a href="#cases" className="text-white text-lg underline hover:opacity-70 transition-opacity">
                Use Cases
              </a>
              <a href="#pricing" className="text-white text-lg underline hover:opacity-70 transition-opacity">
                Pricing
              </a>
              <a href="#blog" className="text-white text-lg underline hover:opacity-70 transition-opacity">
                Blog
              </a>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-5">
              <a href="#" className="hover:opacity-70 transition-opacity">
                <img src={linkedinIcon} alt="LinkedIn" className="w-8 h-8" />
              </a>
              <a href="#" className="hover:opacity-70 transition-opacity">
                <img src={facebookIcon} alt="Facebook" className="w-8 h-8" />
              </a>
              <a href="#" className="hover:opacity-70 transition-opacity">
                <img src={twitterIcon} alt="Twitter" className="w-8 h-8" />
              </a>
            </div>
          </div>

          {/* Contact Info and Newsletter */}
          <div className="flex flex-col md:flex-row gap-8 md:gap-16">
            {/* Contact Info */}
            <div className="flex flex-col gap-6 md:gap-7">
              <div className="bg-brand-green px-2 py-1 rounded w-fit">
                <h3 className="text-xl font-medium text-black">Contact us:</h3>
              </div>
              <div className="flex flex-col gap-5">
                <p className="text-lg text-white">Email: info@positivus.com</p>
                <p className="text-lg text-white">Phone: 555-567-8901</p>
                <p className="text-lg text-white">
                  Address: 1234 Main St<br />
                  Moonstone City, Stardust State 12345
                </p>
              </div>
            </div>

            {/* Newsletter Subscription */}
            <div className="bg-brand-dark rounded-14 px-8 py-12 md:px-10 md:py-14 flex-1 max-w-[634px]">
              <div className="flex flex-col md:flex-row gap-4 md:gap-5">
                <input
                  type="email"
                  placeholder="Email"
                  className="flex-1 bg-transparent border border-white rounded-14 px-6 py-5 text-lg text-white placeholder-white focus:outline-none focus:border-brand-green"
                />
                <button className="bg-brand-green text-black text-xl font-normal px-9 py-5 rounded-14 hover:opacity-90 transition-opacity whitespace-nowrap">
                  Subscribe to news
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col gap-6 md:gap-8 mt-12 md:mt-16">
          <div className="border-t border-white"></div>
          <div className="flex flex-col md:flex-row gap-4 md:gap-10">
            <p className="text-lg text-white">© 2023 Positivus. All Rights Reserved.</p>
            <a href="#privacy" className="text-lg text-white underline hover:opacity-70 transition-opacity">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
