import { useState } from 'react';
import arrowLeft from '../assets/arrow-left.svg';
import arrowRight from '../assets/arrow-right.svg';
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
      text: '"We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence."',
      author: 'John Smith',
      position: 'Marketing Director at XYZ Corp',
    },
    {
      text: '"We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence."',
      author: 'John Smith',
      position: 'Marketing Director at XYZ Corp',
    },
  ];

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
            className="flex transition-transform duration-500 ease-in-out"
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
            onClick={() => setCurrentSlide(Math.max(0, currentSlide - 1))}
            className="w-16 h-16 flex items-center justify-center opacity-30 hover:opacity-100 transition-opacity"
            disabled={currentSlide === 0}
          >
            <img src={arrowLeft} alt="Previous" className="w-6 h-6" />
          </button>

          <div className="flex items-center gap-4">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className="w-3.5 h-3.5"
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
            onClick={() => setCurrentSlide(Math.min(testimonials.length - 1, currentSlide + 1))}
            className="w-16 h-16 flex items-center justify-center hover:opacity-70 transition-opacity"
            disabled={currentSlide === testimonials.length - 1}
          >
            <img src={arrowRight} alt="Next" className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
