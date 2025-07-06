import React, { useState } from 'react'
import Box from '@mui/material/Box'
import Drawer from '@mui/material/Drawer'
import Button from '@mui/material/Button'
import { IoCloseSharp } from 'react-icons/io5'
import { FaRegSquarePlus } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

const CategoryPanel = (props) => {

  const toggleDrawer = (newOpen) => () => {
    props.setIsOpenCatPanel(newOpen)
  }

  const DrawerList = (
    <Box
      sx={{ width: 250 }}
      role="presentation" className="categoryPanel"
    >
      <h3 className='p-3 pl-[10px] mt-[18px] text-[16px] font-[400] flex items-center justify-between'>
  Shop By Categories 
  <IoCloseSharp onClick={() => props.openCategoryPanel(false)} className='cursor-pointer text-[20px]' />
</h3>

     

     <div className='scroll'>
      <ul className='w-full'>
        <li className='list-none flex items-center relative'>
        <Button
  className='w-full !text-left !justify-start !px-3'
  sx={{ color: 'black' }}
>
  Fashion
</Button>
<FaRegSquarePlus className='absolute top-[10px] right-[15px] cursor-pointer'/>



<ul className='submenu absolute top-[100%] left-[0%] w-full pl-3 '>
  <li className='list-none relative'>
         <Button
  className='w-full !text-left !justify-start !px-3'
  sx={{ color: 'black' }}
>
  Apparel
  </Button>
  </li>
</ul>

<ul className='submenu absolute top-[100%] left-[0%] w-full pl-3 '>
  <li className='list-none relative'>
       <Link to='/'
  className='Link w-full !text-left !justify-start !px-3'
  sx={{ color: 'black' }}
>
  Apparel
</Link>
<FaRegSquarePlus className='absolute top-[10px] right-[15px] cursor-pointer'/>
  </li>
</ul>

        </li>
      </ul>
     </div>
    </Box>
  )
  return (
    <>
      <Drawer open={props.isOpenCatPanel} onClose={() => props.openCategoryPanel(false)}>
        {DrawerList}
      </Drawer>
    </>
  )
}

export default CategoryPanel
