import React, { useState } from 'react'
import "../ProductItem/style.css"
import Rating from '@mui/material/Rating'
import { Link } from 'react-router-dom'
import Button from "@mui/material/Button"
import { FaRegHeart } from 'react-icons/fa'
import { IoGitCompareOutline } from 'react-icons/io5'
import { MdZoomOutMap } from 'react-icons/md'
import Tooltip from '@mui/material/Tooltip'

const ProductItem = () => {
  const [hoverZoom, setHoverZoom] = useState(false)
  const [hoverHeart, setHoverHeart] = useState(false)
  const [hoverCompare, setHoverCompare] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div className="productItem shadow-lg w-[230px] p-2 rounded-md overflow-hidden border border-[rgba(0,0,0,0.1)] relative">
      
      {/* Image section */} 
      <div 
        className="group imgWrapper w-full h-[250px] overflow-hidden rounded-md relative"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Link to="/">
        <div className="img h-[250px] overflow-hidden ">
          <img
          src={isHovered ? "https://serviceapi.spicezgold.com/download/1742462485033_siril-poly-silk-grey-off-white-color-saree-with-blouse-piece-product-images-rvcpwdyagl-0-202304220521.webp" : "https://serviceapi.spicezgold.com/download/1742462485037_siril-poly-silk-grey-off-white-color-saree-with-blouse-piece-product-images-rvcpwdyagl-2-202304220521.webp"}
          className="w-full  object-cover rounded-md"
          alt="Product"
        />
        </div>
        </Link>

        {/* Discount tag */}
        <span
          className='discount flex items-center absolute top-[10px] left-[10px] z-50 text-white rounded-full text-[12px] font-[500]'
          style={{
            backgroundColor: '#ff5252',
            padding: '5px 8px',
            color: '#fff'
          }}
        >
          10%
        </span>

        {/* Action buttons */}
        <div
          className='actions absolute top-[-200px] right-[5px] z-50 flex items-center flex-col w-[50px] transition-all duration-700 group-hover:top-[15px]'
          style={{ gap: '5px' }}
        >
          <Tooltip title="View Product" placement="left">
            <Button
              onMouseEnter={() => setHoverZoom(true)}
              onMouseLeave={() => setHoverZoom(false)}
              className='p-0 flex items-center justify-center transition-all duration-300'
              style={{
                width: '45px',
                height: '45px',
                minWidth: '45px',
                borderRadius: '50%',
                backgroundColor: hoverZoom ? '#ff5252' : '#fff',
                color: hoverZoom ? '#fff' : '#000',
                boxShadow: '0 1px 5px rgba(0, 0, 0, 0.1)'
              }}
            >
              <MdZoomOutMap size={17} />
            </Button>
          </Tooltip>

          <Tooltip title="Add to Wishlist" placement="left">
            <Button
              onMouseEnter={() => setHoverHeart(true)}
              onMouseLeave={() => setHoverHeart(false)}
              className='p-0 flex items-center justify-center transition-all duration-300'
              style={{
                width: '45px',
                height: '45px',
                minWidth: '45px',
                borderRadius: '50%',
                backgroundColor: hoverHeart ? '#ff5252' : '#fff',
                color: hoverHeart ? '#fff' : '#000',
                boxShadow: '0 1px 5px rgba(0, 0, 0, 0.1)'
              }}
            >
              <FaRegHeart size={17} />
            </Button>
          </Tooltip>

          <Tooltip title="Compare Product" placement="left">
            <Button
              onMouseEnter={() => setHoverCompare(true)}
              onMouseLeave={() => setHoverCompare(false)}
              className='p-0 flex items-center justify-center transition-all duration-300'
              style={{
                width: '45px',
                height: '45px',
                minWidth: '45px',
                borderRadius: '50%',
                backgroundColor: hoverCompare ? '#ff5252' : '#fff',
                color: hoverCompare ? '#fff' : '#000',
                boxShadow: '0 1px 5px rgba(0, 0, 0, 0.1)'
              }}
            >
              <IoGitCompareOutline size={17} />
            </Button>
          </Tooltip>
        </div>
      </div>

      {/* Product Info */}
     <div className="info p-3 shadow-lg" style={{ lineHeight: '1.6' }}>
  {/* Brand */}
  <h6 className='text-[13px]' style={{ marginBottom: '1px' }}>
    <Link to="/" className="link" style={{ display: 'inline-block' }}>Soylent Green</Link>
  </h6>

  {/* Title */}
  <h3 className='text-[16px] font-[500]' style={{ marginBottom: '1px', color: 'rgba(0,0,0,0.9)' }}>
    <Link to="/" className="link" style={{ display: 'inline-block' }}>
      Siri cloth for women and some men
    </Link>
  </h3>

  {/* Prices */}
  <div className="priceContainer" style={{ display: 'flex', gap: '8px', marginBottom: '1px' }}>
    <del style={{ color: '#888', fontSize: '13px' }}>Frw 20,000</del>
    <span style={{ color: '#ff5252', fontWeight: 600, fontSize: '15px' }}>Frw 18,000</span>
  </div>

  {/* Rating */}
  <Rating name="size-small" defaultValue={4} size="small" readOnly />
</div>

    </div>
  )
}

export default ProductItem
