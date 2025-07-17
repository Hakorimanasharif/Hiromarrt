import React from 'react'
import { LiaShippingFastSolid } from 'react-icons/lia'
import { BsWallet } from 'react-icons/bs'
import { LiaGiftSolid } from 'react-icons/lia'
import { BiSupport } from 'react-icons/bi'
import { Link } from 'react-router-dom'
import { TbTruckReturn } from "react-icons/tb"
import { IoChatbubblesOutline } from "react-icons/io5";
import Button from '@mui/material/Button';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { FaFacebookF, FaYoutube, FaPinterest, FaInstagram, FaTwitter, FaCcVisa, FaCcMastercard, FaCcPaypal, FaCcApplePay } from 'react-icons/fa'

const Footer = () => {
  return (
   <>
    <footer>
      <div className="py-6" style={{ background: '#fdfdfd', paddingTop: '3.2rem', paddingBottom: '1.5rem' }}>
        <div className="container">
          <div
            className="flex items-center justify-center gap-2"
            style={{ paddingTop: '2rem', paddingBottom: '2rem' }}
          >
            <div className="col flex items-center justify-center flex-col group" style={{ width: '15%' }}>
              <LiaShippingFastSolid className='text-[40px] transition-all duration-300 group-hover:text-[#ff5252] group-hover:-translate-y-1' />
              <h3 className='text-[16px] font-[600]' style={{ marginTop: '0.75rem' }}>Free Shipping</h3>
              <p className='text-[12px] font-[500]'>For all Orders Over 10,000 RWF</p>
            </div>

            <div className="col flex items-center justify-center flex-col group" style={{ width: '15%' }}>
              <TbTruckReturn className='text-[40px] transition-all duration-300 group-hover:text-[#ff5252] group-hover:-translate-y-1' />
              <h3 className='text-[16px] font-[600]' style={{ marginTop: '0.75rem' }}>30 Days Return</h3>
              <p className='text-[12px] font-[500]'>For an Exchange Product</p>
            </div>

            <div className="col flex items-center justify-center flex-col group" style={{ width: '15%' }}>
              <BsWallet className='text-[40px] transition-all duration-300 group-hover:text-[#ff5252] group-hover:-translate-y-1' />
              <h3 className='text-[16px] font-[600]' style={{ marginTop: '0.75rem' }}>Secured Payment</h3>
              <p className='text-[12px] font-[500]'>Payment Cards Accepted</p>
            </div>

            <div className="col flex items-center justify-center flex-col group" style={{ width: '15%' }}>
              <LiaGiftSolid className='text-[40px] transition-all duration-300 group-hover:text-[#ff5252] group-hover:-translate-y-1' />
              <h3 className='text-[16px] font-[600]' style={{ marginTop: '0.75rem' }}>Special Gifts</h3>
              <p className='text-[12px] font-[500]'>Our First Product Order</p>
            </div>

            <div className="col flex items-center justify-center flex-col group" style={{ width: '15%' }}>
              <BiSupport className='text-[40px] transition-all duration-300 group-hover:text-[#ff5252] group-hover:-translate-y-1' />
              <h3 className='text-[16px] font-[600]' style={{ marginTop: '0.75rem' }}>Support 24/7</h3>
              <p className='text-[12px] font-[500]'>Contact Us Anytime</p>
            </div>
          </div>
        </div>
        <br />

        <hr />

        <div className="foot flex" style={{ paddingTop: '2rem', paddingBottom: '2rem', marginLeft: '2rem' }}>
          <div className="part1 w-[25%] border-r border-[rgba(0,0,0,0.1)] pr-4">
            <h2 className='text-[18px] font-[700]' style={{ marginBottom: '1rem' }}>Contact Us</h2>

            <p className='text-[13px] font-[400]' style={{ marginBottom: '1rem' }}>
              Classyshop - Mega Super Store<br />
              507-Union Trade Centre France
            </p>

            <Link className="link text-[13px]" to="mailto:sales@yourcompany.com">
              sales@yourcompany.com
            </Link>

            <span
              className="text-[25px] font-[600] block w-full text-[#ff5252]"
              style={{ marginTop: '0.75rem', marginBottom: '1.25rem' }}
            >
              (+250) 798 38 88 90
            </span>

            <div className="flex items-center gap-2" style={{ marginTop: '1rem' }}>
              <IoChatbubblesOutline className='text-[40px] text-[#ff5252]' />
              <span className='text-[16px]' style={{ fontWeight: 600, paddingLeft: '20px' }}>
                Online Chat <br />
                Get Expert Help
              </span>
            </div>
          </div>

          <div className="part2 w-[40%] flex" style={{paddingLeft:"35px"}}>
            <div className="part2_col1 w-[50%]">
                <h2 className="text-[18px] font-[600] mb-4" style={{marginBottom:"1rem"}}>Products</h2>

                <ul className='list'>
                    <li className='list-none text-[14px] w-full' style={{marginBottom:"15px"}}><Link to="/" className='link hover:text-[#ff5252]'>Prices drop</Link></li>
                    <li className='list-none text-[14px] w-full' style={{marginBottom:"15px"}}><Link to="/" className='link hover:text-[#ff5252]'>New products</Link></li>
                    <li className='list-none text-[14px] w-full' style={{marginBottom:"15px"}}><Link to="/" className='link hover:text-[#ff5252]'>Best sales</Link></li>
                    <li className='list-none text-[14px] w-full' style={{marginBottom:"15px"}}><Link to="/" className='link hover:text-[#ff5252]'>Contact us</Link></li>
                    <li className='list-none text-[14px] w-full' style={{marginBottom:"15px"}}><Link to="/" className='link hover:text-[#ff5252]'>Sitemap</Link></li>
                    <li className='list-none text-[14px] w-full' style={{marginBottom:"15px"}}><Link to="/" className='link hover:text-[#ff5252]'>Stores</Link></li>
                </ul>
            </div>

            <div className="part2_col2 w-[50%]">
                <h2 className="text-[18px] font-[600] mb-4" style={{marginBottom:"1rem"}}>Our company</h2>

                <ul className='list'>
                    <li className='list-none text-[14px] w-full' style={{marginBottom:"15px"}}><Link to="/" className='link hover:text-[#ff5252]'>Delivery</Link></li>
                    <li className='list-none text-[14px] w-full' style={{marginBottom:"15px"}}><Link to="/" className='link hover:text-[#ff5252]'>Legal Notice</Link></li>
                    <li className='list-none text-[14px] w-full' style={{marginBottom:"15px"}}><Link to="/" className='link hover:text-[#ff5252]'>Terms and conditions of use</Link></li>
                    <li className='list-none text-[14px] w-full' style={{marginBottom:"15px"}}><Link to="/" className='link hover:text-[#ff5252]'>About us</Link></li>
                    <li className='list-none text-[14px] w-full' style={{marginBottom:"15px"}}><Link to="/" className='link hover:text-[#ff5252]'>Secure payment</Link></li>
                    <li className='list-none text-[14px] w-full' style={{marginBottom:"15px"}}><Link to="/" className='link hover:text-[#ff5252]'>Login</Link></li>
                </ul>
            </div>
          </div>

          <div className="part3 w-[35%] flex flex-col" style={{paddingLeft:"35px",paddingRight:"2rem"}}>
            <h2 className='text-[18px] font-[700]' style={{ marginBottom: '1rem' }}>Subscribe to newsletter</h2>
            <p className='text-[13px]'>Subscribe to our latest newsletter to get news about special discounts.</p>

            <form className='mt-5' style={{ marginTop: '1.25rem' }}>
                <input 
                  type="text" 
                  className='w-full h-[45px] border outline-none focus:border-[rgba(0,0,0,0.3)]' 
                  style={{
                    paddingLeft:"10px",
                    paddingRight:"3rem",
                    borderRadius:"0.125rem",
                    marginTop:"10px",
                    marginBottom:"10px",
                  }} 
                  placeholder='Your Email Address'
                />
                
                <Button 
                  variant="contained" 
                  style={{backgroundColor: '#ff5252',color: 'white',width: '30%',padding: '10px',marginBottom: '15px'}}
                >
                  SUBSCRIBE
                </Button>

                <FormControlLabel 
                  control={
                    <Checkbox 
                       
                      className='custom-checkbox'
                      sx={{
                        color: '#ff5252',
                        '&.Mui-checked': {
                          color: '#ff5252',
                        },
                      }}
                    />
                  } 
                  label="I agree to the terms and conditions and the privacy policy" 
                  sx={{
                    fontSize: '12px',
                    '& .MuiFormControlLabel-label': {
                      fontSize: '12px'
                    }
                  }}
                />
             </form>
          </div>
        </div>
      </div>

      <div className="bottomStrip border-t border-[rgba(0,0,0,0.2)] py-4" style={{ padding: '1rem 2rem', background: '#fdfdfd' }}>
        <div className="container flex items-center justify-between">
            <div className="flex items-center" style={{gap:"1rem"}}>
            <Link to="/" target='_blank' className='w-[35px] h-[35px] rounded-full border border-[rgba(0,0,0,0.1)] flex items-center justify-center hover:bg-[#ff5252] group transition-all'>
              <FaFacebookF className='text-[14px] text-black group-hover:text-white ' style={{color:"#333"}}/>
            </Link>
            <Link to="/"  target='_blank' className='w-[35px] h-[35px] rounded-full border border-[rgba(0,0,0,0.1)] flex items-center justify-center hover:bg-[#ff5252] group transition-colors'>
              <FaTwitter className='text-[14px] text-black group-hover:text-white' style={{color:"#333"}}/>
            </Link>
            <Link to="/"  target='_blank' className='w-[35px] h-[35px] rounded-full border border-[rgba(0,0,0,0.1)] flex items-center justify-center hover:bg-[#ff5252] group transition-colors'>
              <FaYoutube className='text-[14px] text-black group-hover:text-white' style={{color:"#333"}}/>
            </Link>
            <Link to="/"  target='_blank' className='w-[35px] h-[35px] rounded-full border border-[rgba(0,0,0,0.1)] flex items-center justify-center hover:bg-[#ff5252] group transition-colors'>
              <FaPinterest className='text-[14px] text-black group-hover:text-white' style={{color:"#333"}} />
            </Link>
            <Link to="/"  target='_blank' className='w-[35px] h-[35px] rounded-full border border-[rgba(0,0,0,0.1)] flex items-center justify-center hover:bg-[#ff5252] group transition-colors'>
              <FaInstagram className='text-[14px] text-black group-hover:text-white' style={{color:"#333"}}/>
            </Link>
          </div>
         
          
          <div className="text-center">
           <p className="text-[13px] mb-0">
  © {new Date().getFullYear()} - Hiromart All Rights Reserved
</p>

          </div>

           <div className="flex items-center gap-4">
           <img src="https://ecommerce-frontend-view.netlify.app/paypal.png" alt="payment" />
           <img src="https://ecommerce-frontend-view.netlify.app/visa.png" alt="payment" />
           <img src="https://ecommerce-frontend-view.netlify.app/master_card.png" alt="payment" />
           <img src="data:image/png;base64,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" alt="payment" className='w-[40px] h-[25px]'/>
           <img src="data:image/png;base64,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" alt="payment" className='w-[40px] h-[25px]'/>


          </div>
          
          
        </div>
      </div>
    </footer>
   </>
  )
}

export default Footer