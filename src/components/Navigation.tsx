import logo from '../assets/logo.svg';

const Navigation = () => {
  return (
    <nav className="w-full px-6 md:px-[100px] py-6 md:py-8">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <img src={logo} alt="Positivus" className="h-8 md:h-9" />
        </div>

        {/* Navigation Items */}
        <div className="hidden md:flex items-center gap-10">
          <a href="#about" className="text-black text-xl font-normal hover:opacity-70 transition-opacity">
            About us
          </a>
          <a href="#services" className="text-black text-xl font-normal hover:opacity-70 transition-opacity">
            Services
          </a>
          <a href="#cases" className="text-black text-xl font-normal hover:opacity-70 transition-opacity">
            Use Cases
          </a>
          <a href="#pricing" className="text-black text-xl font-normal hover:opacity-70 transition-opacity">
            Pricing
          </a>
          <a href="#blog" className="text-black text-xl font-normal hover:opacity-70 transition-opacity">
            Blog
          </a>
          <button className="text-black text-xl font-normal border border-black rounded-xl px-9 py-5 hover:bg-black hover:text-white transition-all">
            Request a quote
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden p-2">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 12H21M3 6H21M3 18H21" stroke="black" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navigation;
