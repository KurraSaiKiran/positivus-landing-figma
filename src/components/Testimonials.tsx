import { useState, useEffect } from 'react';
import starIcon from '../assets/star-icon.svg';

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      text: '"We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence."',
      author: 'John Smith',
      position: 'Marketing Director at XYZ Corp',
    },
    {
      text: '"Positivus transformed our digital marketing strategy completely. Their innovative approach and dedication to results helped us achieve a 200% increase in online engagement. The team\'s expertise in SEO and content marketing is unmatched."',
      author: 'Sarah Johnson',
      position: 'CEO at Tech Innovations',
    },
    {
      text: '"Working with Positivus has been a game-changer for our business. Their data-driven approach and creative solutions have significantly improved our ROI. The team is always available and goes above and beyond to ensure our success."',
      author: 'Michael Chen',
      position: 'Founder at Digital Solutions',
    },
    {
      text: '"The expertise and professionalism of the Positivus team exceeded our expectations. They helped us navigate the complex world of digital marketing with ease and delivered outstanding results. Our brand visibility has never been better."',
      author: 'Emily Rodriguez',
      position: 'Marketing Manager at Global Enterprises',
    },
    {
      text: '"Positivus has been instrumental in our company\'s growth. Their strategic approach to social media marketing and PPC campaigns has generated exceptional results. We couldn\'t be happier with their services and highly recommend them."',
      author: 'David Thompson',
      position: 'VP of Marketing at StartUp Hub',
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section className="w-full px-6 md:px-[100px] py-8 md:py-12">
      {/* Heading & Subheading */}
      <div className="flex flex-col md:flex-row gap-6 md:gap-10 mb-10 md:mb-16">
        <div className="bg-brand-green px-2 py-1 rounded-lg w-fit">
          <h2 className="text-[32px] md:text-[40px] font-medium text-black">Testimonials</h2>
        </div>
        <p className="text-lg text-black max-w-[580px]">
          Hear from Our Satisfied Clients: Read Our Testimonials to Learn More about Our Digital Marketing Services
        </p>
      </div>

      {/* Testimonials Carousel */}
      <div className="bg-brand-black rounded-45 p-8 md:p-16">
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {testimonials.map((testimonial, index) => (
              <div key={index} className="w-full flex-shrink-0 px-4">
                <div className="max-w-3xl mx-auto">
                  <div className="border-2 border-brand-green rounded-45 p-8 md:p-12 flex flex-col gap-8">
                    <p className="text-lg text-white">{testimonial.text}</p>
                    <p className="text-lg text-brand-green font-medium">
                      {testimonial.author}
                      <br />
                      <span className="text-white font-normal">{testimonial.position}</span>
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-center gap-8 md:gap-12 mt-12 md:mt-20">
          <button
            onClick={() => setCurrentSlide((currentSlide - 1 + testimonials.length) % testimonials.length)}
            className="w-16 h-16 flex items-center justify-center hover:opacity-70 transition-opacity duration-300"
          >
            <svg viewBox="0 0 20 1" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6">
              <path d="M20,1.5c0.828,0 1.5,-0.67 1.5,-1.5c0,-0.83 -0.672,-1.5 -1.5,-1.5zM-1.061,-1.06c-0.585,0.59 -0.585,1.53 0,2.12l9.546,9.55c0.586,0.58 1.536,0.58 2.122,0c0.585,-0.59 0.585,-1.54 0,-2.12l-8.486,-8.49l8.486,-8.49c0.585,-0.58 0.585,-1.53 0,-2.12c-0.586,-0.58 -1.536,-0.58 -2.122,0zM20,-1.5h-20v3h20z" fill="white"/>
            </svg>
          </button>

          <div className="flex items-center gap-4">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className="w-3.5 h-3.5 transition-opacity duration-300"
              >
                <img
                  src={starIcon}
                  alt=""
                  className={`w-full h-full ${index === currentSlide ? 'opacity-100' : 'opacity-30'}`}
                />
              </button>
            ))}
          </div>

          <button
            onClick={() => setCurrentSlide((currentSlide + 1) % testimonials.length)}
            className="w-16 h-16 flex items-center justify-center hover:opacity-70 transition-opacity duration-300"
          >
            <svg viewBox="0 0 20 1" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6">
              <path d="M0,-1.5c-0.828,0 -1.5,0.67 -1.5,1.5c0,0.83 0.672,1.5 1.5,1.5zM21.061,1.06c0.585,-0.59 0.585,-1.53 0,-2.12l-9.546,-9.55c-0.586,-0.58 -1.536,-0.58 -2.122,0c-0.585,0.59 -0.585,1.54 0,2.12l8.486,8.49l-8.486,8.49c-0.585,0.58 -0.585,1.53 0,2.12c0.586,0.58 1.536,0.58 2.122,0zM0,1.5h20v-3h-20z" fill="white"/>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
