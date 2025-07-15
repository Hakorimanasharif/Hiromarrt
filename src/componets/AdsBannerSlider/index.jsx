import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { Navigation } from 'swiper/modules'
import BannerBox from '../../components/BannerBox' 

const AdsBannerSlider = (props) => {
  return (
   <div className='py-5 w-full'>
    <Swiper
             slidesPerView={props.items}
             spaceBetween={20}
             navigation={true}
             modules={[Navigation]}
             className="smlBtn mt-[30px]"
           >
             <SwiperSlide>
                <BannerBox img={'/banner1.webp'} link={'/'}/>
             </SwiperSlide>
             <SwiperSlide>
                <BannerBox img={'/banner2.webp'} link={'/'}/>
             </SwiperSlide>
             <SwiperSlide>
                <BannerBox img={'/banner5.webp'} link={'/'}/>
             </SwiperSlide>

<SwiperSlide>
                <BannerBox img={'/banner6.webp'} link={'/'}/>
             </SwiperSlide>

<SwiperSlide>
                <BannerBox img={'/banner1.webp'} link={'/'}/>
             </SwiperSlide>
             <SwiperSlide>
                <BannerBox img={'/banner1.webp'} link={'/'}/>
             </SwiperSlide>

<SwiperSlide>
                <BannerBox img={'/banner1.webp'} link={'/'}/>
             </SwiperSlide>

<SwiperSlide>
                <BannerBox img={'/banner1.webp'} link={'/'}/>
             </SwiperSlide>






             </Swiper>
   </div>
  )
}

export default AdsBannerSlider
