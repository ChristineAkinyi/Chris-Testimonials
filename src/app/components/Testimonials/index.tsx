"use client";
import React from "react";
import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
const Testimonials = () => {
  return (
    <>
      <header className="text-center mt-8">
        <h1 className="font-nunito text-customBlue font-extrabold text-4xl md:text-5xl lg:text-6xl">
          Testimonials
        </h1>
      </header>
      <section className="bg-customGreen pt-20 text-white flex flex-col md:flex-row gap-16 lg:gap-24 pb-44">
        <div className="md:ml-16 relative md:top-[-10px]">
          <Image
            src="/images/woman.png"
            alt="Woman"
            width={342}
            height={358}
            className=" "
          />
        </div>
          <div className="text-center md:text-left">
             <Image src="/images/quotes.png" alt="Quotes" width={105.29} height={103} className=""/>
            <h2 className="font-extrabold mb-4 text-xl md:text-2xl lg:text-3xl mt-8" style={{ fontSize: '32px' }}>
              AMAZING CUSTOMER EXPERIENCE
            </h2>
            <p className="text-base md:text-lg lg:text-xl mt-8" style={{ fontSize: '32px' }}>
              SawaTok is really the best option.<br />
              After doc prescribed it to me, my<br />
              child's fluency has been improving a lot!
            </p>
            <div className="text-center md:text-left absolute bottom-0 right-0 sm:mb-11">
              <Image
                src="/images/quotes.png"
                alt="Quotes"
                width={105.29}
                height={103}
                className="rotate-180 mr-40 mb-14 md:mb-[20px] "
              />
            </div>
          </div>
          <div className="flex items-center justify-center md:justify-end">
            <FontAwesomeIcon icon={faChevronRight} className="text-2xl md:text-3xl w-[35px] h-[70px] mt-12"/>
          </div>
      </section>
    </>
  );
};
export default Testimonials;















