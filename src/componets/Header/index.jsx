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
import Navigation from './Navigation'

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
<header style={{ backgroundColor: '#ffffff' }}>


      {/* Top Strip */}
    <div
  className="top-strip pt-[10px] pb-[10px] mb-8"
  style={{
    borderTop: '0.5px solid rgba(0, 0, 0, 0.1)',
    borderBottom: '0.5px solid rgba(0, 0, 0, 0.1)',
    backgroundColor: '#ffffff'
  }}
>


        <div className='container flex items-center justify-between'>
          <div className='col1 w-[50%]'>
            <p className='text-green-500 text-[14px] font-[400]'>
              Get up to 50% off new season styles, limited time only
            </p>
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
              <span style={{ color: 'black' }}>|</span>
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

      {/* Logo + Search Section with Bottom Border */}
    <div
  className="header pb-[15px]"
  style={{
    borderBottom: '0.5px solid rgba(0, 0, 0, 0.1)'
  }}
>


        <div className='container flex items-center justify-between'>
          <div className='col1 w-[25%] relative top-2'>
           <Link to={"/"} className="mt-[10px] block">
  <img
    src="/logo.png"
    alt="Hiromart Logo"
    className="w-[220px]"
  />
</Link>

          </div>

          <div className='col2 w-[45%] relative top-2'>
            <Search />
          </div>

          {/* Login/Register + Icons Section */}
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
                  <IconButton aria-label="compare">
                    <StyledBadge badgeContent={4} color="secondary">
                      <IoGitCompareOutline />
                    </StyledBadge>
                  </IconButton>
                </Tooltip>
              </li>

              <li className="list-none">
                <Tooltip title="Wishlist" placement='top'>
                  <IconButton aria-label="wishlist">
                    <StyledBadge badgeContent={4} color="secondary">
                      <FaRegHeart />
                    </StyledBadge>
                  </IconButton>
                </Tooltip>
              </li>

              <li className="list-none">
                <Tooltip title="Cart" placement='top'>
                  <IconButton aria-label="cart">
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

      <Navigation />
    </header>
  )
}

export default Header
