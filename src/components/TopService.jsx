import React, { useEffect } from 'react';
import bgImg from '../assets/others/section1.webp'

import AOS from 'aos';
import 'aos/dist/aos.css';

const TopService = () => {
    useEffect(() => {
        AOS.init();
      }, [])
    return (
        <div className='py-4'>
            <div className="relative h-96 lg:h-[600px] bg-cover bg-center" style={{ backgroundImage: `url(${bgImg})` }}>
                <div  className="absolute inset-0 bg-black/30 flex flex-col justify-center items-center text-white">
                    <div data-aos="fade-left">
                    <div className='bg-[#242f41]/90 p-12 translate-x-0 md:translate-x-1/2 lg:translate-x-3/4 -skew-x-6'>
                        <div className='px-4 space-y-2'>
                            <h4 className="text-2xl md:text-4xl font-bold">Ready For</h4>
                            <h1 className="text-5xl md:text-7xl font-bold text-[#7fd9c5]">HIKING</h1>
                            <h4 className='text-xl md:text-2xl pb-4'>Book Your Seat Now</h4>
                            <button className='btn btn-md md:btn-lg text-white rounded-none border-none bg-[#ff8900] hover:bg-[#549064]'>Explore Now! </button>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopService;