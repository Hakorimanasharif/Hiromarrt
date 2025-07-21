import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { Navigation } from 'swiper/modules'
import BannerBox from '../../components/BannerBox' 
// import BannerBoxV2 from '../../components/BannerBoxV2' 

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
                <BannerBox info="left" img={'https://i.pinimg.com/736x/a6/fc/9f/a6fc9faaa6461caabaeb219fbbe284e2.jpg '} link={''}/>
             </SwiperSlide>
             <SwiperSlide>
                <BannerBox info="left" img={'https://i.pinimg.com/474x/2a/d8/fb/2ad8fbe646e7e4ed7aee1e19a23b3060.jpg'} link={'/'}/>
             </SwiperSlide>
             <SwiperSlide>
                <BannerBox img={'https://i.pinimg.com/1200x/e8/78/d2/e878d25f350a13987b56f41d7f7fc58b.jpg'} link={'/'}/>
             </SwiperSlide>

<SwiperSlide>
                <BannerBox img={'https://i.pinimg.com/1200x/af/7d/ac/af7dac409a3ee758c06db8cb8a5dde03.jpg'} link={'/'}/>
             </SwiperSlide>

<SwiperSlide>
                <BannerBox img={'https://i.pinimg.com/736x/a6/fc/9f/a6fc9faaa6461caabaeb219fbbe284e2.jpg'} link={'/'}/>
             </SwiperSlide>






             </Swiper>
   </div>
  )
}

export default AdsBannerSlider
