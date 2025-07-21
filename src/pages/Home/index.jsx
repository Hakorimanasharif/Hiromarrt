import React from 'react'
import HomeSlider from '../../componets/HomeSlider'
import HomeCatSlider from '../../componets/HomeCatSlider'
import { LiaShippingFastSolid } from 'react-icons/lia'
import AdsBannerSlider from '../../componets/AdsBannerSlider'
import AdsBannerSliderV2 from '../../componets/AdsBannerSliderV2'
// Removed import of HomeBannerV2 as directory or file does not exist
import BlogItem from '../../components/BlogItem'

import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import ProductsSlider from '../../componets/ProductsSlider'

import {Swiper,SwiperSlide} from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'

import { Navigation } from 'swiper/modules'

// Removed duplicate import of BlogItem




const Home = () => {
  const [value, setValue] = React.useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <div>
      <HomeSlider />


      {/*<section className='' style={{paddingTop:'1.5rem',paddingBottom:'1.5rem',}}>
        <div className="container flex items-center">
          <div className="part1 w-[75%]" >
            <HomeBannerV2/>
          </div>
        </div>
      </section>*/}
      <HomeCatSlider />

      {/* Popular Products + Tabs */}
      <section
        className="bg-white py-8"
        style={{
          marginTop: '35px',
          backgroundColor: '#ffffff',
          paddingTop: '30px',
          paddingBottom: '20px',
        }}
      >
        <div className="container">
          <div className="flex items-center justify-between">
            {/* Left */}
            <div className="leftSec">
              <h2 className="text-[20px] font-[600]">Popular products</h2>
              <p className="text-[14px] font-[400]">
                Do not miss the current offers until the end of March.
              </p>
            </div>

            {/* Right: Scrollable Tabs */}
            <div className="rightSec w-[60%]">
              <Tabs
                value={value}
                onChange={handleChange}
                variant="scrollable"
                scrollButtons="auto"
                aria-label="scrollable auto tabs example"
                textColor="inherit"
                TabIndicatorProps={{
                  style: {
                    backgroundColor: '#ff5252', // red underline
                  },
                }}
                sx={{
                  '& .MuiTab-root': {
                    color: '#555', // normal tab color
                    fontWeight: 500,
                    textTransform: 'capitalize',
                  },
                  '& .Mui-selected': {
                    color: '#ff5252', // selected tab color
                  },
                }}
              >
                <Tab label="Fashion" />
                <Tab label="Electronics" />
                <Tab label="Bags" />
                <Tab label="Footwear" />
                <Tab label="Groceries" />
                <Tab label="Beauty" />
                <Tab label="Wellness" />
                <Tab label="Jewellery" />
              </Tabs>
            </div>
          </div>

          <ProductsSlider items={5}/>
        </div>
      </section>

      {/* Free Shipping + Ads Banner */}
      <section
        className="mt-[20px]"
        style={{
          backgroundColor: '#ffffff',
          paddingTop: '40px',
          paddingBottom: '40px',
        }}
      >
        <div className="w-full flex flex-col items-center gap-5">
          {/* Free Shipping Box */}
          <div
            className="flex items-center justify-between"
            style={{
              width: '75%',
              height: '100px',
              border: '2px solid #ff5252',
              borderRadius: '8px',
              backgroundColor: '#fff',
              padding: '0 30px',
              boxSizing: 'border-box',
            }}
          >
            {/* Left: Icon + Label */}
            <div className="flex items-center gap-4">
              <LiaShippingFastSolid className="text-[40px] text-black" />
              <span className="text-[18px] font-[600] uppercase text-black">
                Free Shipping
              </span>
            </div>

            {/* Center: Message */}
            <div>
              <p className="text-[16px] font-[500] text-black mb-0">
                Free Delivery Now On Your First Order and over 20,000RWF
              </p>
            </div>

            {/* Right: Price */}
            <p className="font-bold text-[20px] text-black mb-0">
              - Only 20,000 RWF*
            </p>
          </div>

          {/* Ads Banner */}
          <div className="w-[95%] mt-[50px]">
            <AdsBannerSliderV2 items={4} />
          </div>
        </div>
      </section>









      <section className='py-5'  style={{
          backgroundColor: '#ffffff',
          paddingTop: '30px',
          paddingBottom: '20px',
        }}>
        <div className="container">
             <h2 className="text-[20px] font-[600]">Latest Products</h2>
          <ProductsSlider items={5}/>

          <AdsBannerSlider items={3} />
        </div>
      </section>

      <section className='py-5'  style={{
          backgroundColor: '#ffffff',
          paddingTop: '30px',
          paddingBottom: '20px',
        }}>
        <div className="container">
             <h2 className="text-[20px] font-[600]">Featured Products</h2>
          <ProductsSlider items={5}/>

          <AdsBannerSlider items={3} />
        </div>
      </section>




      <section className='py-5 pb-8'  style={{
          backgroundColor: '#ffffff',
          paddingTop: '30px',
          paddingBottom: '20px',
          paddingBottom: '2rem'
        }}>
        <div className="container">
          <h2 className='text-[20px] font-[600] mb-4'>From the blog</h2>
          <Swiper 
          slidesPerView={4}
          spaceBetween={30}
          navigation={true}
          modules={[Navigation]}
          className="blogslider"
          >
            <SwiperSlide>
              <BlogItem />
              </SwiperSlide>

               <SwiperSlide>
              <BlogItem />
              </SwiperSlide>

               <SwiperSlide>
              <BlogItem />
              </SwiperSlide>

               <SwiperSlide>
              <BlogItem />
              </SwiperSlide>


               <SwiperSlide>
              <BlogItem />
              </SwiperSlide>

               <SwiperSlide>
              <BlogItem />
              </SwiperSlide>

               <SwiperSlide>
              <BlogItem />
              </SwiperSlide>
          </Swiper>
        </div>
      </section>



     








       


    </div>
  )
}

export default Home
