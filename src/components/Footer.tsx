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
              <svg viewBox="0 0 180 29" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-8">
                <path d="M14.757,4.46l14.432,-4.18l-4.211,14.22l4.211,14.18l-14.432,-4.14l-14.472,4.14l4.252,-14.18l-4.252,-14.22z" fill="#B9FF66"/>
                <path d="M40.11,24.97v-22.55h9.117c1.4,0 2.646,0.28 3.739,0.83c1.115,0.54 1.979,1.31 2.591,2.32c0.634,0.99 0.951,2.18 0.951,3.58v0.42c0,1.4 -0.328,2.6 -0.984,3.61c-0.634,1.01 -1.498,1.78 -2.591,2.32c-1.093,0.54 -2.328,0.8 -3.706,0.8h-5.575v8.67zM43.652,13.15h5.214c1.247,0 2.242,-0.33 2.985,-0.97c0.743,-0.64 1.115,-1.53 1.115,-2.64v-0.32c0,-1.14 -0.372,-2.03 -1.115,-2.68c-0.743,-0.64 -1.738,-0.97 -2.985,-0.97h-5.214z" fill="white"/>
                <path d="M67.097,25.42c-1.618,0 -3.061,-0.32 -4.329,-0.96c-1.246,-0.67 -2.23,-1.61 -2.952,-2.84c-0.721,-1.22 -1.082,-2.67 -1.082,-4.35v-0.48c0,-1.68 0.361,-3.12 1.082,-4.32c0.722,-1.22 1.706,-2.17 2.952,-2.84c1.268,-0.66 2.711,-0.99 4.329,-0.99c1.618,0 3.061,0.33 4.329,0.99c1.268,0.67 2.263,1.62 2.984,2.84c0.722,1.2 1.083,2.64 1.083,4.32v0.48c0,1.68 -0.361,3.13 -1.083,4.35c-0.721,1.23 -1.716,2.17 -2.984,2.84c-1.268,0.64 -2.711,0.96 -4.329,0.96zM67.097,22.46c1.487,0 2.689,-0.46 3.607,-1.39c0.941,-0.94 1.411,-2.24 1.411,-3.9v-0.29c0,-1.65 -0.459,-2.94 -1.378,-3.86c-0.918,-0.95 -2.131,-1.42 -3.64,-1.42c-1.465,0 -2.668,0.47 -3.608,1.42c-0.918,0.92 -1.377,2.21 -1.377,3.86v0.29c0,1.66 0.459,2.96 1.377,3.9c0.94,0.93 2.143,1.39 3.608,1.39z" fill="white"/>
                <path d="M86.323,25.42c-2.055,0 -3.76,-0.45 -5.116,-1.35c-1.356,-0.9 -2.186,-2.27 -2.493,-4.09l3.149,-0.74c0.175,0.88 0.47,1.58 0.885,2.09c0.416,0.52 0.93,0.88 1.542,1.1c0.634,0.21 1.312,0.32 2.033,0.32c1.072,0 1.891,-0.21 2.46,-0.61c0.59,-0.41 0.885,-0.94 0.885,-1.58c0,-0.65 -0.273,-1.12 -0.819,-1.42c-0.547,-0.3 -1.356,-0.55 -2.427,-0.74l-1.115,-0.19c-1.094,-0.2 -2.089,-0.48 -2.985,-0.84c-0.896,-0.37 -1.607,-0.87 -2.132,-1.52c-0.524,-0.64 -0.787,-1.47 -0.787,-2.48c0,-1.5 0.569,-2.66 1.706,-3.48c1.137,-0.84 2.645,-1.25 4.525,-1.25c1.815,0 3.302,0.4 4.461,1.22c1.18,0.79 1.946,1.88 2.296,3.25l-3.149,0.87c-0.197,-0.96 -0.612,-1.64 -1.246,-2.03c-0.634,-0.4 -1.421,-0.61 -2.362,-0.61c-0.918,0 -1.639,0.17 -2.164,0.52c-0.525,0.32 -0.787,0.78 -0.787,1.38c0,0.65 0.251,1.12 0.754,1.42c0.525,0.3 1.225,0.53 2.099,0.68l1.148,0.19c1.159,0.19 2.219,0.46 3.181,0.81c0.962,0.34 1.717,0.83 2.263,1.48c0.569,0.64 0.853,1.5 0.853,2.58c0,1.59 -0.601,2.82 -1.804,3.7c-1.202,0.88 -2.82,1.32 -4.854,1.32z" fill="white"/>
                <path d="M96.929,24.97v-15.88h3.378v15.88zM98.635,6.93c-0.656,0 -1.214,-0.21 -1.673,-0.61c-0.437,-0.43 -0.656,-0.98 -0.656,-1.65c0,-0.66 0.219,-1.2 0.656,-1.61c0.459,-0.43 1.017,-0.64 1.673,-0.64c0.677,0 1.235,0.21 1.672,0.64c0.438,0.41 0.656,0.95 0.656,1.61c0,0.67 -0.218,1.22 -0.656,1.65c-0.437,0.4 -0.995,0.61 -1.672,0.61z" fill="white"/>
                <path d="M111.388,24.97c-0.984,0 -1.771,-0.29 -2.362,-0.87c-0.568,-0.58 -0.852,-1.35 -0.852,-2.32v-9.89h-4.461v-2.8h4.461v-5.26h3.378v5.26h4.821v2.8h-4.821v9.31c0,0.65 0.306,0.97 0.918,0.97h3.378v2.8z" fill="white"/>
                <path d="M120.341,24.97v-15.88h3.378v15.88zM122.047,6.93c-0.656,0 -1.214,-0.21 -1.673,-0.61c-0.437,-0.43 -0.656,-0.98 -0.656,-1.65c0,-0.66 0.219,-1.2 0.656,-1.61c0.459,-0.43 1.017,-0.64 1.673,-0.64c0.678,0 1.235,0.21 1.672,0.64c0.438,0.41 0.656,0.95 0.656,1.61c0,0.67 -0.218,1.22 -0.656,1.65c-0.437,0.4 -0.994,0.61 -1.672,0.61z" fill="white"/>
                <path d="M132.471,24.97l-5.444,-15.88h3.575l4.296,13.43h0.525l4.296,-13.43h3.575l-5.444,15.88z" fill="white"/>
                <path d="M152.771,25.26c-1.225,0 -2.318,-0.27 -3.28,-0.8c-0.962,-0.54 -1.716,-1.3 -2.263,-2.29c-0.547,-0.99 -0.82,-2.17 -0.82,-3.55v-9.53h3.378v9.31c0,1.37 0.35,2.39 1.05,3.06c0.699,0.64 1.672,0.97 2.919,0.97c1.377,0 2.481,-0.45 3.312,-1.36c0.853,-0.92 1.279,-2.24 1.279,-3.96v-8.02h3.378v15.88h-3.312v-2.38h-0.525c-0.306,0.64 -0.853,1.25 -1.64,1.83c-0.787,0.56 -1.946,0.84 -3.476,0.84z" fill="white"/>
                <path d="M173.342,25.42c-2.055,0 -3.76,-0.45 -5.116,-1.35c-1.355,-0.9 -2.186,-2.27 -2.492,-4.09l3.148,-0.74c0.175,0.88 0.47,1.58 0.886,2.09c0.415,0.52 0.929,0.88 1.541,1.1c0.634,0.21 1.312,0.32 2.033,0.32c1.072,0 1.892,-0.21 2.46,-0.61c0.59,-0.41 0.886,-0.94 0.886,-1.58c0,-0.65 -0.274,-1.12 -0.82,-1.42c-0.547,-0.3 -1.356,-0.55 -2.427,-0.74l-1.115,-0.19c-1.094,-0.2 -2.088,-0.48 -2.985,-0.84c-0.896,-0.37 -1.607,-0.87 -2.132,-1.52c-0.524,-0.64 -0.787,-1.47 -0.787,-2.48c0,-1.5 0.569,-2.66 1.706,-3.48c1.137,-0.84 2.645,-1.25 4.526,-1.25c1.814,0 3.301,0.4 4.46,1.22c1.181,0.79 1.946,1.88 2.296,3.25l-3.149,0.87c-0.197,-0.96 -0.612,-1.64 -1.246,-2.03c-0.634,-0.4 -1.421,-0.61 -2.361,-0.61c-0.919,0 -1.64,0.17 -2.165,0.52c-0.525,0.32 -0.787,0.78 -0.787,1.38c0,0.65 0.251,1.12 0.754,1.42c0.525,0.3 1.225,0.53 2.099,0.68l1.148,0.19c1.159,0.19 2.219,0.46 3.181,0.81c0.962,0.34 1.717,0.83 2.263,1.48c0.569,0.64 0.853,1.5 0.853,2.58c0,1.59 -0.601,2.82 -1.804,3.7c-1.202,0.88 -2.82,1.32 -4.854,1.32z" fill="white"/>
              </svg>
            </div>

            {/* Navigation Links */}
            <div className="flex flex-wrap gap-6 md:gap-10">
              <a href="#about" className="text-white text-lg underline hover:opacity-70 transition-opacity duration-300">
                About us
              </a>
              <a href="#services" className="text-white text-lg underline hover:opacity-70 transition-opacity duration-300">
                Services
              </a>
              <a href="#cases" className="text-white text-lg underline hover:opacity-70 transition-opacity duration-300">
                Use Cases
              </a>
              <a href="#pricing" className="text-white text-lg underline hover:opacity-70 transition-opacity duration-300">
                Pricing
              </a>
              <a href="#blog" className="text-white text-lg underline hover:opacity-70 transition-opacity duration-300">
                Blog
              </a>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-5">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity duration-300">
                <svg viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8">
                  <circle cx="15" cy="15" r="15" fill="white"/>
                  <path d="M8.22,22.06h3.09v-9.99h-3.09z" fill="black"/>
                  <path d="M7.94,8.89c0,0.98 0.8,1.78 1.82,1.78c0.98,0 1.78,-0.8 1.78,-1.78c0,-0.99 -0.8,-1.83 -1.78,-1.83c-1.02,0 -1.82,0.84 -1.82,1.83z" fill="black"/>
                  <path d="M19.81,22.06h3.13v-5.49c0,-2.67 -0.61,-4.78 -3.74,-4.78c-1.49,0 -2.52,0.85 -2.94,1.64h-0.05v-1.36h-2.94v9.99h3.08v-4.92c0,-1.32 0.24,-2.58 1.87,-2.58c1.59,0 1.59,1.5 1.59,2.62z" fill="black"/>
                </svg>
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity duration-300">
                <svg viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8">
                  <path d="M30,15.09c0,-8.34 -6.71,-15.09 -15,-15.09c-8.29,0 -15,6.75 -15,15.09c0,7.55 5.44,13.81 12.64,14.91v-10.53h-3.81v-4.38h3.81v-3.28c0,-3.78 2.24,-5.91 5.63,-5.91c1.69,0 3.38,0.31 3.38,0.31v3.71h-1.87c-1.88,0 -2.48,1.16 -2.48,2.37v2.8h4.17l-0.66,4.38h-3.51v10.53c7.2,-1.1 12.7,-7.36 12.7,-14.91z" fill="white"/>
                </svg>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity duration-300">
                <svg viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8">
                  <circle cx="15" cy="15" r="15" fill="white"/>
                  <path d="M22,11.49c0.69,-0.52 1.31,-1.14 1.79,-1.86c-0.62,0.28 -1.35,0.48 -2.07,0.55c0.76,-0.45 1.31,-1.14 1.59,-2c-0.69,0.42 -1.49,0.73 -2.28,0.9c-0.69,-0.72 -1.62,-1.14 -2.65,-1.14c-2,0 -3.62,1.62 -3.62,3.62c0,0.28 0.03,0.55 0.1,0.83c-3,-0.17 -5.69,-1.62 -7.48,-3.79c-0.31,0.51 -0.48,1.13 -0.48,1.82c0,1.24 0.62,2.35 1.62,3c-0.59,-0.03 -1.17,-0.17 -1.65,-0.45v0.04c0,1.76 1.24,3.2 2.89,3.55c-0.28,0.07 -0.62,0.14 -0.93,0.14c-0.24,0 -0.45,-0.04 -0.69,-0.07c0.45,1.44 1.79,2.48 3.38,2.51c-1.24,0.97 -2.79,1.55 -4.48,1.55c-0.31,0 -0.59,-0.03 -0.86,-0.06c1.58,1.03 3.48,1.62 5.54,1.62c6.66,0 10.28,-5.49 10.28,-10.28c0,-0.17 0,-0.31 0,-0.48z" fill="black"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Contact Info and Newsletter */}
          <div className="flex flex-col md:flex-row gap-8 md:gap-[180px] md:items-start">
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
            <div className="bg-brand-dark rounded-14 px-8 py-8 md:px-10 md:py-8 w-full md:w-auto md:max-w-[634px]">
              <form onSubmit={(e) => { e.preventDefault(); alert('Thank you for subscribing!'); }} className="flex flex-col md:flex-row gap-4 md:gap-5">
                <input
                  type="email"
                  placeholder="Email"
                  required
                  className="flex-1 bg-transparent border border-white rounded-14 px-6 py-5 text-lg text-white placeholder-white focus:outline-none focus:border-brand-green transition-colors duration-300"
                />
                <button 
                  type="submit"
                  className="bg-brand-green text-black text-lg md:text-xl font-normal px-6 py-4 md:px-9 md:py-5 rounded-14 hover:opacity-90 transition-all duration-300 whitespace-nowrap cursor-pointer flex items-center justify-center"
                >
                  Subscribe to news
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col gap-6 md:gap-8 mt-12 md:mt-16">
          <div className="border-t border-white"></div>
          <div className="flex flex-col md:flex-row gap-4 md:gap-10">
            <p className="text-lg text-white">© 2023 Positivus. All Rights Reserved.</p>
            <a href="#privacy" className="text-lg text-white underline hover:opacity-70 transition-opacity duration-300">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
