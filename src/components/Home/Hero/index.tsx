"use client"
import Image from 'next/image';
import React, { useState } from 'react';
import { Icon } from "@iconify/react/dist/iconify.js";

const Banner = () => {
  const [isOpen, setOpen] = useState(false);

  const openModal = () => setOpen(true);
  const closeModal = () => setOpen(false);

  return (
    <section className='relative' id="home-section">
      <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md pt-64 px-4 relative">
        <div className='bg-banner-image hidden lg:block absolute w-full h-full top-0 blur-390'></div>
        <div className='relative z-10'>
          <div className='grid grid-cols-1 lg:grid-cols-12 my-16'>
            <div className='col-span-7'>
              <h1 className="text-4xl lg:text-7xl font-bold mb-5 text-white md:4px md:text-start text-center">
                Trade Crypto Seamlessly <br /> Anytime, Anywhere
              </h1>
              <p className='text-white md:text-lg font-normal mb-10 md:text-start text-center'>
                Buy, sell, and trade digital assets with lightning-fast transactions <br />
                and top-tier security. Experience the future of crypto trading today!
              </p>
              <div className='flex align-middle justify-center md:justify-start'>
                <button className='text-xl font-semibold text-white py-4 px-6 lg:px-12 bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary rounded-xl mr-6'>
                  Start Trading
                </button>
               
              </div>
            </div>
            <div className='col-span-5 lg:-m-48'>
              <Image src="/images/Banner/banner.png" alt="banner-image" width={1013} height={760} />
            </div>
          </div>
        </div>
      </div>
     
    </section>
  );
}

export default Banner;
