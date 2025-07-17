import React from 'react';
import {IoMdTime} from 'react-icons/io';
import {Link} from "react-router-dom"
import { IoIosArrowForward } from 'react-icons/io';

const BlogItem = () => {
  return (
    <div className="blogItem group">
      <div
        className="imgwrapper w-full h-[200px] cursor-pointer relative"
        style={{
          overflow: 'hidden',
          borderRadius: '10px',
        }}
      >
        <img
          src="https://serviceapi.spicezgold.com/download/1750304462017_1000005912.jpg"
          alt="blog image"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            borderRadius: '8px',
          }}
          className='w-full transition-all group-hover:scale-105 
          group-hover:rotate-1'
        />

        <span className=' flex items-center justify-center text-white absolute bottom-[15px] right-[15px] z-50 bg-[#ff5252] text-[11px] font-[500] gap-1' style={{borderRadius: '5px', padding: '5px 10px',color: '#fff'}}>
            <IoMdTime className='text-[16px] mr-2' />5 APRIL |2023
        </span>
      </div>


      <div className="info py-4">
        <h2 className='text-[15px] font-[800]' style={{color:'#333',marginTop:'20px'}}> <Link to='/' className='link'>From The Blog
            Nullam ullamcorper  ornare</Link> </h2>
            <p className='text-[13px] font-[400] text-[rgba(0,0,0,0.8)] mb-4'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                 Alias quia fugit maiores </p>

                 <Link className="link font-[500] text-[14px] flex items-center gap-1" style={{marginTop:"20px"}}>Read More <IoIosArrowForward/></Link>
      </div>
    </div>
  );
};

export default BlogItem;
