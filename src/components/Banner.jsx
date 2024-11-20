import React from 'react';
import slide1 from '../assets/banner/slider-1.webp'
import slide2 from '../assets/banner/slider-2.webp'
import slide3 from '../assets/banner/slider-3.webp'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css/bundle';


const Banner = () => {
    return (
        <div>
            <Swiper
                pagination={{
                    dynamicBullets: true,
                }}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                modules={[Pagination, Autoplay]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className='relative'>
                        <div>
                            <img src={slide1} alt="" />
                        </div>
                        <div className='hidden md:block p-6 space-y-4 absolute max-w-2xl left-[50%] top-[5%] lg:top-[20%]'>
                            <h4 className='text-3xl lg:text-5xl'>Never Stop</h4>
                            <h1 className='text-[#549064] font-semibold text-5xl lg:text-7xl'>Exploring</h1>
                            <p className='lg:text-lg'>Discover the thrill of the great outdoors as you conquer breathtaking peaks, immerse yourself in nature's beauty, and find serenity on the trail. Every step takes you closer to unforgettable adventures and lifelong memories.</p>
                            <button className='btn text-white rounded-none border-none hover:bg-[#ff8900] bg-[#549064]'>Explore Now! </button>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className='relative'>
                        <div>
                            <img src={slide2} alt="" />
                        </div>
                        <div className='hidden md:block p-6 space-y-4 absolute max-w-2xl left-[5%] top-[5%] lg:top-[20%]'>
                            <h4 className='text-3xl lg:text-5xl'>Make your</h4>
                            <h1 className='text-[#04335E] font-semibold text-5xl lg:text-7xl'>Tour Amazing</h1>
                            <p className='lg:text-lg'>Embark on a journey filled with awe-inspiring landscapes, thrilling adventures, and unforgettable experiences. Let us guide you to hidden gems and breathtaking views that will make your tour truly extraordinary.</p>
                            <button className='btn text-white rounded-none border-none hover:bg-[#ff8900] bg-[#04335E]'>Explore Now! </button>
                        </div>
                    </div>
                </SwiperSlide>
                
                <SwiperSlide>
                    <div className='relative'>
                        <div>
                            <img src={slide3} alt="" />
                        </div>
                        <div className='hidden md:block p-6 space-y-4 absolute max-w-2xl left-[50%] top-[5%] lg:top-[20%]'>
                            <h4 className='text-3xl lg:text-5xl'>Conquer The</h4>
                            <h1 className='text-[#904534] font-semibold text-5xl lg:text-7xl'>Majestic Peaks</h1>
                            <p className='lg:text-lg'>The mountains are calling, and the journey awaits. Experience the thrill of standing above the clouds, breathing in the crisp alpine air, and witnessing the beauty of nature's grandeur. Every climb is a triumph of the spirit.</p>
                            <button className='btn text-white rounded-none border-none hover:bg-[#ff8900] bg-[#904534]'>Explore Now! </button>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Banner;