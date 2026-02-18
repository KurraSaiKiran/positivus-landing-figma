import { useState } from 'react';
import minusIcon from '../assets/minus-icon.svg';
import plusIcon from '../assets/plus-icon.svg';

const WorkingProcess = () => {
  const [openItem, setOpenItem] = useState<number | null>(null);

  const processItems = [
    {
      number: '01',
      title: 'Consultation',
      description:
        'During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.',
    },
    {
      number: '02',
      title: 'Research and Strategy Development',
      description:
        'We conduct thorough research and develop a comprehensive strategy tailored to your business objectives.',
    },
  ];

  return (
    <section className="w-full px-6 md:px-[100px] py-8 md:py-12">
      {/* Heading & Subheading */}
      <div className="flex flex-col md:flex-row gap-6 md:gap-10 mb-10 md:mb-16">
        <div className="bg-brand-green px-2 py-1 rounded-lg w-fit">
          <h2 className="text-[32px] md:text-[40px] font-medium text-black">Our Working Process</h2>
        </div>
        <p className="text-lg text-black max-w-[580px]">
          Step-by-Step Guide to Achieving Your Business Goals
        </p>
      </div>

      {/* Process Accordion */}
      <div className="flex flex-col gap-6 md:gap-8">
        {processItems.map((item, index) => (
          <div
            key={index}
            className={`border border-brand-black rounded-45 shadow-card transition-all ${
              openItem === index ? 'bg-brand-green' : 'bg-brand-gray'
            }`}
          >
            {openItem === index ? (
              <div className="p-8 md:p-12 flex flex-col gap-6 md:gap-8">
                <div className="border-t border-black pt-6 md:pt-8"></div>
                <p className="text-lg text-black">{item.description}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-6">
                    <span className="text-[48px] md:text-[60px] font-medium text-black">{item.number}</span>
                    <span className="text-[26px] md:text-[30px] font-medium text-black">{item.title}</span>
                  </div>
                  <button
                    onClick={() => setOpenItem(null)}
                    className="w-12 h-12 md:w-14 md:h-14 flex-shrink-0"
                  >
                    <img src={minusIcon} alt="Collapse" className="w-full h-full" />
                  </button>
                </div>
              </div>
            ) : (
              <div className="p-8 md:p-12 flex items-center justify-between">
                <div className="flex items-center gap-6">
                  <span className="text-[48px] md:text-[60px] font-medium text-black">{item.number}</span>
                  <span className="text-[26px] md:text-[30px] font-medium text-black">{item.title}</span>
                </div>
                <button
                  onClick={() => setOpenItem(index)}
                  className="w-12 h-12 md:w-14 md:h-14 flex-shrink-0"
                >
                  <img src={plusIcon} alt="Expand" className="w-full h-full" />
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default WorkingProcess;
