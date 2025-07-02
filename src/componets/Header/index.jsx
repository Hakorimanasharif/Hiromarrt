import React from 'react'
import { Link } from 'react-router-dom'
import Search from '../Search'
import { Badge } from '@mui/material'
import { styled } from '@mui/material/styles'
import { IconButton } from '@mui/material'
import { MdOutlineShoppingCart } from 'react-icons/md'
import { IoGitCompareOutline } from 'react-icons/io5'
import { FaRegHeart } from 'react-icons/fa6'
import Tooltip from '@mui/material/Tooltip'

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-dot': {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}))

const Header = () => {
  return (
    <header>
      <div className='top-strip pt-[10px] pb-[10px] border-t border-gray-300 border-b mb-8'>
        <div className='container'>
          <div className='flex items-center justify-between'>
            <div className='col1 w-[50%]'>
              <p className='text-green-500 text-[14px] font-[400]'>Get up to 50% off new season styles, limited time only</p>
            </div>

           <div className="col2 flex items-center justify-end">
  <ul className="flex items-center space-x-10 font-[400] text-[14px]">
    <li className="list-none">
      <Link
        to="/help-center"
        style={{ color: 'black' }}
        className="text-base font-semibold no-underline hover:text-green-600 transition-colors duration-200"
      >
        Help Center
      </Link>
    </li>
    &nbsp;
    |
    &nbsp;

    <li className="list-none">
      <Link
        to="/order-tracking"
        style={{ color: 'black' }}
        className="text-base font-semibold no-underline hover:text-green-600 transition-colors duration-200"
      >
        Order Tracking
      </Link>
    </li>
  </ul>
</div>

          </div>
        </div>
      </div>

      <div className='header'>
        <div className='container flex items-center justify-between'>
          <div className='col1 w-[25%] relative top-2'>
            <Link to={"/"}><img src="https://serviceapi.spicezgold.com/download/1750047766437_logo.jpg" /></Link>
          </div>

          <div className='col2 w-[45%] relative top-2'>
            <Search />
          </div>
        <div className="col3 w-[30%] flex items-center ml-[20px] mt-[20px]">
  <ul className="flex items-center justify-end w-full gap-6">
    <li className="list-none">
      <div className="flex items-center mr-[20px]">
        <Link
          to="/login"
          style={{ color: 'black' }}
          className="no-underline text-[15px] font-medium hover:text-green-600 transition-colors duration-200"
        >
          Login
        </Link>
        <span className="mx-2" style={{ color: 'black' }}>|</span>
        <Link
          to="/register"
          style={{ color: 'black' }}
          className="no-underline text-[15px] font-medium hover:text-green-600 transition-colors duration-200"
        >
          Register
        </Link>
      </div>
    </li>

    <li className="list-none">
      <Tooltip title="Compare" placement='top'>
      <IconButton aria-label="cart" >
        <StyledBadge badgeContent={4} color="secondary">
         <IoGitCompareOutline />
         </StyledBadge>
      </IconButton>
      </Tooltip>
    </li>
     <li className="list-none">
      <Tooltip title="Whishlist" placement='top'>
      <IconButton aria-label="cart" >
        <StyledBadge badgeContent={4} color="secondary">
         <FaRegHeart  />
         </StyledBadge>
      </IconButton>
      </Tooltip>
    </li>

     <li className="list-none">
        <Tooltip title="Cart" placement='top'>
      <IconButton aria-label="cart" >
        <StyledBadge badgeContent={4} color="secondary">
         <MdOutlineShoppingCart />
         </StyledBadge>
      </IconButton>
        </Tooltip>
    </li>
  </ul>
</div>
   </div>

      </div>
    </header>
  )
}

export default Header
