 import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { EffectFade, Navigation, Pagination } from 'swiper/modules'; 
import Button from '@mui/material/Button';

const HomeBannerV2 = () => {
  return (
    <Swiper
      spaceBetween={30} 
      effect="fade"     
      navigation={true}
      pagination={{ clickable: true }} 
      modules={[EffectFade, Navigation, Pagination]}
      className="homeSliderV2"
    >
      <SwiperSlide>
        <div 
          className="item w-full rounded-md overflow-hidden relative" 
          style={{ borderRadius: "6px" }}
        >
          <img
            src="https://serviceapi.spicezgold.com/download/1742441193376_1737037654953_New_Project_45.jpg"
            alt="Slide 1"
            className="w-full"
          />
          <div className="info absolute top-0 right-0 z-50 p-10 flex flex-col items-center justify-center w-[50%] duration-500"
            style={{ position: "absolute", top: 0, right: 0, zIndex: 50 }}
          >
            <h4
              className="text-[18px] w-full font-[500] text-left"
              style={{ marginBottom: 20, marginTop: 70 }}
            >
              Big saving Days Deals
            </h4>
            <h2 className="text-[35px] w-full font-[700]">
              Women Solid Round Green T-Shirt
            </h2>
            <h3
              className="text-[18px] flex items-center w-full font-[500] text-left"
              style={{ marginBottom: 10, marginTop: 10, gap: 10 }}
            >
              Starting At Only
              <span className="text-[#ff5252] text-[30px] font-[700]">
                50,000 RWF
              </span>
            </h3>

            <div className='w-full'>
              <Button className='btn-org'>SHOP NOW</Button>
            </div>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div
          className="item w-full rounded-md overflow-hidden"
          style={{ borderRadius: "0.375rem" }}
        >
          <img
            src="https://serviceapi.spicezgold.com/download/1742439896581_1737036773579_sample-1.jpg"
            alt="Slide 2"
            className="w-full"
          />
           <div className="info absolute top-0 right-0 z-50 p-10 flex flex-col items-center justify-center w-[50%] transition-all opacity-0 duration-500"
            style={{ position: "absolute", top: 0, right: 0, zIndex: 50 }}
          >
            <h4
              className="text-[18px] w-full font-[500] text-left"
              style={{ marginBottom: 20, marginTop: 70 }}
            >
              Big saving Days 
            </h4>
            <h2 className="text-[35px] w-full font-[700]">
             Biy Modern Chair in Black Color
            </h2>
            <h3
              className="text-[18px] flex items-center w-full font-[500] text-left"
              style={{ marginBottom: 10, marginTop: 10, gap: 10 }}
            >
              Starting At Only
              <span className="text-[#ff5252] text-[30px] font-[700]">
                150,000 RWF
              </span>
            </h3>

            <div className='w-full'>
              <Button className='btn-org'>SHOP NOW</Button>
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default HomeBannerV2;
