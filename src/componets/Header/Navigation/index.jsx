import React from 'react';
import Button from '@mui/material/Button';
import { RiMenu2Fill } from 'react-icons/ri';
import { LiaAngleDownSolid } from 'react-icons/lia';
import { Link } from 'react-router-dom';
import { GoRocket } from 'react-icons/go';
import CategoryPanel from './CategoryPanel';
import "../Navigation/style.css"

const Navigation = () => {
  const [isOpenCatPanel, setIsOpenCatPanel] = React.useState(false);

  const openCategoryPanel = (open) => {
    setIsOpenCatPanel(open);
  }

  return (
    <>
      <nav >
        <div className="container">
          <div
            className="container"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end',
              gap: '20px',
              transition: 'all 0.3s ease-in-out',
            }}
          >
            {/* Shop by Categories Button */}
            <div className="col_1 w-[20%]">
              <Button
                style={{
                  color: 'black',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '8px',
                  width: '100%',
                  textTransform: 'none',
                }}
                onClick={() => {openCategoryPanel(true)}}
              >
                <RiMenu2Fill style={{ fontSize: '18px' }} />
                <span className="text-[15px] font-medium whitespace-nowrap">
                  Shop by categories
                </span>
                <LiaAngleDownSolid style={{ fontSize: '13px' }}  className='ml-auto font-bold '/>
              </Button>
            </div>

            {/* Navigation Links */}
            <div className="col_2 w-[60%]">
              <ul className="flex items-center gap-3 nav">
                <li className="list-none">
                  <Link
                    to="/"
                    style={{
                      fontWeight: 500,
                      fontSize: '14px',
                      textDecoration: 'none',
                      transition: 'all 0.2s ease-in-out',
                      marginRight: '20px',
                      color: 'black',
                    }}
                    onMouseEnter={(e) => (e.target.style.color = '#16a34a')}
                    onMouseLeave={(e) => (e.target.style.color = 'black')}
                  >
                    <Button className="!link transition text-[rgba(0,0,0,0.8)]
                    !py-4"> Home</Button>
                  </Link>
                </li>

                <li className="list-none relative" >
                  <Link
                    to="/"
                    style={{
                      color: 'black',
                      fontWeight: 500,
                      fontSize: '14px',
                      textDecoration: 'none',
                      transition: 'all 0.2s ease-in-out',
                      marginRight: '20px',
                    }}
                    onMouseEnter={(e) => (e.target.style.color = '#16a34a')}
                    onMouseLeave={(e) => (e.target.style.color = 'black')}
                  >
                    Fashion
                  </Link>

                  <div
  className="submenu absolute top-[120%] left-[0%] min-w-[150px] shadow-md opacity-0  transition-all "
  style={{ backgroundColor: 'white', background: 'white !important' }}
>

                    <ul>
                      <li className='list-none w-full relative'>
                        <Link to="/" className='w-full'>
                        <Button className='!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !rounded-none'>Men</Button>

                         <div
  className="submenu absolute top-[0%] left-[100%] min-w-[150px] shadow-md opacity-0  transition-all "
  style={{ backgroundColor: 'white', background: 'white !important' }}
>

                    <ul>
                      <li className='list-none w-full'>
                        <Link to="/" className='w-full'>
                        <Button className='!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !rounded-none'>T-shirt</Button>
                        </Link>
                      </li>
                       <li className='list-none'>
                        <Link to="/" className='w-full'>
                        <Button className='!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !rounded-none'>Jeans</Button>
                        </Link>
                      </li>
                       <li className='list-none'>
                        <Link to="/" className='w-full'>
                        <Button className='!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !rounded-none'>Footware</Button>
                        </Link>
                      </li>
                       <li className='list-none'>
                        <Link to="/" className='w-full'>
                        <Button className='!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !rounded-none'>Watch</Button>
                        </Link>
                      </li>
                       <li className='list-none'>
                        <Link to="/" className='w-full'>
                        <Button className='!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !rounded-none'>Pents</Button>
                        </Link>
                      </li>
                     
                    </ul>
                  </div>
                        </Link>
                      </li>
                       <li className='list-none'>
                        <Link to="/" className='w-full'>
                        <Button className='!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !rounded-none'>Women</Button>
                        </Link>
                      </li>
                       <li className='list-none'>
                        <Link to="/" className='w-full'>
                        <Button className='!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !rounded-none'>Kids</Button>
                        </Link>
                      </li>
                       <li className='list-none'>
                        <Link to="/" className='w-full'>
                        <Button className='!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !rounded-none'>Girls</Button>
                        </Link>
                      </li>
                       <li className='list-none'>
                        <Link to="/" className='w-full'>
                        <Button className='!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !rounded-none'>Boys</Button>
                        </Link>
                      </li>
                     
                    </ul>
                  </div>
                </li>

                <li className="list-none">
                  <Link
                    to="/"
                    style={{
                      color: 'black',
                      fontWeight: 500,
                      fontSize: '14px',
                      textDecoration: 'none',
                      transition: 'all 0.2s ease-in-out',
                      marginRight: '20px',
                    }}
                    onMouseEnter={(e) => (e.target.style.color = '#16a34a')}
                    onMouseLeave={(e) => (e.target.style.color = 'black')}
                  >
                    Electronics
                  </Link>
                </li>

                <li className="list-none">
                  <Link
                    to="/"
                    style={{
                      color: 'black',
                      fontWeight: 500,
                      fontSize: '14px',
                      textDecoration: 'none',
                      transition: 'all 0.2s ease-in-out',
                      marginRight: '20px',
                    }}
                    onMouseEnter={(e) => (e.target.style.color = '#16a34a')}
                    onMouseLeave={(e) => (e.target.style.color = 'black')}
                  >
                    Bags
                  </Link>
                </li>

                <li className="list-none">
                  <Link
                    to="/"
                    style={{
                      color: 'black',
                      fontWeight: 500,
                      fontSize: '14px',
                      textDecoration: 'none',
                      transition: 'all 0.2s ease-in-out',
                      marginRight: '20px',
                    }}
                    onMouseEnter={(e) => (e.target.style.color = '#16a34a')}
                    onMouseLeave={(e) => (e.target.style.color = 'black')}
                  >
                    Footwear
                  </Link>
                </li>

                <li className="list-none">
                  <Link
                    to="/"
                    style={{
                      color: 'black',
                      fontWeight: 500,
                      fontSize: '14px',
                      textDecoration: 'none',
                      transition: 'all 0.2s ease-in-out',
                      marginRight: '20px',
                    }}
                    onMouseEnter={(e) => (e.target.style.color = '#16a34a')}
                    onMouseLeave={(e) => (e.target.style.color = 'black')}
                  >
                    Groceries
                  </Link>
                </li>

                <li className="list-none">
                  <Link
                    to="/"
                    style={{
                      color: 'black',
                      fontWeight: 500,
                      fontSize: '14px',
                      textDecoration: 'none',
                      transition: 'all 0.2s ease-in-out',
                      marginRight: '20px',
                    }}
                    onMouseEnter={(e) => (e.target.style.color = '#16a34a')}
                    onMouseLeave={(e) => (e.target.style.color = 'black')}
                  >
                    Beauty
                  </Link>
                </li>

                <li className="list-none">
                  <Link
                    to="/"
                    style={{
                      color: 'black',
                      fontWeight: 500,
                      fontSize: '14px',
                      textDecoration: 'none',
                      transition: 'all 0.2s ease-in-out',
                      marginRight: '20px',
                    }}
                    onMouseEnter={(e) => (e.target.style.color = '#16a34a')}
                    onMouseLeave={(e) => (e.target.style.color = 'black')}
                  >
                    Wellness
                  </Link>
                </li>

                <li className="list-none">
                  <Link
                    to="/"
                    style={{
                      color: 'black',
                      fontWeight: 500,
                      fontSize: '14px',
                      textDecoration: 'none',
                      transition: 'all 0.2s ease-in-out',
                      marginRight: '20px',
                    }}
                    onMouseEnter={(e) => (e.target.style.color = '#16a34a')}
                    onMouseLeave={(e) => (e.target.style.color = 'black')}
                  >
                    Jewellery
                  </Link>
                </li>
              </ul>
            </div>

            {/* Delivery Info */}
            <div className="col_3 w-[20%]">
              <p className="text-[14px] font-[500] flex items-center gap-3 mb-0 mt-0">
                <GoRocket className="text-[18px]" />
                Free International Delivery
              </p>
            </div>
          </div>
        </div>
      </nav>

      {/* category component */}
      <CategoryPanel
       
        isOpenCatPanel={isOpenCatPanel}
        openCategoryPanel={openCategoryPanel}
      />
    </>
  );
};

export default Navigation;
