"use client";
import React from "react";
import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import './style.css';

const Testimonials = () => {
  return (
    <>
      <header className="text-center mt-8 header-bg">
        <h1 className="font-nunito text-customBlue font-extrabold text-4xl md:text-5xl lg:text-6xl header-title">
          Testimonials
        </h1>
      </header>
      <section className="bg-customGreen pt-20 text-white flex flex-col md:flex-row gap-16 lg:gap-24 pb-44 relative">
        <div className="md:ml-16 flex items-center justify-end">
          <Image
            src="/images/woman.png"
            alt="Woman"
            width={352}
            height={308}
            className="testimonial-img"
          />
        </div>
        <div className="text-center md:text-left flex flex-col justify-center ml-32px">
          <Image src="/images/quotes.png" alt="Quotes" width={105.29} height={103} className="quote-1" />
          <h2 className="font-extrabold mb-4 text-xl md:text-2xl lg:text-3xl testimonial-title" style={{ fontSize: '32px' }}>
            AMAZING CUSTOMER EXPERIENCE
          </h2>
          <p className="text-base md:text-lg lg:text-xl mt-5 testimonial-text" style={{ fontSize: '28px' }}>
            SawaTok is really the best option.<br />
            After doc prescribed it to me, my<br />
            child's fluency has been improving a lot!
          </p>
          <div className="quote-2-wrapper">
            <Image
              src="/images/quotes.png"
              alt="Quotes"
              width={105.29}
              height={103}
              className="quote-2"
            />
          </div>
        </div>
        <div className="flex items-center justify-center md:justify-end">
          <FontAwesomeIcon icon={faChevronRight} className="text-2xl md:text-3xl w-[25px] h-[70px] mt-12 chev-arrow"/>
        </div>
      </section>
    </>
  );
};

export default Testimonials;
