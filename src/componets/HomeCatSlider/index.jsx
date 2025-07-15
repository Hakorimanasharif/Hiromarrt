import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { Link } from 'react-router-dom'
import { Navigation } from 'swiper/modules'

const HomeCatSlider = () => {
  return (
    <div className='homeCatSlider pt-4 py-8 '>
      <div className='container'>
        <Swiper
          slidesPerView={8}
          spaceBetween={20}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper mt-[30px]" // margin-top: 10px
        >
          <SwiperSlide>
            <Link to="/" className="no-underline" style={{ textDecoration: 'none' }}>
              <div
                className="item py-7 px-3 rounded-sm text-center flex items-center justify-center flex-col w-[150px] h-[180px]"
                style={{ backgroundColor: 'white' }}
              >
                <img
                  src="https://serviceapi.spicezgold.com/download/1751598295572_fash.png"
                  className='w-[60px] transition-all '
                  alt="Fashion"
                />
                <h3
                  className="text-[15px] font-[500] mt-3 no-underline"
                  style={{ color: 'black', textDecoration: 'none' }}
                >
                  Fashion
                </h3>
              </div>
            </Link>
          </SwiperSlide> 
          <SwiperSlide>
            <Link to="/" className="no-underline" style={{ textDecoration: 'none' }}>
              <div
                className="item py-7 px-3 rounded-sm text-center flex items-center justify-center flex-col w-[150px] h-[180px]"
                style={{ backgroundColor: 'white' }}
              >
                <img
                  src="https://serviceapi.spicezgold.com/download/1741660988059_ele.png"
                  className='w-[60px] transition-all '
                  alt="Electronics"
                />
                <h3
                  className="text-[15px] font-[500] mt-3 no-underline"
                  style={{ color: 'black', textDecoration: 'none' }}
                >
                  Electronics
                </h3>
              </div>
            </Link>
          </SwiperSlide> 
          <SwiperSlide>
            <Link to="/" className="no-underline" style={{ textDecoration: 'none' }}>
              <div
                className="item py-7 px-3 rounded-sm text-center flex items-center justify-center flex-col w-[150px] h-[180px]"
                style={{ backgroundColor: 'white' }}
              >
                <img
                  src="https://serviceapi.spicezgold.com/download/1741661045887_bag.png"
                  className='w-[60px] transition-all '
                  alt="Bags"
                />
                <h3
                  className="text-[15px] font-[500] mt-3 no-underline"
                  style={{ color: 'black', textDecoration: 'none' }}
                >
                 Bags
                </h3>
              </div>
            </Link>
          </SwiperSlide> 
          <SwiperSlide>
            <Link to="/" className="no-underline" style={{ textDecoration: 'none' }}>
              <div
                className="item py-7 px-3 rounded-sm text-center flex items-center justify-center flex-col w-[150px] h-[180px]"
                style={{ backgroundColor: 'white' }}
              >
                <img
                  src="https://serviceapi.spicezgold.com/download/1741661061379_foot.png"
                  className='w-[60px] transition-all '
                  alt="Footwear"
                />
                <h3
                  className="text-[15px] font-[500] mt-3 no-underline"
                  style={{ color: 'black', textDecoration: 'none' }}
                >
                  Footwear
                </h3>
              </div>
            </Link>
          </SwiperSlide> 
          <SwiperSlide>
            <Link to="/" className="no-underline" style={{ textDecoration: 'none' }}>
              <div
                className="item py-7 px-3 rounded-sm text-center flex items-center justify-center flex-col w-[150px] h-[180px]"
                style={{ backgroundColor: 'white' }}
              >
                <img
                  src="https://serviceapi.spicezgold.com/download/1741661077633_gro.png"
                  className='w-[60px] transition-all '
                  alt="Groceries"
                />
                <h3
                  className="text-[15px] font-[500] mt-3 no-underline"
                  style={{ color: 'black', textDecoration: 'none' }}
                >
                  Groceries
                </h3>
              </div>
            </Link>
          </SwiperSlide> 
          <SwiperSlide>
            <Link to="/" className="no-underline" style={{ textDecoration: 'none' }}>
              <div
                className="item py-7 px-3 rounded-sm text-center flex items-center justify-center flex-col w-[150px] h-[180px]"
                style={{ backgroundColor: 'white' }}
              >
                <img
                  src="https://serviceapi.spicezgold.com/download/1741661092792_beauty.png"
                  className='w-[60px] transition-all '
                  alt="Beauty"
                />
                <h3
                  className="text-[15px] font-[500] mt-3 no-underline"
                  style={{ color: 'black', textDecoration: 'none' }}
                >
                  Beauty
                </h3>
              </div>
            </Link>
          </SwiperSlide> 
          <SwiperSlide>
            <Link to="/" className="no-underline" style={{ textDecoration: 'none' }}>
              <div
                className="item py-7 px-3 rounded-sm text-center flex items-center justify-center flex-col w-[150px] h-[180px]"
                style={{ backgroundColor: 'white' }}
              >
                <img
                  src="https://serviceapi.spicezgold.com/download/1741661105893_well.png"
                  className='w-[60px] transition-all '
                  alt="Wellness"
                />
                <h3
                  className="text-[15px] font-[500] mt-3 no-underline"
                  style={{ color: 'black', textDecoration: 'none' }}
                >
                 Wellness 
                </h3>
              </div>
            </Link>
          </SwiperSlide> 
          <SwiperSlide>
            <Link to="/" className="no-underline" style={{ textDecoration: 'none' }}>
              <div
                className="item py-7 px-3 rounded-sm text-center flex items-center justify-center flex-col w-[150px] h-[180px]"
                style={{ backgroundColor: 'white' }}
              >
                <img
                  src="https://serviceapi.spicezgold.com/download/1749273446706_jw.png"
                  className='w-[60px] transition-all '
                  alt="Jewellery"
                />
                <h3
                  className="text-[15px] font-[500] mt-3 no-underline"
                  style={{ color: 'black', textDecoration: 'none' }}
                >
                Jewellery    
                           </h3>
              </div>
            </Link>
          </SwiperSlide> 
                  </Swiper>
      </div>
    </div>
  )
}

export default HomeCatSlider
