import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { Link } from 'react-router-dom'
import { Navigation } from 'swiper/modules'
import ProductItem from '../ProductItem'

const ProductsSlider = (props) => {
  return (
   <div className='productsSlider py-5'>
<Swiper
              slidesPerView={props.items}
              spaceBetween={20}
              navigation={true}
              modules={[Navigation]}
              className="mySwiper mt-[30px]" // margin-top: 10px
            >
                  <SwiperSlide>
                <ProductItem/>
            </SwiperSlide>
              <SwiperSlide>
                <ProductItem/>
            </SwiperSlide>
              <SwiperSlide>
                <ProductItem/>
            </SwiperSlide>
              <SwiperSlide>
                <ProductItem/>
            </SwiperSlide>
              <SwiperSlide>
                <ProductItem/>
            </SwiperSlide>
              <SwiperSlide>
                <ProductItem/>
            </SwiperSlide>
              <SwiperSlide>
                <ProductItem/>
            </SwiperSlide>
              <SwiperSlide>
                <ProductItem/>
            </SwiperSlide>
              <SwiperSlide>
                <ProductItem/>
            </SwiperSlide>
            </Swiper>
          
   </div >
  )
}

export default ProductsSlider
