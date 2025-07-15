import React from 'react'
import { Link } from 'react-router-dom'

const BannerBox = (props) => {
  return (
    <div
      className="box BannerBox group w-full"
      style={{
        borderRadius: '12px',          // Force rounded corners
        overflow: 'hidden',            // Clip image overflow
      }}
    >
      <Link to="/">
        <img
          src={props.img}
          alt="banner"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            borderRadius: '12px',       // Also force on image for visual sync
            
          }}
          className="transition-all group-hover:scale-105 group-hover:rotate-1"
        />
      </Link>
    </div>
  )
}

export default BannerBox
